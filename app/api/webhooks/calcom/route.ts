import { NextRequest, NextResponse } from 'next/server';
import type { CalBookingPayload } from '@/lib/types/funnel';
import { createHmac, timingSafeEqual } from 'crypto';

// ── Webhook signature verification ────────────────────────────────────────────
// Set CAL_WEBHOOK_SECRET in your environment to enable HMAC verification.
// In Cal.com dashboard → Webhooks → add the secret there too.
// TODO: Activate by uncommenting the verifySignature block below.
// ──────────────────────────────────────────────────────────────────────────────

function verifyCalSignature(rawBody: string, signature: string | null): boolean {
  const secret = process.env.CAL_WEBHOOK_SECRET;
  if (!secret) {
    // Secret not configured — skip verification (development mode)
    return true;
  }
  if (!signature) return false;
  try {
    const expected = createHmac('sha256', secret).update(rawBody).digest('hex');
    const expectedBuf = Buffer.from(expected, 'hex');
    const receivedBuf = Buffer.from(signature, 'hex');
    if (expectedBuf.length !== receivedBuf.length) return false;
    return timingSafeEqual(expectedBuf, receivedBuf);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();

    // Signature verification
    const signature = req.headers.get('x-cal-signature-256');
    if (!verifyCalSignature(rawBody, signature)) {
      console.warn('[Cal.com Webhook] Signature verification failed — rejecting request');
      return NextResponse.json(
        { success: false, error: 'Invalid webhook signature' },
        { status: 401 }
      );
    }

    const webhookVersion = req.headers.get('x-cal-webhook-version');
    const payload: CalBookingPayload = JSON.parse(rawBody);
    const eventType = payload.triggerEvent;

    console.log(
      `[Cal.com Webhook] Received: ${eventType} (Version: ${webhookVersion ?? 'unknown'})`
    );

    if (eventType === 'BOOKING_CREATED') {
      const bookingData = payload.payload;
      const customMeta = bookingData.metadata ?? {};
      const primaryAttendee = bookingData.attendees[0] ?? {
        name: 'Unknown',
        email: 'Unknown',
        timeZone: 'Unknown',
      };

      const structuredLeadRecord = {
        calBookingId: bookingData.id,
        eventTitle: bookingData.title,
        startTime: bookingData.startTime,
        endTime: bookingData.endTime,
        clientName: primaryAttendee.name,
        clientEmail: primaryAttendee.email,
        businessName: customMeta['businessName'] ?? 'N/A',
        serviceNeed: customMeta['serviceNeed'] ?? 'N/A',
        industryVertical: customMeta['industryVertical'] ?? 'N/A',
        budgetTier: customMeta['budgetTier'] ?? 'N/A',
        websiteUrl: customMeta['websiteUrl'] ?? 'N/A',
        notes: bookingData.description ?? '',
        ingestedAt: new Date().toISOString(),
      };

      console.log('[Cal.com Webhook] Lead record structured:', structuredLeadRecord);

      // ── Async Action 1: Persist to database ──────────────────────────────────
      // Uncomment and configure when Supabase / Prisma is set up:
      // await db.leadInquiry.create({ data: structuredLeadRecord });

      // ── Async Action 2: Developer notification ────────────────────────────────
      // Uncomment and configure to send WhatsApp / Resend email alert:
      // await dispatchDeveloperNotification(structuredLeadRecord);
    }

    return NextResponse.json({ success: true, processed: true }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[Cal.com Webhook Error]:', message);
    return NextResponse.json(
      { success: false, error: 'Webhook payload processing error' },
      { status: 500 }
    );
  }
}
