import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Restaurant Website Design | Online Ordering & Menus | Deep Tech Solutions",
  description:
    "Restaurant and café website design with online ordering, reservation systems, digital menus, and local SEO. Stop paying 30% to delivery apps — own your online presence.",
  alternates: { canonical: "https://www.deeptechsolutions.online/restaurant-website-design" },
};

export default function RestaurantWebDesignPage() {
  const features = [
    { icon: "📱", title: "Online Ordering", desc: "Direct ordering on your website — no third-party delivery app fees eating into your margins." },
    { icon: "🍽️", title: "Digital Menu", desc: "Beautiful, mobile-friendly menu with photos, dietary information, and real-time availability." },
    { icon: "📅", title: "Table Reservations", desc: "Online reservation system so guests can book without calling — 24/7 availability." },
    { icon: "📍", title: "Google Maps Integration", desc: "Embedded maps, directions, and local SEO to help customers find you." },
    { icon: "⭐", title: "Review Integration", desc: "Showcase Google reviews and Tripadvisor ratings directly on your website." },
    { icon: "📸", title: "Food Photography Gallery", desc: "A curated gallery that makes your dishes irresistible before guests walk through the door." },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
        <section className="section" style={{ background: "var(--color-bg-3)", paddingTop: "clamp(100px, 12vw, 140px)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)", marginBottom: 24 }}>
              <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>{" / "}
              <span style={{ color: "var(--color-accent)" }}>Restaurant Website Design</span>
            </nav>
            <p className="section-label" style={{ marginBottom: 16 }}>Restaurant & Café Websites</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
              Restaurant Website Design{" "}
              <span className="text-gradient">That Drives Direct Orders</span>
            </h1>
            <p style={{ color: "var(--color-text-2)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 16 }}>
              Stop handing 15–30% of every order to Uber Eats and Deliveroo. A direct-ordering website
              puts your restaurant in control of your customers, your data, and your margins.
            </p>
            <p style={{ color: "var(--color-text-2)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 640, marginBottom: 36 }}>
              Mobile-first restaurant and café websites with online ordering, reservations, digital menus, and local SEO.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contact" className="btn btn-primary" id="restaurant-cta">Get a Restaurant Website Quote</Link>
              <Link href="/local-seo-web-design" className="btn btn-ghost" id="restaurant-seo">Local SEO →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 1100 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
              Features for restaurant and café websites
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

        <section className="section" style={{ background: "var(--color-bg-2)", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 16 }}>
              Own your online presence
            </h2>
            <p style={{ color: "var(--color-text-2)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
              A direct-ordering website pays for itself quickly. Let&apos;s talk about what the right setup looks like for your restaurant.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/contact" className="btn btn-primary" id="restaurant-final-cta">Get a Free Consultation</Link>
              <Link href="/pricing" className="btn btn-ghost" id="restaurant-pricing">View Pricing</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
