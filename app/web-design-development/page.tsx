import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web Design & Development Services | Deep Tech Solutions",
  description:
    "Professional web design and development services. Custom websites from discovery to launch — UX, design, development, SEO, and ongoing support. Direct developer access.",
  alternates: { canonical: "https://www.deeptechsolutions.online/web-design-development" },
  openGraph: {
    title: "Web Design & Development Services | Deep Tech Solutions",
    description: "Custom web design and development from discovery to launch. Direct developer access, no agency layers.",
    url: "https://www.deeptechsolutions.online/web-design-development",
  },
};

const processSteps = [
  { step: "01", title: "Discovery & Strategy", desc: "We start with a deep dive into your business, audience, competitors, and goals. This is where we agree on what success looks like." },
  { step: "02", title: "UX & Information Architecture", desc: "We map the user journey and define page structure before touching any visuals. What does a customer need to see to take action?" },
  { step: "03", title: "Visual Design", desc: "A custom design that matches your brand identity and communicates trust, credibility, and professionalism." },
  { step: "04", title: "Development", desc: "Clean, performant code built with modern frameworks (Next.js, React). Mobile-first, accessible, and fast by default." },
  { step: "05", title: "SEO & Analytics Setup", desc: "On-page SEO, schema markup, Google Search Console verification, sitemap, and analytics — done before launch, not as an afterthought." },
  { step: "06", title: "Launch & Optimisation", desc: "We deploy, run final tests, and monitor performance. Post-launch support ensures everything keeps working as you grow." },
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Vercel", category: "Deployment" },
  { name: "Cal.com", category: "Booking" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "Schema.org", category: "Structured Data" },
];

export default function WebDesignDevelopmentPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>
              {" / "}
              <span style={{ color: "var(--color-accent)" }}>Web Design & Development</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Web Design & Development</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Custom Web Design &{" "}
              <span className="text-gradient">Development Services</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              From strategy and UX through to design, development, SEO, and post-launch support — a complete
              web development service, delivered directly by a senior developer without the agency overhead.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="webdev-hero-cta">Start Your Project</Link>
              <Link href="/small-business-web-design" className="btn btn-ghost" id="webdev-smbiz-link">Small Business Websites →</Link>
            </div>
          </div>
        </section>

        {/* ── DIFFERENTIATORS ──────────────────────────────────── */}
        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 1000 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>Why Deep Tech Solutions</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40, lineHeight: 1.2 }}>
              What makes this different from a typical web design agency
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {[
                { icon: "👤", title: "You work directly with the developer", desc: "No account managers passing messages back and forth. No handoffs between designer, developer, and SEO person. You email me, I respond." },
                { icon: "💰", title: "No agency markup", desc: "Agencies add 30–50% overhead for project management and communication layers. You get the same quality at a fraction of the cost." },
                { icon: "📐", title: "Built for conversion, not just appearance", desc: "Beautiful design matters — but every layout decision is made with a conversion goal in mind. We measure success by enquiries, not pixel-perfect mockups." },
                { icon: "🔍", title: "SEO is built in, not bolted on", desc: "SEO is architectural. It needs to be part of the structure from day one — not an afterthought once the site is launched." },
                { icon: "⚡", title: "Performance is non-negotiable", desc: "Every website is built to achieve excellent Core Web Vitals scores. Fast sites rank higher, convert more, and provide a better user experience." },
                { icon: "🌍", title: "Remote-first, globally available", desc: "Based in India, working with businesses across the US, UK, Europe, and Australia. Timezone flexibility — US/EU hours covered." },
              ].map((d) => (
                <div key={d.title} style={{ padding: "24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: 12 }} aria-hidden="true">{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{d.title}</h3>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────── */}
        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>The process</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}>
              From brief to live website — step by step
            </h2>
            <p style={{ color: "var(--color-text-2)", maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
              A transparent, predictable process. You know where we are at every stage.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {processSteps.map((s, idx) => (
                <div key={s.step} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 20, padding: "24px 0", borderBottom: idx < processSteps.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "rgba(201,168,118,0.4)", lineHeight: 1 }}>{s.step}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ color: "var(--color-text-2)", fontSize: "0.92rem", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ───────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>Technology</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 12 }}>Modern, production-ready stack</h2>
            <p style={{ color: "var(--color-text-2)", maxWidth: 560, lineHeight: 1.7, marginBottom: 32 }}>
              We use the same technology stack that top-tier companies use — because your business deserves infrastructure that performs.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {techStack.map((t) => (
                <div key={t.name} style={{ padding: "10px 18px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-3)", borderLeft: "1px solid var(--color-border)", paddingLeft: 8 }}>{t.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ───────────────────────────────────── */}
        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>Related services</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 24 }}>More ways we can help</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {[
                { label: "Small Business Web Design", href: "/small-business-web-design" },
                { label: "Freelance Web Developer", href: "/freelance-web-developer" },
                { label: "Website Redesign", href: "/website-redesign" },
                { label: "Lead Generation Websites", href: "/lead-generation-websites" },
                { label: "Local SEO & Web Design", href: "/local-seo-web-design" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ padding: "16px 20px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", textDecoration: "none", color: "var(--color-text-2)", fontSize: "0.92rem", fontWeight: 600, display: "block", transition: "border-color 0.2s" }}>
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.15 }}>
              Ready to start your web project?
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32 }}>
              Book a free consultation. Tell me about your project and I&apos;ll give you an honest assessment of scope, timeline, and cost.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="webdev-final-cta">Get a Project Quote</Link>
              <Link href="/book" className="btn btn-ghost" id="webdev-book-cta">📅 Book a Call</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
