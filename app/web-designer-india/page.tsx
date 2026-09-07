import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web Designer India | Professional Website Design Services | Deep Tech Solutions",
  description:
    "Looking for a web designer in India? Deep Tech Solutions provides professional website design and development for Indian businesses and international clients. Transparent pricing, English-speaking, responsive.",
  alternates: { canonical: "https://www.deeptechsolutions.online/web-designer-india" },
};

export default function WebDesignerIndiaPage() {
  const advantages = [
    { icon: "💰", title: "Competitive Pricing", desc: "Professional web development at India-competitive pricing — without compromising on quality, code standards, or deliverables." },
    { icon: "🌍", title: "International Standards", desc: "Built to the same quality standards used by global tech companies. Not outsourced work — directly developed by a senior developer." },
    { icon: "🗣️", title: "English-Speaking", desc: "Clear, professional communication in English. No language barriers, no misunderstandings." },
    { icon: "🕐", title: "Timezone Overlap", desc: "IST (UTC+5:30) means good overlap with both US Eastern and UK/European business hours." },
    { icon: "📱", title: "Indian Market Knowledge", desc: "Deep understanding of Indian consumer behaviour, WhatsApp integration, UPI payment systems, and local SEO for Indian businesses." },
    { icon: "⚡", title: "Fast Turnaround", desc: "Solo freelancer model means faster decisions, faster iterations, and faster delivery than a distributed agency." },
  ];

  const indianIndustries = ["E-commerce (Fashion, Electronics)", "Restaurants & Food Delivery", "Healthcare Clinics & Hospitals", "Educational Institutions", "Real Estate", "IT & Software Companies", "Manufacturing & B2B", "Professional Services (CA, Lawyers, Consultants)", "Hotels & Travel"];

  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <span style={{ color: "var(--color-accent)" }}>Web Designer India</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Web Designer India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Professional Web Design{" "}
              <span className="text-gradient">Services in India</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 16 }}>
              Deep Tech Solutions is a professional web development studio based in India — working with Indian
              businesses and international clients across the US, UK, Europe, and Australia.
            </p>
            <p style={{ color: "var(--color-text-2)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              Senior developer. International-quality code. Competitive pricing. English-speaking. Transparent.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="india-cta">Get a Free Quote</Link>
              <Link href="/small-business-web-design" className="btn btn-ghost" id="india-smbiz">Small Business Websites →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1100 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              Why choose a web designer in India
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {advantages.map((a) => (
                <div key={a.title} style={{ padding: "24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 12 }} aria-hidden="true">{a.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{a.title}</h3>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 24 }}>Industries we serve in India</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {indianIndustries.map((ind) => (
                <span key={ind} style={{ padding: "6px 14px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-full)", fontSize: "0.85rem", color: "var(--color-text-2)" }}>{ind}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Get a professional website — in India or anywhere
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              Whether you&apos;re a startup in Bangalore, a clinic in Delhi, or a business in New York — we build websites that perform.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="india-final-cta">Start Your Project</Link>
              <Link href="/pricing" className="btn btn-ghost" id="india-pricing">View Pricing</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
