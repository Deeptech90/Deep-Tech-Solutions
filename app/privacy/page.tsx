import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Deep Tech Solutions collects, uses, and protects your personal data. GDPR-compliant privacy notice.",
  alternates: {
    canonical: "https://www.deeptechsolutions.online/privacy",
  },
};

const LAST_UPDATED = "1 September 2026";
const CONTACT_EMAIL = "hello@deeptechsolutions.online";
const SITE_URL = "https://www.deeptechsolutions.online";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
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
          Last updated: {LAST_UPDATED} · Applies to {SITE_URL}
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
          <Section title="1. Who we are">
            <p>
              Deep Tech Solutions is a sole-trader freelance practice operated by Deepak Kumar,
              based in India. We provide web design, local SEO, and lead generation services to
              businesses worldwide, including in the European Union and United Kingdom.
            </p>
            <p style={{ marginTop: 12 }}>
              For the purposes of the EU General Data Protection Regulation (GDPR) and UK GDPR,
              Deep Tech Solutions is the <strong>data controller</strong> for personal data
              collected via this website.
            </p>
            <p style={{ marginTop: 12 }}>
              Contact:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "var(--color-accent)", textDecoration: "none" }}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </Section>

          <Section title="2. What data we collect and why">
            <SubSection title="2.1 Enquiry & booking forms">
              <p>
                When you submit a contact form or book a strategy session, we collect your{" "}
                <strong>name, email address, phone number</strong> (optional), and any details
                you include in your message.
              </p>
              <p style={{ marginTop: 8 }}>
                <strong>Legal basis:</strong> Legitimate interests (Article 6(1)(f) GDPR) — we
                have a legitimate interest in responding to business enquiries. Where you are
                based in the EU and the processing involves special category data, we rely on
                your explicit consent.
              </p>
              <p style={{ marginTop: 8 }}>
                <strong>Retention:</strong> Enquiry data is retained for 24 months from last
                contact and then deleted unless a business relationship continues.
              </p>
            </SubSection>

            <SubSection title="2.2 Analytics cookies (Google Analytics)">
              <p>
                With your consent, we use Google Analytics 4 to understand how visitors use
                this website (pages viewed, time on site, traffic source). Google Analytics
                collects anonymised usage data. No personally identifiable information is sent
                to Google Analytics from this site.
              </p>
              <p style={{ marginTop: 8 }}>
                <strong>Legal basis:</strong> Consent (Article 6(1)(a) GDPR). Analytics only
                loads after you click <em>Accept</em> on our cookie banner. You can withdraw
                consent at any time by clearing your cookies or clicking the privacy link in
                the footer.
              </p>
              <p style={{ marginTop: 8 }}>
                <strong>Retention:</strong> Analytics data is retained for 14 months within
                Google Analytics (our configured maximum).
              </p>
            </SubSection>

            <SubSection title="2.3 Booking system (Cal.com)">
              <p>
                When you book a session via our booking page, your name, email, and selected
                time slot are processed by Cal.com. Cal.com acts as a data processor on our
                behalf. See Cal.com&apos;s{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-accent)", textDecoration: "none" }}
                >
                  Privacy Policy
                </a>{" "}
                for their data practices.
              </p>
            </SubSection>

            <SubSection title="2.4 WhatsApp">
              <p>
                If you contact us via WhatsApp, your message content and phone number are
                processed by Meta Platforms Inc. under their privacy policy. We do not store
                WhatsApp conversations outside of the WhatsApp platform.
              </p>
            </SubSection>

            <SubSection title="2.5 Website hosting (Vercel)">
              <p>
                This website is hosted on Vercel Inc. (USA). Vercel processes server logs
                including IP addresses and request metadata as part of hosting. Vercel is GDPR
                compliant with EU Standard Contractual Clauses in place. See{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-accent)", textDecoration: "none" }}
                >
                  Vercel&apos;s Privacy Policy
                </a>
                .
              </p>
            </SubSection>
          </Section>

          <Section title="3. Cookies">
            <p>We use the following types of cookies:</p>
            <table
              style={{
                width: "100%",
                marginTop: 16,
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr>
                  {["Type", "Name / Provider", "Purpose", "Consent required?"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "8px 12px",
                        borderBottom: "1px solid var(--color-border)",
                        color: "var(--color-text)",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Essential", "dts_cookie_consent", "Stores your cookie preference", "No (necessary)"],
                  ["Analytics", "Google Analytics (_ga, _gid)", "Anonymous usage statistics", "Yes — opt-in"],
                ].map(([type, name, purpose, consent]) => (
                  <tr key={name}>
                    {[type, name, purpose, consent].map((cell, i) => (
                      <td
                        key={i}
                        style={{
                          padding: "10px 12px",
                          borderBottom: "1px solid var(--color-border)",
                          verticalAlign: "top",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 16 }}>
              You can manage or withdraw cookie consent at any time by clearing your browser
              cookies or adjusting your browser settings. Declining analytics cookies does not
              affect your ability to use this website.
            </p>
          </Section>

          <Section title="4. Data sharing and transfers">
            <p>
              We do not sell, rent, or trade your personal data. We share data only with:
            </p>
            <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Vercel Inc.</strong> — website hosting (USA; SCCs in place)</li>
              <li><strong>Google LLC</strong> — analytics, if consented (USA; SCCs in place)</li>
              <li><strong>Cal.com Inc.</strong> — appointment booking (USA; SCCs in place)</li>
              <li><strong>Meta Platforms Inc.</strong> — only if you contact us via WhatsApp</li>
            </ul>
            <p style={{ marginTop: 16 }}>
              All international transfers to the USA are covered by EU Standard Contractual
              Clauses (SCCs) as required under GDPR Chapter V.
            </p>
          </Section>

          <Section title="5. Your rights (EU/UK residents)">
            <p>Under GDPR and UK GDPR, you have the right to:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Access</strong> — request a copy of data we hold about you</li>
              <li><strong>Rectification</strong> — correct inaccurate data</li>
              <li><strong>Erasure</strong> — request deletion of your data ("right to be forgotten")</li>
              <li><strong>Restriction</strong> — restrict how we process your data</li>
              <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
              <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
              <li><strong>Withdraw consent</strong> — at any time, for consent-based processing</li>
            </ul>
            <p style={{ marginTop: 16 }}>
              To exercise any of these rights, email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "var(--color-accent)", textDecoration: "none" }}
              >
                {CONTACT_EMAIL}
              </a>
              . We will respond within 30 days. You also have the right to lodge a complaint
              with your local data protection authority (e.g., the ICO in the UK, or your EU
              national supervisory authority).
            </p>
          </Section>

          <Section title="6. Data security">
            <p>
              We take reasonable technical and organisational measures to protect your data,
              including HTTPS encryption on all pages, access controls on email accounts, and
              no storage of payment card data (payments, if any, are handled by Stripe with
              PCI-DSS compliance).
            </p>
          </Section>

          <Section title="7. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot;
              date at the top of this page reflects when the policy was last revised. Continued
              use of the website after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="8. Contact">
            <p>
              For any privacy-related questions or to exercise your rights, contact us at:{" "}
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
            <Link href="/terms" style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: "0.9rem" }}>
              Terms of Service →
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3
        style={{
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "var(--color-text)",
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
