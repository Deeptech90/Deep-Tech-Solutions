import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Law Firm Website Design | Attorney & Solicitor Websites | Deep Tech Solutions",
  description:
    "Professional law firm website design. Trust-focused websites for attorneys, solicitors, and barristers with practice area pages, attorney profiles, consultation forms, and local SEO.",
  alternates: { canonical: "https://www.deeptechsolutions.online/law-firm-website-design" },
};

export default function LawFirmWebDesignPage() {
  const features = [
    { icon: "⚖️", title: "Practice Area Pages", desc: "Dedicated pages for each practice area, optimised for specific legal search terms." },
    { icon: "👔", title: "Attorney Profiles", desc: "Professional profiles that communicate qualifications, experience, and personality." },
    { icon: "📋", title: "Consultation Request Forms", desc: "Confidential intake forms that capture case details before the first call." },
    { icon: "⭐", title: "Client Testimonials", desc: "Verified reviews and success stories presented in a way that builds trust." },
    { icon: "🔒", title: "Professional & Credible Design", desc: "A design aesthetic that communicates authority, reliability, and professionalism." },
    { icon: "📍", title: "Local SEO for Legal", desc: "Rank for '[practice area] lawyer near me' searches in your area." },
  ];

  const practiceAreas = ["Family Law", "Criminal Defense", "Personal Injury", "Corporate Law", "Immigration Law", "Real Estate Law", "Employment Law", "Estate Planning", "Intellectual Property", "Tax Law"];

  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <span style={{ color: "var(--color-accent)" }}>Law Firm Website Design</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Law Firm Website Design</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Law Firm Website Design That{" "}
              <span className="text-gradient">Wins Client Trust</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              Prospective clients choose their lawyer based on trust, credibility, and relevance.
              Your website needs to communicate all three — before they ever make contact.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="law-cta">Get a Law Firm Website Quote</Link>
              <Link href="/freelance-web-developer" className="btn btn-ghost" id="law-freelance">About the Developer →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1100 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              What a law firm website needs
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
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 24 }}>
              Practice areas we build for
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {practiceAreas.map((a) => (
                <span key={a} style={{ padding: "6px 14px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-full)", fontSize: "0.85rem", color: "var(--color-text-2)" }}>{a}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Ready to attract more clients online?
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              Free 30-minute consultation. We&apos;ll discuss your practice, your ideal clients, and what the right website strategy looks like.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="law-final-cta">Get a Free Quote</Link>
              <Link href="/book" className="btn btn-ghost" id="law-book-cta">📅 Book a Consultation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
