"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerChildVariants,
  staggerChildVariantsReduced,
} from "@/components/motion/StaggerContainer";

const industries = [
  {
    id: "ind-dental",
    icon: "🦷",
    title: "Dental Clinics",
    desc: "Booking systems, treatment pages, patient trust signals, and local SEO to fill your appointment book.",
    href: "/web-design-for-dentists",
    color: "#4FC3F7",
  },
  {
    id: "ind-restaurant",
    icon: "🍽️",
    title: "Restaurants & Cafés",
    desc: "Online ordering, reservations, menu showcase, and local search visibility — cutting out delivery app fees.",
    href: "/restaurant-website-design",
    color: "#FF8A65",
  },
  {
    id: "ind-law",
    icon: "⚖️",
    title: "Law Firms",
    desc: "Attorney profiles, practice areas, client testimonials, and consultation request forms built for trust.",
    href: "/law-firm-website-design",
    color: "#CE93D8",
  },
  {
    id: "ind-local",
    icon: "🔧",
    title: "Local Services",
    desc: "Plumbers, electricians, contractors, landscapers — lead generation sites that drive calls and quote requests.",
    href: "/local-service-business-web-design",
    color: "#81C784",
  },
  {
    id: "ind-healthcare",
    icon: "🏥",
    title: "Healthcare & Clinics",
    desc: "Compliant, patient-friendly websites for clinics, therapists, physiotherapists, and wellness professionals.",
    href: "/healthcare-web-design",
    color: "#4DB6AC",
  },
  {
    id: "ind-small-biz",
    icon: "🏪",
    title: "Small Businesses",
    desc: "Professional online presence for any small or growing business that needs to be found and trusted online.",
    href: "/small-business-web-design",
    color: "#C9A876",
  },
];

export default function IndustriesSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = shouldReduceMotion
    ? staggerChildVariantsReduced
    : staggerChildVariants;

  return (
    <section
      className="section"
      id="industries"
      aria-label="Industries we serve"
      style={{ background: "var(--color-bg-2)" }}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-header__inner">
            <FadeUp>
              <p className="section-label">Who we work with</p>
              <h2 className="display-lg" style={{ marginTop: 12 }}>
                Industry-specific{" "}
                <span className="text-gradient">website solutions</span>
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
                Every industry has different customer expectations, local search
                patterns, and conversion requirements. We build accordingly.
              </p>
            </FadeUp>
          </div>
        </div>

        <StaggerContainer
          className="capabilities__grid"
          staggerDelay={0.08}
          containerDelay={0.1}
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              id={ind.id}
              variants={childVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{ display: "contents" }}
            >
              <Link
                href={ind.href}
                className="cap-card"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
                aria-label={`${ind.title} website design`}
              >
                <div
                  className="cap-card__icon"
                  aria-hidden="true"
                  style={{ fontSize: "1.8rem" }}
                >
                  {ind.icon}
                </div>
                <h3
                  className="cap-card__title"
                  style={{ color: ind.color }}
                >
                  {ind.title}
                </h3>
                <p className="cap-card__desc">{ind.desc}</p>
                <span
                  className="cap-card__tag"
                  style={{
                    color: ind.color,
                    background: `${ind.color}18`,
                    borderColor: `${ind.color}30`,
                  }}
                >
                  View industry page →
                </span>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
