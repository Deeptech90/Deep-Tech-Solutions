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
