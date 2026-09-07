import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Small Business Website Design & Development | Deep Tech Solutions",
  description:
    "Professional, affordable small business website design. Mobile-first, SEO-ready, and built to generate leads. Starting from $199. Free consultation.",
  alternates: { canonical: "https://www.deeptechsolutions.online/small-business-web-design" },
  openGraph: {
    title: "Small Business Website Design | Deep Tech Solutions",
    description: "Professional websites for small businesses. Mobile-first, SEO-ready, built to generate leads.",
    url: "https://www.deeptechsolutions.online/small-business-web-design",
  },
};

const faqs = [
  {
    q: "How much does a small business website cost?",
    a: "Our small business websites start from $199 (approximately ₹16,000). The final price depends on the number of pages, features like booking systems or e-commerce, and the complexity of your requirements. Every project gets a custom quote after an initial conversation.",
  },
  {
    q: "How long does it take to build a small business website?",
    a: "A standard small business website (5–8 pages) typically takes 2–4 weeks from the first call to launch. More complex projects with custom functionality can take 4–8 weeks. We agree on a timeline upfront.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Yes — we build mobile-first. This means the mobile experience is designed first, and the desktop version is built from there. Your site will look and work perfectly on all screen sizes.",
  },
  {
    q: "Can you help my business appear on Google?",
    a: "Yes. Every website we build includes basic on-page SEO: title tags, meta descriptions, semantic HTML, schema markup, and sitemap submission. For ongoing local SEO, we offer dedicated local SEO services.",
  },
  {
    q: "Do I need to provide content and images?",
    a: "Ideally yes — your content and photos will make the site unique and authentic. We can provide guidance on what's needed and help you structure your copy. We can also write copy as an add-on.",
  },
  {
    q: "Will I be able to update the site myself?",
    a: "For sites that need frequent content updates, we can integrate a CMS (like Sanity or Contentful) so you can update text and images without touching code. We'll train you on how to use it.",
  },
];

const problems = [
  "Your current website looks outdated and unprofessional",
  "You're not getting enquiries or calls from your website",
  "Customers can't find you on Google Search",
  "Your site is slow or broken on mobile phones",
  "You have no online booking or enquiry form",
  "You paid for a website but don't know if it's working",
];

const features = [
  { icon: "📱", title: "Mobile-First Design", desc: "Built for smartphones first — where most of your customers are searching." },
  { icon: "⚡", title: "Fast Loading", desc: "Core Web Vitals optimised. Fast sites rank higher and convert more visitors." },
  { icon: "🔍", title: "SEO-Ready", desc: "On-page SEO, schema markup, sitemap, and Google Search Console setup included." },
  { icon: "📞", title: "Lead Generation", desc: "Contact forms, WhatsApp buttons, click-to-call, and booking systems." },
  { icon: "💰", title: "Transparent Pricing", desc: "Fixed project pricing. No hourly billing surprises. No hidden fees." },
  { icon: "👤", title: "Direct Developer Access", desc: "You work directly with the developer — no agency layers or account managers." },
];

export default function SmallBusinessWebDesignPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Small Business Website Design",
    "serviceType": "Web Design & Development",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Deep Tech Solutions",
      "url": "https://www.deeptechsolutions.online",
    },
    "description": "Professional website design and development for small businesses. Mobile-first, SEO-ready, and built to generate leads.",
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "199",
      "description": "Starting price for small business website design",
    },
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          className="relative section"
          style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}
          aria-label="Small business website design hero"
        >
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>
              {" / "}
              <span style={{ color: "var(--color-accent)" }}>Small Business Web Design</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Small Business Web Design</p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Professional Websites for{" "}
              <span className="text-gradient">Small Businesses</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              A professionally built website that works for your business — not just a pretty design.
              Mobile-first, SEO-optimised, and built to generate real enquiries. Direct developer access.
              Starting from $199.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="smbiz-hero-cta">
                Get a Free Quote
              </Link>
              <Link href="/pricing" className="btn btn-ghost" id="smbiz-hero-pricing">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROBLEMS ─────────────────────────────────────────── */}
        <section className="section" aria-label="Small business website problems" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>Does this sound familiar?</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 32, lineHeight: 1.2 }}>
              Common problems with small business websites
            </h2>
            <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, listStyle: "none", padding: 0 }}>
              {problems.map((p) => (
                <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 20px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ color: "#ef4444", fontSize: "1rem", marginTop: 2 }} aria-hidden="true">✗</span>
                  <span style={{ color: "var(--color-text-2)", fontSize: "0.92rem", lineHeight: 1.5 }}>{p}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32, padding: "20px 24px", background: "rgba(201,168,118,0.07)", border: "1px solid rgba(201,168,118,0.2)", borderRadius: "var(--radius-md)" }}>
              <p style={{ color: "var(--color-text-2)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--color-text)" }}>The good news:</strong> These are all fixable. A well-built small business website addresses every one of these problems — and pays for itself quickly through the enquiries it generates.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ──────────────────────────────────── */}
        <section className="section" aria-label="What a small business website should include">
          <div className="container" style={{ maxWidth: 1100 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>What you get</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}>
              What a professional small business website includes
            </h2>
            <p style={{ color: "var(--color-text-2)", maxWidth: 580, lineHeight: 1.7, marginBottom: 40 }}>
              Every website we build is designed around what your customers actually need to see — and what your business needs to grow.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {features.map((f) => (
                <div key={f.title} style={{ padding: "24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 12 }} aria-hidden="true">{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8, color: "var(--color-text)" }}>{f.title}</h3>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ─────────────────────────────────────── */}
        <section className="section" aria-label="Who this service is for" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>Who we build for</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 24, lineHeight: 1.2 }}>
              Small business website design for every industry
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Dental Clinics", "Restaurants & Cafés", "Law Firms", "Plumbers & Electricians", "Consultants & Coaches", "Landscapers", "Beauticians & Salons", "Physiotherapists", "Accountants", "Real Estate Agents", "Gyms & Fitness Studios", "Photographers", "Startups", "Retailers"].map((cat) => (
                <span key={cat} style={{ padding: "6px 14px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-full)", fontSize: "0.85rem", color: "var(--color-text-2)" }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING PREVIEW ──────────────────────────────────── */}
        <section className="section" aria-label="Pricing">
          <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
            <p className="section-label" style={{ marginBottom: 16 }}>Transparent pricing</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 12 }}>
              No agency markup. No surprises.
            </h2>
            <p style={{ color: "var(--color-text-2)", maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
              All prices are starting points — your project gets a custom quote after an initial call.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, textAlign: "left", marginBottom: 32 }}>
              {[
                { name: "Launch", price: "From $199", desc: "5-page professional website, mobile-first, SEO basics, contact form" },
                { name: "Growth", price: "From $299", desc: "Everything in Launch + landing pages, local SEO, booking system, analytics" },
                { name: "Scale", price: "From $499", desc: "Everything in Growth + advanced SEO, custom integrations, CRM, ongoing support" },
              ].map((tier) => (
                <div key={tier.name} style={{ padding: "24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 8 }}>{tier.name}</p>
                  <p style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-display)", marginBottom: 8 }}>{tier.price}</p>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.88rem", lineHeight: 1.6 }}>{tier.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/pricing" className="btn btn-ghost" id="smbiz-pricing-link">
              See full pricing details →
            </Link>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="section" aria-label="Frequently asked questions" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 780 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>FAQ</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              Small business website questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ borderBottom: "1px solid var(--color-border)", padding: "24px 0" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 10, color: "var(--color-text)" }}>{faq.q}</h3>
                  <p style={{ color: "var(--color-text-2)", lineHeight: 1.7, fontSize: "0.92rem" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <section className="section" aria-label="Get started">
          <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.15 }}>
              Ready to get your small business online?
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32 }}>
              Book a free 30-minute consultation. No obligation, no sales pitch — just an honest
              conversation about your project and whether we&apos;re a good fit.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="smbiz-final-cta">
                Get a Free Quote
              </Link>
              <Link href="/book" className="btn btn-ghost" id="smbiz-book-cta">
                📅 Book a Consultation
              </Link>
            </div>
            <p style={{ color: "var(--color-text-3)", fontSize: "0.82rem", marginTop: 20 }}>
              Also relevant:{" "}
              <Link href="/web-design-development" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Web Design & Development</Link>
              {" · "}
              <Link href="/freelance-web-developer" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Freelance Web Developer</Link>
              {" · "}
              <Link href="/local-seo-web-design" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Local SEO</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
