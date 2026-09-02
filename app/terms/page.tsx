import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for web design, SEO, and lead generation services provided by Deep Tech Solutions.",
  alternates: {
    canonical: "https://www.deeptechsolutions.online/terms",
  },
};

const LAST_UPDATED = "1 September 2026";
const CONTACT_EMAIL = "hello@deeptechsolutions.online";

export default function TermsOfServicePage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        padding: "120px clamp(20px, 5vw, 60px) 80px",
      }}
    >
      <article style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Back link */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.85rem",
            color: "var(--color-text-3)",
            marginBottom: 40,
            textDecoration: "none",
          }}
        >
          ← Back to homepage
        </Link>

        {/* Header */}
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 12,
          }}
        >
          Legal
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          Terms of Service
        </h1>
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--color-text-3)",
            marginBottom: 48,
            paddingBottom: 24,
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          Last updated: {LAST_UPDATED} · Applies to all projects undertaken by Deep Tech Solutions
        </p>

        {/* Body */}
        <div
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--color-text-2)",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <Section title="1. About these terms">
            <p>
              These Terms of Service govern the relationship between Deep Tech Solutions
              (operated by Deepak Kumar, India — &quot;we,&quot; &quot;us,&quot; &quot;the
              Freelancer&quot;) and any individual or business (&quot;you,&quot;
              &quot;the Client&quot;) that engages our services.
            </p>
            <p style={{ marginTop: 12 }}>
              By engaging our services — whether via email, booking form, WhatsApp, or any
              other channel — you agree to these terms. If you do not agree, please do not
              proceed with the engagement.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              Deep Tech Solutions offers the following services (scope varies by project and
              agreed deliverables):
            </p>
            <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Website design and development</li>
              <li>Local SEO and Google Business Profile optimisation</li>
              <li>Lead generation strategy and landing page build</li>
              <li>Booking system integration (Cal.com, Calendly, and similar)</li>
              <li>Ongoing website maintenance and support retainers</li>
            </ul>
            <p style={{ marginTop: 16 }}>
              The specific deliverables, timeline, and price for each project are confirmed
              in writing (email or proposal) before work begins. These terms apply to all
              such projects unless superseded by a signed separate agreement.
            </p>
          </Section>

          <Section title="3. Project process and delivery">
            <p>
              <strong>3.1 Kick-off:</strong> Work begins only after a project brief has been
              agreed and an initial payment (or full payment for smaller projects) has been
              received.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>3.2 Client responsibilities:</strong> The Client agrees to provide all
              required content (text, images, brand assets, access credentials) within a
              reasonable timeframe. Delays caused by missing content may result in revised
              delivery timelines.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>3.3 Revisions:</strong> Each project tier includes a stated number of
              revision rounds. A revision round is defined as a consolidated set of changes
              submitted in a single feedback document. Additional revision rounds beyond the
              included amount are billed at USD $50 per round.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>3.4 Timeline:</strong> Estimated delivery timelines are provided in good
              faith. We will communicate proactively if any delays arise. Timelines may be
              affected by Client delays in providing content or feedback.
            </p>
          </Section>

          <Section title="4. Pricing and payment">
            <p>
              <strong>4.1 Currency:</strong> All prices are quoted and invoiced in US Dollars
              (USD). Clients outside the USA are responsible for any currency conversion fees
              charged by their bank or payment provider.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>4.2 Payment schedule:</strong> Unless otherwise agreed in writing:
            </p>
            <ul style={{ marginTop: 8, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Projects under USD $500: 100% payment upfront before work begins</li>
              <li>Projects USD $500 and above: 50% upfront, 50% on delivery before handover</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              <strong>4.3 Late payment:</strong> Invoices are due within 7 calendar days of
              issue. Overdue invoices may result in work being paused until payment is
              received.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>4.4 Refunds:</strong> Work completed and delivered is non-refundable.
              If a project is cancelled before delivery, you will be charged for work
              completed to date, calculated at a pro-rata rate of the agreed project price.
            </p>
          </Section>

          <Section title="5. Intellectual property">
            <p>
              <strong>5.1 Upon final payment</strong>, the Client owns all custom design and
              code created specifically for their project (the &quot;Deliverables&quot;).
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>5.2 Third-party assets:</strong> The Deliverables may include
              third-party components (open-source libraries, licensed fonts, stock images). The
              Client is responsible for complying with the licenses of any third-party assets
              included in their project.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>5.3 Portfolio use:</strong> We reserve the right to feature completed
              work in our portfolio and case studies unless the Client requests otherwise in
              writing before project completion.
            </p>
          </Section>

          <Section title="6. Confidentiality">
            <p>
              Both parties agree to keep confidential any sensitive business information shared
              during the engagement (pricing strategies, unreleased products, customer data).
              This obligation survives termination of the project.
            </p>
          </Section>

          <Section title="7. Warranties and limitation of liability">
            <p>
              <strong>7.1</strong> We warrant that work will be carried out with reasonable
              skill and care. We do not guarantee specific business outcomes (e.g., a specific
              number of leads, a specific search ranking position) as these depend on factors
              outside our control.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>7.2</strong> To the maximum extent permitted by law, our liability for
              any claim arising from our services is limited to the total fees paid by the
              Client for the specific project giving rise to the claim.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>7.3</strong> We are not liable for indirect, consequential, or loss-of-
              profit damages arising from the use or inability to use any deliverable.
            </p>
          </Section>

          <Section title="8. Termination">
            <p>
              Either party may terminate a project engagement with 7 days&apos; written notice.
              On termination, the Client will pay for all work completed to date. Access
              credentials and deliverables will be handed over upon receipt of final payment.
            </p>
          </Section>

          <Section title="9. Governing law">
            <p>
              These terms are governed by the laws of India. For EU and UK clients, nothing
              in these terms affects your statutory rights under applicable consumer or
              business protection legislation. Any disputes will first be attempted to be
              resolved amicably via written communication. If unresolved, disputes will be
              subject to the jurisdiction of the courts of India.
            </p>
          </Section>

          <Section title="10. Changes to these terms">
            <p>
              We may update these terms from time to time. The &quot;Last updated&quot; date
              reflects when they were last revised. Continued engagement with our services
              after changes constitutes acceptance.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              Questions about these terms:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "var(--color-accent)", textDecoration: "none" }}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </Section>

          {/* Footer nav */}
          <div
            style={{
              paddingTop: 32,
              borderTop: "1px solid var(--color-border)",
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <Link href="/privacy" style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: "0.9rem" }}>
              Privacy Policy →
            </Link>
            <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none", fontSize: "0.9rem" }}>
              Back to homepage
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--color-text)",
          marginBottom: 16,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
