import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Pricing | Transparent Web Design Packages | Deep Tech Solutions",
  description:
    "Transparent web design pricing. Launch from $199, Growth from $299, Scale from $499. No hidden fees, no retainer lock-in. Free consultation included.",
  alternates: { canonical: "https://www.deeptechsolutions.online/pricing" },
};

const plans = [
  {
    name: "Launch",
    price: "$199",
    priceINR: "₹16,500",
    desc: "Everything a new or small business needs to establish a professional online presence.",
    features: [
      "Up to 5 pages (Home, About, Services, Contact, Blog)",
      "Mobile-first, responsive design",
      "On-page SEO (titles, meta, schema, sitemap)",
      "Contact form + WhatsApp button",
      "Google Search Console setup",
      "Fast hosting (Vercel)",
      "7-day post-launch support",
    ],
    cta: "Get Started",
    popular: false,
    id: "plan-launch",
  },
  {
    name: "Growth",
    price: "$299",
    priceINR: "₹24,900",
    desc: "For businesses ready to grow with SEO, booking systems, and lead generation.",
    features: [
      "Everything in Launch",
      "Up to 10 pages",
      "Online booking system (Cal.com / Calendly)",
      "Local SEO (GBP setup, location pages)",
      "Analytics & conversion tracking",
      "Blog with CMS integration",
      "30-day post-launch support",
      "Google Analytics 4 setup",
    ],
    cta: "Get Started",
    popular: true,
    id: "plan-growth",
  },
  {
    name: "Scale",
    price: "$499",
    priceINR: "₹41,500",
    desc: "Advanced functionality for businesses with complex needs or aggressive growth goals.",
    features: [
      "Everything in Growth",
      "Unlimited pages",
      "Custom integrations (CRM, payment, API)",
      "Advanced SEO (competitor analysis, content strategy)",
      "E-commerce / product catalogue",
      "Custom web application features",
      "60-day post-launch support",
      "Monthly maintenance option",
    ],
    cta: "Get Started",
    popular: false,
    id: "plan-scale",
  },
];

const addons = [
  { name: "Logo design", price: "From $49" },
  { name: "Copywriting (per page)", price: "From $29" },
  { name: "Monthly SEO retainer", price: "From $79/mo" },
  { name: "Monthly maintenance", price: "From $49/mo" },
  { name: "E-commerce (Stripe)", price: "From $149" },
  { name: "Additional languages", price: "From $99" },
];

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>

        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24, textAlign: "left" }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <span style={{ color: "var(--color-accent)" }}>Pricing</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Transparent Pricing</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Honest pricing. No surprises.{" "}
              <span className="text-gradient">No hidden fees.</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 0" }}>
              All prices are starting points. Every project gets a custom quote after an initial 30-minute conversation — because your business is unique and cookie-cutter solutions don&apos;t deliver results.
            </p>
          </div>
        </section>

        <section className="section" id="plans" aria-label="Pricing plans">
          <div className="container" style={{ maxWidth: 1100 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  id={plan.id}
                  style={{
                    padding: "32px",
                    background: plan.popular ? "linear-gradient(135deg, rgba(201,168,118,0.12) 0%, rgba(201,168,118,0.05) 100%)" : "var(--color-surface)",
                    border: `1px solid ${plan.popular ? "rgba(201,168,118,0.4)" : "var(--color-border)"}`,
                    borderRadius: "var(--radius-xl)",
                    position: "relative",
                  }}
                >
                  {plan.popular && (
                    <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--color-accent)", color: "#000", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "var(--radius-full)" }}>
                      Most Popular
                    </div>
                  )}
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 8 }}>{plan.name}</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, marginBottom: 4 }}>{plan.price}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-3)", marginBottom: 16 }}>{plan.priceINR} · Starting price</p>
                  <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 24 }}>{plan.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span style={{ color: "var(--color-accent)", fontSize: "0.9rem", marginTop: 1, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: "0.88rem", color: "var(--color-text-2)", lineHeight: 1.4 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-ghost"}`}
                    id={`${plan.id}-cta`}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--color-bg-2)" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 8 }}>Add-ons & extras</h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 28 }}>Bolt on extra services to any package:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              {addons.map((a) => (
                <div key={a.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ fontSize: "0.88rem", color: "var(--color-text-2)" }}>{a.name}</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--color-accent)" }}>{a.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 24 }}>Common questions about pricing</h2>
            {[
              { q: "Can I pay in instalments?", a: "Yes. Most projects are split 50% upfront and 50% on delivery. Larger projects can be split into 3 milestones." },
              { q: "What currencies do you accept?", a: "USD, GBP, EUR, and INR. International payments are made via Stripe, PayPal, or direct bank transfer." },
              { q: "Are there ongoing fees after launch?", a: "The only ongoing cost is hosting (typically $0–$20/month on Vercel) and your domain. No mandatory retainer. Optional maintenance plans are available." },
              { q: "What if my project falls between packages?", a: "All quotes are custom. The packages are indicative starting points — your actual project will be scoped and priced precisely after our initial call." },
            ].map((faq, idx) => (
              <div key={idx} style={{ borderBottom: "1px solid var(--color-border)", padding: "20px 0" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ color: "var(--color-text-2)", lineHeight: 1.7, fontSize: "0.92rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ background: "var(--color-bg-2)", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Get a custom quote for your project
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              Tell me about your business and goals — I&apos;ll come back with a clear, detailed quote within 24 hours.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="pricing-final-cta">Get a Custom Quote</Link>
              <Link href="/book" className="btn btn-ghost" id="pricing-book-cta">📅 Book a Call</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
