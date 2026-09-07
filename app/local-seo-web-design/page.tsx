import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Local SEO Web Design | Rank Higher in Local Google Searches | Deep Tech Solutions",
  description:
    "Local SEO web design services. We build websites optimised for local search — helping your business rank on Google for '[service] near me' searches in your area.",
  alternates: { canonical: "https://www.deeptechsolutions.online/local-seo-web-design" },
};

const seoServices = [
  { icon: "📍", title: "Google Business Profile", desc: "Setup, optimisation, and ongoing management to dominate Google Maps results." },
  { icon: "🏗️", title: "Local Landing Pages", desc: "Location-specific pages for every area you serve — each optimised for local search." },
  { icon: "📊", title: "Schema Markup", desc: "LocalBusiness, Service, and FAQPage schema to help Google understand your business." },
  { icon: "🔗", title: "Citation Building", desc: "Consistent business listings across local directories (Yelp, Yellow Pages, Justdial, etc.)." },
  { icon: "✍️", title: "On-Page SEO", desc: "Title tags, meta descriptions, H1s, and content optimised for local search intent." },
  { icon: "📈", title: "Search Console Setup", desc: "Google Search Console verified and configured to track your local keyword rankings." },
];

export default function LocalSeoPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <span style={{ color: "var(--color-accent)" }}>Local SEO Web Design</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Local SEO</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Local SEO Web Design — Get Found{" "}
              <span className="text-gradient">in Your Area</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              When your customers search for &ldquo;[your service] near me&rdquo; — you need to show up. We build websites
              structured and optimised for local search from day one, so your business is visible where it matters.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="local-seo-cta">Get a Local SEO Review</Link>
              <Link href="/lead-generation-websites" className="btn btn-ghost" id="local-seo-leads">Lead Generation →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1100 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              Local SEO services included with every website
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {seoServices.map((s) => (
                <div key={s.title} style={{ padding: "24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 12 }} aria-hidden="true">{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--color-bg-2)", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Start appearing in local searches
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              Tell me where you operate and what services you offer. I&apos;ll put together a local SEO plan with your website project.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="local-seo-final-cta">Get a Free Consultation</Link>
              <Link href="/small-business-web-design" className="btn btn-ghost" id="local-seo-smbiz">Small Business Websites</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
