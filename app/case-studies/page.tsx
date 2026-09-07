import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies & Live Demos | Deep Tech Solutions",
  description:
    "Explore live websites, web applications, and client demos built by Deep Tech Solutions. Real code, real performance, and proven lead-generation architecture.",
  alternates: { canonical: "https://www.deeptechsolutions.online/case-studies" },
  openGraph: {
    title: "Case Studies & Live Demos | Deep Tech Solutions",
    description: "Explore live websites and web applications built by Deep Tech Solutions.",
    url: "https://www.deeptechsolutions.online/case-studies",
  },
};

const caseStudies = [
  {
    id: "dental",
    title: "BrightSmile Dental & Cosmetics Demo",
    subtitle: "Healthcare & Patient Lead Generation Web Application",
    industry: "Healthcare / Dental Practice",
    previewImg: "/dental-demo-preview.png",
    liveUrl: "https://deeptechdemo.vercel.app/",
    description:
      "A conversion-optimised healthcare web application designed specifically for private clinics. Features real-time appointment scheduling, service pricing transparency, before-and-after smile galleries, and multi-channel patient enquiry capture.",
    challenge:
      "Dental clinics suffer from high bounce rates when websites rely solely on telephone bookings during business hours. Over 45% of potential dental appointments are researched after 6 PM.",
    solution:
      "Engineered an after-hours patient acquisition system with instant appointment selection, automated confirmation routing, emergency dental service highlights, and structured Doctor schema for local search.",
    results: [
      "Sub-second page load times with Next.js static prerendering",
      "Interactive multi-step treatment booking flow",
      "Comprehensive LocalBusiness and MedicalBusiness JSON-LD markup",
      "100% mobile-friendly responsive design for on-the-go patients",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cal.com API", "Schema.org"],
  },
  {
    id: "law-firm",
    title: "Acme Law Associates Demo",
    subtitle: "High-Ticket Client Acquisition & Consultation Portal",
    industry: "Legal / Professional Services",
    previewImg: "/law-firm-demo-preview.png",
    liveUrl: "https://acme-law-associates.vercel.app",
    description:
      "A premium, trust-centred legal practice website. Built to establish immediate authority, showcase attorney credentials, highlight successful case settlements, and provide friction-free confidential case evaluation booking.",
    challenge:
      "Legal prospective clients are cautious and demand clear signals of credibility, privacy assurance, and direct communication before reaching out.",
    solution:
      "Designed an authoritative dark/gold aesthetic with attorney biographies, transparent fee structuring, encrypted consultation inquiry workflows, and practice area landing sections.",
    results: [
      "Dedicated practice area structures for organic search ranking",
      "Confidential lead qualification intake form",
      "Attorney profile schema markup (LegalService & Person)",
      "High-contrast readability and accessibility compliance",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vercel"],
  },
  {
    id: "naamakaran",
    title: "Naamakaran",
    subtitle: "Vedic Astrology Name Generator & Kundli Platform",
    industry: "Consumer Web Application / SaaS",
    previewImg: "/naamakaran-preview.png",
    liveUrl: "https://naamakaran.com",
    description:
      "A high-traffic algorithmic baby name generator rooted in Vedic astrology. Calculates lunar nakshatras, zodiac rashis, planetary syllables, and delivers free kundli birth charts in 10 Indian languages.",
    challenge:
      "Complex astronomical algorithms required fast client-side computation, multilingual rendering, and high organic search ranking across thousands of query variants.",
    solution:
      "Implemented pure client-side mathematical calculations for astrological positions, paired with programmatic SEO architecture for multi-language syllables and names.",
    results: [
      "10 Indian regional languages fully supported",
      "Zero server latency for astrological calculations",
      "Tens of thousands of monthly organic impressions",
      "Instant Kundli chart generation without external API dependencies",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n Localization", "Astronomy Algorithms"],
  },
  {
    id: "uniquebiz",
    title: "UniqueBusinessName.com",
    subtitle: "Physics-Based Decision & Brand Naming Tool",
    industry: "Creative Web Tool / Startup Utility",
    previewImg: "/uniquebiz-preview.png",
    liveUrl: "https://uniquebusinessname.com",
    description:
      "An interactive web tool featuring an Anti-Gravity Wheel physics engine. Entrepreneurs spin the wheel to discover brandable, punchy business names filtered by industry, tone, and character count.",
    challenge:
      "Creating an engaging user experience that makes brainstorming fun while maintaining smooth 60fps animations across mobile and low-powered devices.",
    solution:
      "Engineered a custom physics-based wheel spinner using canvas and requestAnimationFrame, coupled with instant domain availability lookups and curations.",
    results: [
      "Smooth 60 FPS physics interaction on all mobile devices",
      "Instant industry filtering across hundreds of brand name combinations",
      "Zero dependencies on heavy physics libraries",
      "High session engagement and repeat visits",
    ],
    techStack: ["HTML5 Canvas", "JavaScript", "CSS Animation", "Responsive Design"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: "100dvh", background: "var(--color-bg)", color: "var(--color-text)", padding: "120px clamp(20px, 5vw, 60px) 80px" }}>
        {/* Header */}
        <div style={{ maxWidth: 900, margin: "0 auto 60px", textAlign: "center" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>
            Real Work · Real Code · Real Results
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 20 }}>
            Case Studies & Live Demos
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--color-text-2)", lineHeight: 1.7, maxWidth: 680, margin: "0 auto" }}>
            We do not just talk about web development — we build and ship live applications. Explore these live demos and production applications to see the level of polish, performance, and attention to detail you will receive.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          {caseStudies.map((study) => (
            <article
              key={study.id}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--color-border)",
                borderRadius: 20,
                padding: "clamp(24px, 4vw, 44px)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 40,
                alignItems: "start",
              }}
            >
              {/* Left Column: Details */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: 9999,
                    background: "rgba(201,168,118,0.12)",
                    color: "var(--color-accent)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {study.industry}
                </span>

                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, marginBottom: 6, lineHeight: 1.2 }}>
                  {study.title}
                </h2>
                <p style={{ fontSize: "0.95rem", color: "var(--color-accent)", fontWeight: 600, marginBottom: 20 }}>
                  {study.subtitle}
                </p>

                <p style={{ color: "var(--color-text-2)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: 24 }}>
                  {study.description}
                </p>

                <div style={{ marginBottom: 20 }}>
                  <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-3)", marginBottom: 8, fontWeight: 700 }}>
                    The Challenge
                  </h3>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {study.challenge}
                  </p>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-3)", marginBottom: 8, fontWeight: 700 }}>
                    The Solution
                  </h3>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {study.solution}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 30 }}>
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "0.75rem",
                        padding: "3px 10px",
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "var(--color-text-3)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    borderRadius: 9999,
                    background: "var(--color-accent)",
                    color: "#191B1D",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                  }}
                >
                  Launch Live Demo ↗
                </a>
              </div>

              {/* Right Column: Key Outcomes & Highlights */}
              <div
                style={{
                  background: "rgba(0,0,0,0.25)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  padding: "24px 28px",
                }}
              >
                <h3 style={{ fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16, fontWeight: 700 }}>
                  Key Outcomes & Technical Features
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {study.results.map((r, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, fontSize: "0.9rem", color: "var(--color-text-2)", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--color-accent)", fontWeight: "bold" }}>✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: 32,
                    paddingTop: 20,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-3)", marginBottom: 12 }}>
                    Need a similar solution built for your business?
                  </p>
                  <Link
                    href="/contact"
                    style={{
                      color: "var(--color-accent)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Request a free consultation →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <section
          style={{
            maxWidth: 1040,
            margin: "80px auto 0",
            padding: "48px 36px",
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(201,168,118,0.12) 0%, rgba(201,168,118,0.02) 100%)",
            border: "1px solid rgba(201,168,118,0.25)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 16 }}>
            Ready to Build Your Custom Website?
          </h2>
          <p style={{ color: "var(--color-text-2)", fontSize: "1.05rem", maxWidth: 580, margin: "0 auto 30px", lineHeight: 1.7 }}>
            Whether you need a dental clinic patient portal, a local service booking website, or a custom web app, we deliver clean code and measurable results.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <Link
              href="/contact"
              style={{
                padding: "14px 28px",
                borderRadius: 9999,
                background: "var(--color-accent)",
                color: "#191B1D",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/pricing"
              style={{
                padding: "14px 28px",
                borderRadius: 9999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
                color: "var(--color-text)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              View Transparent Pricing
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
