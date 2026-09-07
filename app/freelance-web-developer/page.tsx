import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire a Freelance Web Developer for Small Business | Deep Tech Solutions",
  description:
    "Looking to hire a freelance web developer? Work directly with an experienced developer — no agency layers, transparent pricing, fast turnaround. Available for businesses worldwide.",
  alternates: { canonical: "https://www.deeptechsolutions.online/freelance-web-developer" },
  openGraph: {
    title: "Hire a Freelance Web Developer | Deep Tech Solutions",
    description: "Direct access to an experienced web developer. No agency layers, transparent pricing, fast turnaround.",
    url: "https://www.deeptechsolutions.online/freelance-web-developer",
  },
};

const agencyVsFreelancer = [
  {
    aspect: "Who you talk to",
    agency: "Account manager who passes messages to a developer",
    freelancer: "Directly with the developer building your site",
  },
  {
    aspect: "Communication",
    agency: "Emails get passed along — 24–72hr delays are common",
    freelancer: "Direct line — same person, fast responses",
  },
  {
    aspect: "Cost",
    agency: "Includes overhead: office, account managers, project managers",
    freelancer: "You pay only for the work — no markup for management layers",
  },
  {
    aspect: "Accountability",
    agency: "Spread across teams — harder to pinpoint responsibility",
    freelancer: "One person responsible for the outcome — clear accountability",
  },
  {
    aspect: "Flexibility",
    agency: "Fixed contracts, defined scope, change requests cost extra",
    freelancer: "Flexible scope, pragmatic problem-solving during the project",
  },
  {
    aspect: "Timeline",
    agency: "Queued behind other clients, slower internal handoffs",
    freelancer: "Faster — no handoffs, no internal bureaucracy",
  },
];

const faqs = [
  {
    q: "Why should I hire a freelance web developer instead of an agency?",
    a: "The main advantages are: direct communication (you speak with the person building your site), lower cost (no agency overhead), faster turnaround (no handoffs), and clear accountability. For a small business website, a freelancer who specialises in your type of project is often a better choice than a generalist agency.",
  },
  {
    q: "How do I know I can trust a freelance developer?",
    a: "Good questions to ask: Can you show me live websites you've built? Do you have case studies? Can you explain your process? Will you provide a clear contract and payment terms? Deep Tech Solutions has live, verifiable demos and a transparent process — you can evaluate the quality of work before committing.",
  },
  {
    q: "What if something goes wrong with my website after launch?",
    a: "All projects come with post-launch support (7–30 days depending on the package). For ongoing maintenance, we offer monthly retainer options. Because you work directly with the developer, there's no support ticket queue — you contact me directly.",
  },
  {
    q: "Can you work with international clients?",
    a: "Yes. Deep Tech Solutions works with businesses across the US, UK, Europe, Australia, and India. All communication is in English, payments are accepted in USD/GBP/EUR, and timezone overlap is available for US and EU hours.",
  },
  {
    q: "Do you sign contracts / NDAs?",
    a: "Yes. Every project has a clear project agreement covering scope, deliverables, payment schedule, and ownership. NDAs are available on request.",
  },
];

export default function FreelanceWebDeveloperPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>
              {" / "}
              <span style={{ color: "var(--color-accent)" }}>Freelance Web Developer</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Freelance Web Developer</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Hire a Freelance Web Developer{" "}
              <span className="text-gradient">for Your Business</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 16 }}>
              Work directly with an experienced web developer — no account managers, no handoffs,
              no agency markup. Fast, professional, and built around your business goals.
            </p>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              Available to businesses in India, the US, UK, Europe, and Australia. Remote-first.
              English-speaking. Responsive.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="freelance-hero-cta">Hire Me for Your Project</Link>
              <Link href="/web-design-development" className="btn btn-ghost" id="freelance-services-link">View Services →</Link>
            </div>
          </div>
        </section>

        {/* ── DIRECT ACCESS SECTION ────────────────────────────── */}
        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, alignItems: "center" }}>
              <div>
                <p className="section-label" style={{ marginBottom: 16 }}>Direct developer access</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 20 }}>
                  You talk to the person building your website
                </h2>
                <p style={{ color: "var(--color-text-2)", lineHeight: 1.7, marginBottom: 16 }}>
                  When you hire Deep Tech Solutions, you&apos;re working with <strong style={{ color: "var(--color-text)" }}>Deepak Kumar</strong> — a senior web developer who handles your project from first call to launch.
                </p>
                <p style={{ color: "var(--color-text-2)", lineHeight: 1.7, marginBottom: 24 }}>
                  No account manager translating your requirements. No developer who never speaks to you. No
                  project manager adding a layer of overhead. Just direct, professional collaboration.
                </p>
                <div style={{ padding: "20px", background: "rgba(201,168,118,0.07)", border: "1px solid rgba(201,168,118,0.15)", borderRadius: "var(--radius-md)", marginBottom: 24 }}>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-2)", lineHeight: 1.7, fontStyle: "italic" }}>
                    &ldquo;No account managers. No project handoffs. You email me, I reply. You have a
                    question, I answer it — not a helpdesk ticket system. This is what direct, professional
                    freelance collaboration looks like.&rdquo;
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-accent)", marginTop: 12, fontWeight: 600 }}>— Deepak Kumar, Deep Tech Solutions</p>
                </div>
              </div>
              <div>
                <div style={{ padding: "28px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)" }}>
                  <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>Key advantages</p>
                  {[
                    "Direct line to the developer — always",
                    "2–5 day first draft turnaround",
                    "Competitive pricing — no agency overhead",
                    "Flexible timezone (IST/GMT/EST overlap)",
                    "Contracts and NDAs available",
                    "Fixed project pricing — no hourly billing",
                    "Post-launch support included",
                    "Global client experience",
                  ].map((adv) => (
                    <div key={adv} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                      <span style={{ color: "var(--color-accent)", fontSize: "0.9rem", marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: "0.9rem", color: "var(--color-text-2)", lineHeight: 1.5 }}>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FREELANCER vs AGENCY TABLE ───────────────────────── */}
        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>Honest comparison</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 12 }}>
              Freelance web developer vs. agency
            </h2>
            <p style={{ color: "var(--color-text-2)", maxWidth: 560, lineHeight: 1.7, marginBottom: 36 }}>
              For most small and medium businesses, a specialist freelancer outperforms a generalist agency
              on every metric that matters.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "14px 16px", textAlign: "left", background: "var(--color-surface)", borderBottom: "2px solid var(--color-border)", color: "var(--color-text)", fontWeight: 700, width: "25%" }}>Aspect</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", background: "var(--color-surface)", borderBottom: "2px solid var(--color-border)", color: "var(--color-text-3)", fontWeight: 600, width: "37.5%" }}>Web Design Agency</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", background: "rgba(201,168,118,0.08)", borderBottom: "2px solid rgba(201,168,118,0.3)", color: "var(--color-accent)", fontWeight: 700, width: "37.5%" }}>Deep Tech Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  {agencyVsFreelancer.map((row, idx) => (
                    <tr key={row.aspect} style={{ background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                      <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--color-border)", fontWeight: 600, color: "var(--color-text)", fontSize: "0.85rem" }}>{row.aspect}</td>
                      <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--color-border)", color: "var(--color-text-3)", lineHeight: 1.5 }}>{row.agency}</td>
                      <td style={{ padding: "14px 16px", borderBottom: "1px solid rgba(201,168,118,0.1)", background: "rgba(201,168,118,0.04)", color: "var(--color-text-2)", lineHeight: 1.5 }}>{row.freelancer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 780 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>FAQ</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              Hiring a freelance web developer — questions answered
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ borderBottom: "1px solid var(--color-border)", padding: "24px 0" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 10 }}>{faq.q}</h3>
                  <p style={{ color: "var(--color-text-2)", lineHeight: 1.7, fontSize: "0.92rem" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="section">
          <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.15 }}>
              Ready to work directly with the developer?
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32 }}>
              Send me a message with your project details and I&apos;ll respond within 24 hours.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="freelance-final-cta">Start a Project</Link>
              <Link href="/pricing" className="btn btn-ghost" id="freelance-pricing-link">View Pricing</Link>
            </div>
            <p style={{ color: "var(--color-text-3)", fontSize: "0.82rem", marginTop: 20 }}>
              Also see:{" "}
              <Link href="/small-business-web-design" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Small Business Web Design</Link>
              {" · "}
              <Link href="/web-design-development" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Web Design & Development</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
