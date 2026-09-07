"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerChildVariants,
  staggerChildVariantsReduced,
} from "@/components/motion/StaggerContainer";

const capabilities = [
  {
    icon: "🖥️",
    title: "Website Design & Development",
    desc: "Custom, performance-first websites built with modern frameworks. Mobile-first, fast-loading, and conversion-optimised from the ground up.",
    tag: "Core service",
    id: "cap-design",
    href: "/web-design-development",
  },
  {
    icon: "🏢",
    title: "Small Business Websites",
    desc: "Simple, effective websites for local businesses, service providers, startups, and professionals — designed to turn visitors into customers.",
    tag: "Most popular",
    id: "cap-small-biz",
    href: "/small-business-web-design",
  },
  {
    icon: "🎯",
    title: "Lead Generation",
    desc: "Landing pages, contact forms, WhatsApp buttons, booking systems, and conversion strategies that fill your pipeline with qualified leads.",
    tag: "High impact",
    id: "cap-leads",
    href: "/lead-generation-websites",
  },
  {
    icon: "📍",
    title: "Local SEO",
    desc: "Google Business Profile setup, on-page SEO, schema markup, and citation building to help you rank where your customers are searching.",
    tag: "Local-first",
    id: "cap-seo",
    href: "/local-seo-web-design",
  },
  {
    icon: "🔄",
    title: "Website Redesign",
    desc: "Modernize an outdated website. Improve speed, mobile experience, SEO, design, and conversion — without starting from scratch unnecessarily.",
    tag: "Modernization",
    id: "cap-redesign",
    href: "/website-redesign",
  },
  {
    icon: "📅",
    title: "Booking & Integrations",
    desc: "Appointment scheduling (Cal.com, Calendly), WhatsApp, CRM integrations, contact forms, and payment systems — connected seamlessly.",
    tag: "Integrations",
    id: "cap-booking",
    href: "/contact",
  },
  {
    icon: "👨‍💻",
    title: "Freelance Web Developer",
    desc: "Work directly with the developer. No agency layers, no account managers, no handoffs. Just clear communication and professional delivery.",
    tag: "Direct access",
    id: "cap-freelance",
    href: "/freelance-web-developer",
  },
  {
    icon: "⚙️",
    title: "Custom Web Applications",
    desc: "Advanced functionality when your business needs more — custom tools, portals, dashboards, or anything that off-the-shelf products can't do.",
    tag: "Advanced",
    id: "cap-custom",
    href: "/contact",
  },
];

export default function CapabilitiesSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = shouldReduceMotion
    ? staggerChildVariantsReduced
    : staggerChildVariants;

  return (
    <section
      className="capabilities section"
      id="services"
      aria-label="Services and capabilities"
    >
      <div className="container">
        <div className="section-header">
          <div className="section-header__inner">
            <FadeUp>
              <p className="section-label">What we do</p>
              <h2 className="display-lg" style={{ marginTop: 12 }}>
                Everything your business{" "}
                <span className="text-gradient">website needs</span>
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

        <StaggerContainer className="capabilities__grid" staggerDelay={0.08} containerDelay={0.1}>
          {capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              id={cap.id}
              variants={childVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{ display: "contents" }}
            >
              <Link
                href={cap.href}
                className="cap-card"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
                aria-label={`${cap.title} — ${cap.desc}`}
              >
                <div className="cap-card__icon" aria-hidden="true">
                  {cap.icon}
                </div>
                <h3 className="cap-card__title">{cap.title}</h3>
                <p className="cap-card__desc">{cap.desc}</p>
                <span className="cap-card__tag">{cap.tag}</span>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
