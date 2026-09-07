import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Local Service Business Website Design | Tradespeople & Contractors | Deep Tech Solutions",
  description:
    "Website design for local service businesses — plumbers, electricians, landscapers, builders, cleaners. Mobile-first lead generation sites with click-to-call and local SEO.",
  alternates: { canonical: "https://www.deeptechsolutions.online/local-service-business-web-design" },
};

export default function LocalServiceWebDesignPage() {
  const trades = ["Plumbers", "Electricians", "Builders & Contractors", "Landscapers & Gardeners", "Cleaners", "Painters & Decorators", "Roofers", "Carpenters & Joiners", "HVAC Technicians", "Pest Control", "Locksmiths", "Tree Surgeons"];

  const features = [
    { icon: "📞", title: "Click-to-Call Button", desc: "The most important element on a trades website — visible on every page, especially on mobile." },
    { icon: "💬", title: "WhatsApp Integration", desc: "Many customers prefer WhatsApp for getting quick quotes. We make it one tap away." },
    { icon: "📋", title: "Quote Request Forms", desc: "Simple, friction-free forms that capture name, location, and job description." },
    { icon: "📍", title: "Service Area Pages", desc: "Location-specific pages for every town or postcode you serve, each optimised for local search." },
    { icon: "⭐", title: "Reviews & Testimonials", desc: "Google reviews and job photos displayed prominently to build trust with local customers." },
    { icon: "🔍", title: "Local SEO", desc: "Rank for '[your trade] in [your town]' searches — where your actual customers are looking." },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <span style={{ color: "var(--color-accent)" }}>Local Service Websites</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Local Service Business Websites</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Website Design for{" "}
              <span className="text-gradient">Local Trades & Service Businesses</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              For plumbers, electricians, landscapers, and all local service businesses — a simple,
              fast website that ranks locally and turns visitors into quote requests and calls.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="local-svc-cta">Get a Quote</Link>
              <Link href="/local-seo-web-design" className="btn btn-ghost" id="local-svc-seo">Local SEO →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1100 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              What every trades website needs to generate leads
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {features.map((f) => (
                <div key={f.title} style={{ padding: "24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 12 }} aria-hidden="true">{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 24 }}>Trades we work with</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {trades.map((t) => (
                <span key={t} style={{ padding: "6px 14px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-full)", fontSize: "0.85rem", color: "var(--color-text-2)" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Get more calls and quote requests
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              Starting from $199. Tell me about your trade, your area, and your customers — I&apos;ll build a site that works.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="local-svc-final-cta">Get a Free Quote</Link>
              <Link href="/pricing" className="btn btn-ghost" id="local-svc-pricing">View Pricing</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
