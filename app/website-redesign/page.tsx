import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Redesign Service | Modernise Your Business Website | Deep Tech Solutions",
  description:
    "Professional website redesign service. Modernise your outdated website to improve speed, mobile experience, SEO, and conversions. Free consultation.",
  alternates: { canonical: "https://www.deeptechsolutions.online/website-redesign" },
};

export default function WebsiteRedesignPage() {
  const signs = [
    "Your website looks like it was built before 2018",
    "It's not mobile-responsive or is slow on phones",
    "Your Google Core Web Vitals scores are failing",
    "You're getting traffic but no enquiries",
    "The content is outdated and no longer reflects your business",
    "You're embarrassed to share the URL with potential clients",
  ];

  const improvements = [
    { icon: "📱", title: "Mobile-First Rebuild", desc: "Your redesigned site will work perfectly on all screen sizes." },
    { icon: "⚡", title: "Speed Optimisation", desc: "Fast loading times improve SEO rankings and reduce bounce rates." },
    { icon: "🎨", title: "Modern Design", desc: "A fresh, professional design that represents your business today." },
    { icon: "🔍", title: "On-Page SEO", desc: "All pages rewritten with proper metadata, schema, and structure." },
    { icon: "📞", title: "Conversion Elements", desc: "Clear CTAs, contact forms, and booking systems that generate leads." },
    { icon: "✏️", title: "Content Refresh", desc: "Messaging updated to match your current offering and audience." },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>

        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <span style={{ color: "var(--color-accent)" }}>Website Redesign</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Website Redesign</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Website Redesign Service — <span className="text-gradient">Modernise & Convert</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              Is your existing website costing you customers? A redesign isn&apos;t just about looks — it&apos;s about
              fixing the underlying problems that are stopping visitors from becoming enquiries.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="redesign-cta">Get a Redesign Quote</Link>
              <Link href="/small-business-web-design" className="btn btn-ghost" id="redesign-new-link">New Website →</Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 32 }}>
              Signs your website needs a redesign
            </h2>
            <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, listStyle: "none", padding: 0 }}>
              {signs.map((s) => (
                <li key={s} style={{ display: "flex", gap: 12, padding: "16px 20px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ color: "var(--color-accent)", fontSize: "1rem" }} aria-hidden="true">→</span>
                  <span style={{ color: "var(--color-text-2)", fontSize: "0.92rem", lineHeight: 1.5 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1000 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              What a redesign from Deep Tech Solutions includes
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {improvements.map((item) => (
                <div key={item.title} style={{ padding: "24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 12 }} aria-hidden="true">{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Ready to modernise your website?
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              Send the URL of your current website and I&apos;ll give you an honest assessment of what needs fixing and how much it would cost.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="redesign-final-cta">Get a Free Assessment</Link>
              <Link href="/pricing" className="btn btn-ghost" id="redesign-pricing-link">View Pricing</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
