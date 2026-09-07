import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Healthcare Website Design | Clinic & Medical Practice Websites | Deep Tech Solutions",
  description:
    "Professional healthcare website design for clinics, GPs, physiotherapists, therapists, and wellness professionals. Patient-friendly, HIPAA-aware, mobile-first, and SEO-optimised.",
  alternates: { canonical: "https://www.deeptechsolutions.online/healthcare-web-design" },
};

export default function HealthcareWebDesignPage() {
  const features = [
    { icon: "🩺", title: "Patient-First Design", desc: "Clear, accessible layouts that make it easy for patients to find information and take action." },
    { icon: "📅", title: "Appointment Booking", desc: "Online booking integrated with your existing systems — available 24/7 for patients." },
    { icon: "🔒", title: "Privacy-Conscious", desc: "Forms and data handling built with patient privacy in mind. Minimal data collection." },
    { icon: "📍", title: "Local SEO", desc: "Rank for 'clinic near me' and condition-specific searches in your area." },
    { icon: "📋", title: "Service & Condition Pages", desc: "Dedicated pages for each treatment area, condition, or specialty you offer." },
    { icon: "⭐", title: "Patient Reviews", desc: "Showcase verified testimonials and Google ratings to build trust." },
  ];

  const types = ["GP Clinics", "Physiotherapy Practices", "Mental Health Therapists", "Dental Clinics", "Opticians", "Chiropractors", "Nutritionists & Dietitians", "Yoga & Meditation Studios", "Wellness Centres"];

  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <span style={{ color: "var(--color-accent)" }}>Healthcare Web Design</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Healthcare Web Design</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Healthcare Website Design for{" "}
              <span className="text-gradient">Clinics & Medical Practices</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              Patient-friendly websites for healthcare providers — mobile-first, easy to navigate,
              built to communicate trust, and optimised for local search.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="healthcare-cta">Get a Healthcare Website Quote</Link>
              <Link href="/web-design-for-dentists" className="btn btn-ghost" id="healthcare-dental">Dental Websites →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1100 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              Features for healthcare and clinic websites
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
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 700, marginBottom: 24 }}>
              Healthcare providers we build for
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {types.map((t) => (
                <span key={t} style={{ padding: "6px 14px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-full)", fontSize: "0.85rem", color: "var(--color-text-2)" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Ready to get more patients online?
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              Free consultation. No obligation. Let&apos;s discuss your practice, your patients, and your goals.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="healthcare-final-cta">Get a Free Quote</Link>
              <Link href="/book" className="btn btn-ghost" id="healthcare-book-cta">📅 Book a Call</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
