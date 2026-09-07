"use client";

import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerChildVariants,
  staggerChildVariantsReduced,
} from "@/components/motion/StaggerContainer";
import { motion, useReducedMotion } from "motion/react";

const problems = [
  {
    id: "prob-outdated",
    icon: "😬",
    title: "Your website looks outdated",
    desc: "A website that looks like it was built in 2012 tells customers you haven't invested in your business — and they go somewhere else.",
  },
  {
    id: "prob-no-leads",
    icon: "📭",
    title: "You're not getting enquiries",
    desc: "Visitors land on your site and leave without contacting you. No calls, no form submissions, no WhatsApp messages.",
  },
  {
    id: "prob-google",
    icon: "🔍",
    title: "Customers can't find you on Google",
    desc: "Your competitors are showing up for local searches and you're nowhere to be seen — even though you do better work.",
  },
  {
    id: "prob-mobile",
    icon: "📱",
    title: "Your site is slow or broken on mobile",
    desc: "Over 65% of business searches happen on mobile. A slow or hard-to-use mobile site is costing you customers every day.",
  },
  {
    id: "prob-no-booking",
    icon: "📅",
    title: "There's no easy way to book or enquire",
    desc: "No booking system, no clear call to action, no WhatsApp button. Your website makes it harder than it needs to be.",
  },
  {
    id: "prob-agency",
    icon: "💸",
    title: "Your agency is expensive and slow",
    desc: "You're paying for account managers, project managers, and handoffs — but not for faster or better results.",
  },
];

export default function ProblemSolutionSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = shouldReduceMotion
    ? staggerChildVariantsReduced
    : staggerChildVariants;

  return (
    <section
      className="section"
      id="problems"
      aria-label="Problems we solve"
      style={{ background: "var(--color-bg-2)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-header__inner">
            <FadeUp>
              <p className="section-label">Sound familiar?</p>
              <h2 className="display-lg" style={{ marginTop: 12 }}>
                Is your website{" "}
                <span className="text-gradient">working against you?</span>
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
                These are the most common problems business owners bring to us.
                If any of these describe your situation, you're in the right
                place.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Problem grid */}
        <StaggerContainer
          className="capabilities__grid"
          staggerDelay={0.08}
          containerDelay={0.1}
        >
          {problems.map((p) => (
            <motion.div
              key={p.id}
              className="cap-card"
              id={p.id}
              variants={childVariants}
              whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="cap-card__icon" aria-hidden="true" style={{ fontSize: "1.6rem" }}>
                {p.icon}
              </div>
              <h3 className="cap-card__title">{p.title}</h3>
              <p className="cap-card__desc">{p.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Solution bridge */}
        <FadeUp delay={0.2}>
          <div
            style={{
              marginTop: "clamp(48px, 6vw, 80px)",
              padding: "clamp(32px, 4vw, 48px)",
              background: "linear-gradient(135deg, rgba(201,168,118,0.08) 0%, rgba(201,168,118,0.03) 100%)",
              border: "1px solid rgba(201,168,118,0.18)",
              borderRadius: "var(--radius-xl)",
              textAlign: "center",
              maxWidth: 740,
              margin: "clamp(48px, 6vw, 80px) auto 0",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: 16,
              }}
            >
              The Solution
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: 16,
                color: "var(--color-text)",
              }}
            >
              A professional website built around{" "}
              <span className="text-gradient">your business goals</span>
            </h3>
            <p
              style={{
                color: "var(--color-text-2)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 540,
                margin: "0 auto 28px",
              }}
            >
              Deep Tech Solutions builds fast, modern, conversion-focused
              websites — working directly with you, without agency overhead.
              Mobile-first, SEO-ready, and designed to turn visitors into
              enquiries.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
              id="problem-solution-cta"
            >
              Get a Free Consultation
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
