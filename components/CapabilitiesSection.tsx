"use client";

import { motion, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerChildVariants,
  staggerChildVariantsReduced,
} from "@/components/motion/StaggerContainer";

export default function CapabilitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const capabilities = [
    {
      icon: "🖥️",
      title: "Website Design & Development",
      desc: "Custom, performance-first websites built with modern frameworks. Mobile-first, fast-loading, and conversion-optimised from the ground up.",
      tag: "Core service",
      id: "cap-design",
    },
    {
      icon: "🎯",
      title: "Lead Generation & Prospecting",
      desc: "Outbound prospecting, lead magnet funnels, and landing page strategies that fill your pipeline with qualified local leads.",
      tag: "High impact",
      id: "cap-leads",
    },
    {
      icon: "📍",
      title: "SEO & Local Search Optimisation",
      desc: "Google Business Profile setup, on-page SEO, schema markup, and citation building to help you rank where your customers are searching.",
      tag: "Local-first",
      id: "cap-seo",
    },
    {
      icon: "🛠️",
      title: "Ongoing Maintenance & Support",
      desc: "Monthly updates, security patches, uptime monitoring, and priority support — so your site stays fast, secure, and working.",
      tag: "Retainer",
      id: "cap-maintenance",
    },
    {
      icon: "📅",
      title: "Booking & E-commerce Integration",
      desc: "Stripe payments, appointment scheduling (Calendly, Cal.com), WooCommerce, or custom-built — depending on what your business actually needs.",
      tag: "Integrations",
      id: "cap-booking",
    },
  ];

  const childVariants = shouldReduceMotion
    ? staggerChildVariantsReduced
    : staggerChildVariants;

  return (
    <section
      className="capabilities section"
      id="services"
      aria-label="Capabilities and services"
    >
      <div className="container">
        <div className="section-header">
          <div className="section-header__inner">
            <FadeUp>
              <p className="section-label">What&apos;s included</p>
              <h2 className="display-lg" style={{ marginTop: 12 }}>
                Full-stack capabilities,{" "}
                <span className="text-gradient">solo execution</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p
                style={{
                  maxWidth: 360,
                  color: "var(--color-text-2)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                You deal directly with the person doing the work — no account
                managers, no handoffs, no communication overhead.
              </p>
            </FadeUp>
          </div>
        </div>

        <StaggerContainer className="capabilities__grid" staggerDelay={0.1} containerDelay={0.1}>
          {capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              className="cap-card"
              id={cap.id}
              variants={childVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="cap-card__icon" aria-hidden="true">
                {cap.icon}
              </div>
              <h3 className="cap-card__title">{cap.title}</h3>
              <p className="cap-card__desc">{cap.desc}</p>
              <span className="cap-card__tag">{cap.tag}</span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
