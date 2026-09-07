import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lead Generation Website Design | Websites That Convert | Deep Tech Solutions",
  description:
    "Lead generation website design and development. Conversion-focused websites with forms, WhatsApp integration, booking systems, and local SEO to fill your pipeline.",
  alternates: { canonical: "https://www.deeptechsolutions.online/lead-generation-websites" },
};

const elements = [
  { icon: "📱", title: "Mobile CTA Buttons", desc: "Click-to-call, WhatsApp, and tap-to-email buttons visible above the fold on mobile." },
  { icon: "📝", title: "Multi-Step Enquiry Forms", desc: "Shorter, friendlier forms that ask the right questions and don't overwhelm." },
  { icon: "📅", title: "Online Booking Systems", desc: "Integrated appointment scheduling (Cal.com, Calendly) that removes friction from the process." },
  { icon: "⭐", title: "Social Proof", desc: "Google reviews, testimonials, star ratings, and case studies that build trust before enquiry." },
  { icon: "🎯", title: "Strong Value Propositions", desc: "Clear, benefit-led messaging above the fold that answers 'Why should I contact you?'" },
  { icon: "🔍", title: "Local SEO", desc: "Optimised to appear in Google for '[your service] near me' and local intent searches." },
  { icon: "📊", title: "Analytics & Tracking", desc: "Conversion tracking set up from day one — know exactly which pages are generating leads." },
  { icon: "⚡", title: "Fast Loading", desc: "Slow sites kill leads. All websites are optimised for Core Web Vitals and fast TTFB." },
];

export default function LeadGenerationPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <span style={{ color: "var(--color-accent)" }}>Lead Generation Websites</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Lead Generation</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Lead Generation Website Design{" "}
              <span className="text-gradient">That Actually Works</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              A website that doesn&apos;t generate enquiries is just a brochure. We build websites specifically
              designed to turn visitors into leads — with the right structure, copy, and conversion elements.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="leadgen-cta">Get a Lead Generation Audit</Link>
              <Link href="/local-seo-web-design" className="btn btn-ghost" id="leadgen-seo">Local SEO →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1100 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              What a high-converting website includes
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {elements.map((e) => (
                <div key={e.title} style={{ padding: "24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 12 }} aria-hidden="true">{e.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{e.title}</h3>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--color-bg-2)", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Stop losing leads to a broken website
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              Get a free website review. I&apos;ll identify exactly what&apos;s stopping visitors from contacting you and what it would take to fix it.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="leadgen-final-cta">Get a Free Review</Link>
              <Link href="/small-business-web-design" className="btn btn-ghost" id="leadgen-smbiz">Small Business Websites</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
