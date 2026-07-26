"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";

type SingleProject = {
  image: string;
  title: string;
  description: string;
  isLive?: boolean;
  liveUrl?: string;
};

type Category = {
  id: string;
  label: string;
  type?: "multi";
  project?: SingleProject;
  projects?: SingleProject[];
  infoLabel: string;
  infoTitle: string;
  infoDesc: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

const categories: Category[] = [
  // ── Real, live products ──────────────────────────────────────────────────
  {
    id: "products",
    label: "Web Products & Tools",
    type: "multi",
    projects: [
      {
        image: "/naamakaran-preview.png",
        title: "Naamakaran",
        description:
          "Hindu baby name generator built on Vedic astrology — Rashi & Nakshatra calculator, free Kundli chart, 10-language localisation.",
        isLive: true,
        liveUrl: "https://naamakaran.com",
      },
      {
        image: "/uniquebiz-preview.png",
        title: "UniqueBusinessName.com",
        description:
          "Physics-based Anti-Gravity Wheel business name generator. Spin to discover unique, brandable names — doubles as a daily decision spinner.",
        isLive: true,
        liveUrl: "https://uniquebusinessname.com",
      },
    ],
    infoLabel: "Live Products",
    infoTitle: "Built, shipped, and growing",
    infoDesc:
      "These are independent web products built from scratch — not client work or mockups. They demonstrate full product ownership: domain-specific logic, i18n architecture, physics-driven interactions, and SEO-optimised content strategy.",
    features: [
      "Multilingual / i18n (10 Indian languages)",
      "Domain-specific logic (Vedic astrology calculations)",
      "Physics-based interactive UI design",
      "SEO content architecture for organic growth",
      "Dark-themed, mobile-first visual design",
    ],
    ctaLabel: "Discuss your project",
    ctaHref: "#contact",
  },

  // ── Service area showcases (concept projects) ─────────────────────────────
  {
    id: "dental",
    label: "Dental & Healthcare",
    project: {
      image: "/dental-hero.png",
      title: "PureSmile Dental Studio",
      description:
        "A conversion-optimised dental website with online booking integration, local SEO, and after-hours appointment capture.",
    },
    infoLabel: "Healthcare Websites",
    infoTitle: "Turning searches into booked appointments",
    infoDesc:
      "Dental and healthcare practices thrive on local search visibility. We build websites that rank for 'dentist near me' queries, integrate seamlessly with booking platforms, and convert first-time visitors into loyal patients.",
    features: [
      "Google Business Profile optimisation",
      "Appointment booking widget integration",
      "Trust-building patient testimonial layouts",
      "Mobile-first — most bookings happen on phone",
    ],
  },
  {
    id: "restaurant",
    label: "Restaurants & Cafes",
    project: {
      image: "/restaurant-hero.png",
      title: "Ember & Oak Bistro",
      description:
        "A direct-ordering focused site that reduced dependency on delivery apps and grew dine-in reservations through targeted local search.",
    },
    infoLabel: "Food & Hospitality",
    infoTitle: "Build direct relationships with your diners",
    infoDesc:
      "Third-party delivery platforms take significant margins. A great restaurant website creates a direct channel for reservations, takeaway orders, and loyalty — cutting out the middleman entirely.",
    features: [
      "Direct online reservation & ordering",
      "Menu showcase with mobile optimisation",
      "Social media and Instagram integration",
      "Local SEO for food-related searches",
    ],
  },
  {
    id: "local",
    label: "Local Service Businesses",
    project: {
      image: "/local-business-hero.png",
      title: "Precision Trades Co.",
      description:
        "A lead-generating site for a local trades business, combining local SEO, quote request forms, and Google Maps integration.",
    },
    infoLabel: "Trades & Services",
    infoTitle: "Generate qualified local leads on autopilot",
    infoDesc:
      "Whether you're a plumber, electrician, landscaper, or retailer — your customers are searching locally. We build sites that capture those searches and convert them into calls, quote requests, and booked jobs.",
    features: [
      "Quote request and lead capture forms",
      "Google Maps and NAP consistency",
      "Schema markup for local search",
      "Click-to-call optimisation",
    ],
  },
];

// ── Sub-component: single project card with hover effects ─────────────────
function ProjectCard({
  project,
  priority = false,
}: {
  project: SingleProject;
  priority?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  const cardContent = (
    <motion.div
      className="expertise__card"
      style={project.isLive ? { cursor: "pointer" } : undefined}
      whileHover={shouldReduceMotion ? {} : { scale: 1.03, boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(201,168,118,0.15)" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
    >
      {/* Image with independent zoom */}
      <motion.div
        style={{ position: "absolute", inset: 0 }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <Image
          src={project.image}
          alt={`${project.isLive ? "Live project" : "Sample project"}: ${project.title}`}
          fill
          className="expertise__card-image"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </motion.div>
      <div className="expertise__card-overlay" aria-hidden="true" />

      {/* Label — only shown on sample/concept projects */}
      {!project.isLive && (
        <span className="expertise__card-label">Sample Project</span>
      )}

      {/* Live badge */}
      {project.isLive && (
        <span className="expertise__card-label expertise__card-label--live">
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 8px #22c55e",
              marginRight: 6,
              animation: "pulse 2s infinite",
            }}
          />
          Live
        </span>
      )}

      <div className="expertise__card-bottom">
        <h3 className="expertise__card-title">{project.title}</h3>
        <p className="expertise__card-desc">{project.description}</p>
        {project.isLive && project.liveUrl && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              marginTop: 10,
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--color-accent)",
              letterSpacing: "0.04em",
            }}
          >
            View Project →
          </span>
        )}
      </div>
    </motion.div>
  );

  if (project.isLive && project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none", color: "inherit" }}
        aria-label={`View live project: ${project.title}`}
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

// ── Main component ──────────────────────────────────────────────────────────
export default function ExpertiseSection() {
  const [active, setActive] = useState("products");
  const shouldReduceMotion = useReducedMotion();

  const current = categories.find((c) => c.id === active)!;

  return (
    <section className="expertise section" id="work" aria-label="Work and expertise" style={{ id: "expertise" } as React.CSSProperties}>
      {/* Crisp White Section Header immediately following dark hero */}
      <div className="w-full bg-white text-gray-900 border-b border-gray-200 py-8 px-6 sm:px-12 mb-12 shadow-sm rounded-2xl">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-[#C9A876]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-sans">
              Select an expertise
            </h2>
          </div>

          <a
            href="#expertise-content"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition-transform duration-300 hover:bg-gray-200 hover:translate-y-1"
            aria-label="Scroll to view expertise"
          >
            <svg
              className="h-6 w-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="container" id="expertise-content">
        <FadeUp>
          <div className="section-header">
            <div className="section-header__inner">
              <div>
                <p className="section-label">Work & Expertise</p>
                <h2 className="display-lg" style={{ marginTop: 12 }}>
                  Real products. Targeted solutions.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <p
                  style={{
                    maxWidth: 360,
                    color: "var(--color-text-2)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  From live products built for scale to industry-specific sites
                  designed around how local customers actually search and decide.
                </p>

                {/* Social Links Cluster (Facebook, WhatsApp, Instagram) */}
                <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:ml-6">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/deeptechsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#3D3F41] bg-[#1E2022] text-[#9A9A9C] transition-all hover:scale-110 hover:border-[#1877F2] hover:bg-[#1877F2]/15 hover:text-[#1877F2] shadow-lg"
                    aria-label="Facebook Page"
                    id="expertise-facebook"
                    title="Facebook: deeptechsolutions"
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/?text=Hello%20Deep%20Tech%20Solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#3D3F41] bg-[#1E2022] text-[#9A9A9C] transition-all hover:scale-110 hover:border-[#25D366] hover:bg-[#25D366]/15 hover:text-[#25D366] shadow-lg"
                    aria-label="WhatsApp"
                    id="expertise-whatsapp"
                    title="Chat on WhatsApp"
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/deeptechsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#3D3F41] bg-[#1E2022] text-[#9A9A9C] transition-all hover:scale-110 hover:border-[#E4405F] hover:bg-[#E4405F]/15 hover:text-[#E4405F] shadow-lg"
                    aria-label="Instagram Profile"
                    id="expertise-instagram"
                    title="Instagram: deeptechsolutions"
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Tab navigation */}
        <FadeUp delay={0.12}>
          <div className="expertise__tabs" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`expertise__tab${active === cat.id ? " active" : ""}`}
                onClick={() => setActive(cat.id)}
                role="tab"
                aria-selected={active === cat.id}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Panel — animated transition between tabs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* ── Multi-project panel (Web Products & Tools) ─────────────────── */}
            {current.type === "multi" && current.projects && (
              <div
                className="expertise__panel active"
                id={`panel-${current.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${current.id}`}
              >
                {/* Two-card column */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {current.projects.map((proj, i) => (
                    <FadeUp key={proj.title} delay={0.1 * (i + 1)}>
                      <div style={{ position: "relative" }}>
                        <ProjectCard project={proj} priority={i === 0} />
                      </div>
                    </FadeUp>
                  ))}

                  {/* "More coming soon" placeholder */}
                  <FadeUp delay={0.3}>
                    <div
                      className="expertise__card"
                      style={{
                        background:
                          "repeating-linear-gradient(45deg, var(--color-surface) 0px, var(--color-surface) 10px, var(--color-bg-2) 10px, var(--color-bg-2) 20px)",
                        cursor: "default",
                        minHeight: 100,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        aspectRatio: "auto",
                        padding: "24px",
                      }}
                      aria-label="More projects coming soon"
                    >
                      <span
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--color-text-3)",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textAlign: "center",
                        }}
                      >
                        More projects in progress ·&nbsp;
                        <a
                          href="#contact"
                          style={{ color: "var(--color-accent)", textDecoration: "none" }}
                        >
                          Ask about custom work
                        </a>
                      </span>
                    </div>
                  </FadeUp>
                </div>

                {/* Info panel */}
                <FadeUp delay={0.2} className="expertise__info">
                  <p className="expertise__info-label">{current.infoLabel}</p>
                  <h3 className="expertise__info-title">{current.infoTitle}</h3>
                  <p className="expertise__info-desc">{current.infoDesc}</p>
                  <ul className="expertise__features" role="list">
                    {current.features.map((f) => (
                      <li key={f} className="expertise__feature">
                        <span className="expertise__feature-icon" aria-hidden="true">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Live project links */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 28 }}>
                    {current.projects?.map((proj) =>
                      proj.liveUrl ? (
                        <a
                          key={proj.liveUrl}
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost"
                          id={`live-link-${proj.title.replace(/\s+/g, "-").toLowerCase()}`}
                          style={{ justifyContent: "space-between" }}
                        >
                          <span>{proj.title}</span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      ) : null
                    )}
                    <a
                      href="#contact"
                      className="btn btn-primary"
                      id={`expertise-cta-${current.id}`}
                    >
                      Discuss your project
                    </a>
                  </div>
                </FadeUp>
              </div>
            )}

            {/* ── Single-project panel (Dental / Restaurant / Local) ─────────── */}
            {current.type !== "multi" && current.project && (
              <div
                className="expertise__panel active"
                id={`panel-${current.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${current.id}`}
              >
                {/* Project card */}
                <FadeUp delay={0.1}>
                  <ProjectCard project={current.project} priority />
                </FadeUp>

                {/* Info panel */}
                <FadeUp delay={0.2} className="expertise__info">
                  <p className="expertise__info-label">{current.infoLabel}</p>
                  <h3 className="expertise__info-title">{current.infoTitle}</h3>
                  <p className="expertise__info-desc">{current.infoDesc}</p>
                  <ul className="expertise__features" role="list">
                    {current.features.map((f) => (
                      <li key={f} className="expertise__feature">
                        <span className="expertise__feature-icon" aria-hidden="true">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="btn btn-primary"
                    id={`expertise-cta-${current.id}`}
                    style={{ marginTop: 32 }}
                  >
                    Discuss your project
                  </a>
                </FadeUp>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
