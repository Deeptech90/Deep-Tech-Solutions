"use client";

import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerChildVariants,
  staggerChildVariantsReduced,
} from "@/components/motion/StaggerContainer";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    id: "step-discovery",
    number: "01",
    title: "Discovery",
    desc: "We learn about your business, customers, goals, and competitors. This shapes everything that follows.",
    icon: "🔍",
  },
  {
    id: "step-ux",
    number: "02",
    title: "UX Design",
    desc: "Wireframes and page structure designed around how your customers think — not how websites typically look.",
    icon: "📐",
  },
  {
    id: "step-design",
    number: "03",
    title: "Visual Design",
    desc: "A premium design that communicates trust, credibility, and professionalism — unique to your business.",
    icon: "🎨",
  },
  {
    id: "step-dev",
    number: "04",
    title: "Development",
    desc: "Fast, clean code built with modern frameworks. Mobile-first, performance-optimised, and accessibility-compliant.",
    icon: "⚙️",
  },
  {
    id: "step-seo",
    number: "05",
    title: "SEO Setup",
    desc: "On-page SEO, schema markup, metadata, sitemap, Google Search Console — done right before launch.",
    icon: "📈",
  },
  {
    id: "step-launch",
    number: "06",
    title: "Launch & Support",
    desc: "We deploy, test, and monitor. Post-launch support ensures everything keeps working as your business grows.",
    icon: "🚀",
  },
];

export default function ProcessSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = shouldReduceMotion
    ? staggerChildVariantsReduced
    : staggerChildVariants;

  return (
    <section
      className="section"
      id="process"
      aria-label="Our process"
    >
      <div className="container">
        <div className="section-header">
          <div className="section-header__inner">
            <FadeUp>
              <p className="section-label">How it works</p>
              <h2 className="display-lg" style={{ marginTop: 12 }}>
                From brief to live in{" "}
                <span className="text-gradient">2–4 weeks</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p
                style={{
                  maxWidth: 380,
                  color: "var(--color-text-2)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                A clear, predictable process with no surprises. You're involved
                at every stage, and you always know where we are.
              </p>
            </FadeUp>
          </div>
        </div>

        <StaggerContainer
          className="capabilities__grid"
          staggerDelay={0.1}
          containerDelay={0.1}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              id={step.id}
              className="cap-card"
              variants={childVariants}
              style={{ position: "relative", overflow: "visible" }}
            >
              {/* Step number watermark */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 12,
                  right: 16,
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-display)",
                  color: "rgba(201,168,118,0.08)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {step.number}
              </span>

              <div
                className="cap-card__icon"
                aria-hidden="true"
                style={{ fontSize: "1.6rem", marginBottom: 12 }}
              >
                {step.icon}
              </div>
              <h3 className="cap-card__title">
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    marginBottom: 4,
                    marginRight: 8,
                    verticalAlign: "middle",
                  }}
                >
                  {step.number}
                </span>
                {step.title}
              </h3>
              <p className="cap-card__desc">{step.desc}</p>

              {/* Connector line (not on last item) */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: -2,
                    right: -2,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    opacity: 0.4,
                  }}
                />
              )}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
