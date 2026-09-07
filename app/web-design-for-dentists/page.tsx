import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dental Website Design | Websites for Dentists & Clinics | Deep Tech Solutions",
  description:
    "Professional dental website design and development. Patient-friendly, mobile-first websites for dental clinics with online booking, treatment pages, and local SEO.",
  alternates: { canonical: "https://www.deeptechsolutions.online/web-design-for-dentists" },
};

const dentalFeatures = [
  { icon: "📅", title: "Online Appointment Booking", desc: "Integrated booking system so patients can schedule appointments 24/7 without calling the practice." },
  { icon: "🦷", title: "Treatment & Service Pages", desc: "Dedicated pages for each treatment (implants, whitening, orthodontics) — each optimised for search." },
  { icon: "📍", title: "Google Maps & Local SEO", desc: "Optimised to rank for 'dentist near me' and location-based searches. GBP setup included." },
  { icon: "⭐", title: "Patient Testimonials", desc: "Showcase Google reviews and patient stories to build trust before first contact." },
  { icon: "🩺", title: "New Patient Registration Forms", desc: "Digital intake forms reduce admin work and improve the new patient experience." },
  { icon: "📱", title: "Mobile-First Design", desc: "Most patients search for dentists on mobile. Your site works perfectly on all devices." },
];

const faqs = [
  {
    q: "How much does a dental website cost?",
    a: "Dental websites typically range from $299 to $599 depending on the number of pages, booking integration complexity, and SEO requirements. We provide a custom quote after an initial call.",
  },
  {
    q: "Can you integrate an online booking system for patients?",
    a: "Yes. We integrate with Cal.com, Calendly, and other booking platforms. We can also build a custom booking flow that connects to your existing practice management software.",
  },
  {
    q: "How long does it take to build a dental website?",
    a: "A standard 8–12 page dental website with booking and SEO typically takes 3–5 weeks from first call to launch.",
  },
  {
    q: "Do you handle dental clinic local SEO?",
    a: "Yes — all dental websites include on-page SEO, Google Business Profile optimisation, schema markup, and sitemap submission. We target location-based keywords relevant to your practice area.",
  },
];

export default function DentalWebDesignPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <Link href="/web-design-for-dentists" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Dental Website Design</Link>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Dental Website Design</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Dental Website Design for{" "}
              <span className="text-gradient">Clinics That Want More Patients</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              Patient-friendly websites for dental practices — built to rank locally, communicate trust, and
              make it easy for new patients to book their first appointment online.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="dental-cta">Get a Dental Website Quote</Link>
              <Link href="/healthcare-web-design" className="btn btn-ghost" id="dental-healthcare">Healthcare Websites →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1100 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              Features every dental website needs
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {dentalFeatures.map((f) => (
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
          <div className="container" style={{ maxWidth: 780 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              Dental website FAQ
            </h2>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderBottom: "1px solid var(--color-border)", padding: "24px 0" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 10 }}>{faq.q}</h3>
                <p style={{ color: "var(--color-text-2)", lineHeight: 1.7, fontSize: "0.92rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Ready to grow your dental practice online?
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              Free 30-minute consultation. I&apos;ll review your current online presence and propose a clear plan.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="dental-final-cta">Get a Free Quote</Link>
              <Link href="/book" className="btn btn-ghost" id="dental-book-cta">📅 Book a Call</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
