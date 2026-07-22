"use client";

import { motion, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerChildVariants,
  staggerChildVariantsReduced,
} from "@/components/motion/StaggerContainer";
import MagneticButton from "@/components/motion/MagneticButton";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = shouldReduceMotion
    ? staggerChildVariantsReduced
    : staggerChildVariants;

  const advantages = [
    "Fast turnaround — 2–5 days for a first draft",
    "One point of contact, always",
    "Competitive pricing vs. local agencies",
    "Flexible timezone coverage (IST/GMT/EST overlap)",
  ];

  const regions = [
    { flag: "🇺🇸", label: "United States" },
    { flag: "🇬🇧", label: "United Kingdom" },
    { flag: "🇪🇺", label: "European Union" },
    { flag: "🌏", label: "Southeast Asia" },
    { flag: "🇮🇳", label: "Based in India" },
  ];

  return (
    <section className="about section" id="about" aria-label="About section">
      <div className="container">
        <div className="about__inner">
          {/* Visual card */}
          <FadeUp className="about__visual">
            <div className="about__card-main">
              <div className="about__world-icon" aria-hidden="true">🌐</div>
              <h3 className="about__world-title">Working with clients globally</h3>
              <p className="about__world-desc">
                Based in India, building for businesses across the US, UK, EU,
                and Southeast Asia. The internet removed the geographic barrier
                — your website shouldn&apos;t feel like it has one either.
              </p>
              <div className="about__regions" role="list" aria-label="Regions served">
                {regions.map((r) => (
                  <div key={r.label} className="about__region" role="listitem">
                    <span aria-hidden="true">{r.flag}</span>
                    {r.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating advantages card */}
            <div className="about__advantages" aria-label="Key advantages">
              <p className="about__advantages-title">Why work with me</p>
              {advantages.map((adv) => (
                <div key={adv} className="about__advantage-item">
                  <span className="about__advantage-dot" aria-hidden="true" />
                  {adv}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Content */}
          <div className="about__content">
            <StaggerContainer staggerDelay={0.12} containerDelay={0.1}>
              <motion.p className="about__tagline" variants={childVariants}>
                Honest positioning
              </motion.p>
              <motion.h2 className="about__title" variants={childVariants}>
                A freelance developer who{" "}
                <span className="text-gradient">ships work you can trust</span>
              </motion.h2>
              <motion.p className="about__desc" variants={childVariants}>
                Deep Tech Solutions is a solo freelance practice — not an agency.
                That means when you hire me, you&apos;re working directly with the
                person writing your code, setting up your SEO, and building your
                lead generation system.
              </motion.p>
              <motion.p className="about__desc" variants={childVariants}>
                I specialise in web presence and online lead generation for local
                businesses in the dental, restaurant, and service trades sectors.
                Everything I offer is focused on outcomes: more bookings, more
                calls, more customers.
              </motion.p>

              <motion.div className="about__highlight" variants={childVariants}>
                <span className="about__highlight-icon" aria-hidden="true">
                  💬
                </span>
                <p>
                  <strong>No account managers. No project handoffs.</strong> You
                  email me, I reply. You have a question, I answer it — not a
                  helpdesk ticket system. This is what direct, professional
                  freelance collaboration looks like.
                </p>
              </motion.div>

              <motion.div variants={childVariants}>
                <MagneticButton>
                  <a
                    href="#contact"
                    className="btn btn-primary"
                    id="about-cta"
                  >
                    Start a conversation
                  </a>
                </MagneticButton>
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
