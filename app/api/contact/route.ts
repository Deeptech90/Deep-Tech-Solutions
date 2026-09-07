import { NextRequest, NextResponse } from "next/server";

// ── Simple in-memory rate limiter ─────────────────────────────────────────────
// For production, replace with Redis-backed rate limiting (e.g. Upstash).
const rateLimitMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // max 5 submissions per IP per hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return true; // allowed
  }
  if (entry.count >= RATE_LIMIT_MAX) return false; // blocked
  entry.count++;
  return true;
}

// ── Input validation ──────────────────────────────────────────────────────────
interface ContactFormData {
  name: string;
  businessName?: string;
  email: string;
  phone?: string;
  businessType?: string;
  currentWebsite?: string;
  requirements?: string;
  budget?: string;
  timeline?: string;
  _honeypot?: string; // must be empty — spam trap
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim().slice(0, 1000);
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse body
    let body: ContactFormData;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Honeypot check — if this field is filled, it's a bot
    if (body._honeypot && body._honeypot.trim().length > 0) {
      // Return success silently to not tip off the bot
      return NextResponse.json({ success: true });
    }

    // Required field validation
    if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
    }
    if (!body.email || !validateEmail(body.email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Sanitize all fields
    const sanitized = {
      name: sanitize(body.name),
      businessName: body.businessName ? sanitize(body.businessName) : "",
      email: sanitize(body.email).toLowerCase(),
      phone: body.phone ? sanitize(body.phone) : "",
      businessType: body.businessType ? sanitize(body.businessType) : "",
      currentWebsite: body.currentWebsite ? sanitize(body.currentWebsite) : "",
      requirements: body.requirements ? sanitize(body.requirements) : "",
      budget: body.budget ? sanitize(body.budget) : "",
      timeline: body.timeline ? sanitize(body.timeline) : "",
    };

    // ── TODO: Send email notification ─────────────────────────────────────────
    // Replace the console.log below with your preferred email service:
    //
    // Option 1 — Resend (recommended, free tier available):
    //   import { Resend } from 'resend';
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'contact@deeptechsolutions.online',
    //     to: 'hello@deeptechsolutions.online',
    //     subject: `New enquiry from ${sanitized.name} — ${sanitized.businessName}`,
    //     text: JSON.stringify(sanitized, null, 2),
    //   });
    //
    // Option 2 — SendGrid:
    //   import sgMail from '@sendgrid/mail';
    //   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    //
    // Option 3 — Nodemailer with SMTP:
    //   import nodemailer from 'nodemailer';
    // ─────────────────────────────────────────────────────────────────────────
    console.log("[Contact Form Submission]", {
      timestamp: new Date().toISOString(),
      ip,
      ...sanitized,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll be in touch within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
