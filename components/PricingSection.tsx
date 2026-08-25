"use client";

import { motion, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerChildVariants,
  staggerChildVariantsReduced,
} from "@/components/motion/StaggerContainer";

export default function PricingSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = shouldReduceMotion
    ? staggerChildVariantsReduced
    : staggerChildVariants;

  const tiers = [
    {
      id: "tier-launch",
      tier: "Tier 1",
      name: "Launch System",
      amount: "$499",
      amountNote: "Starting from — final quote after brief",
      featured: false,
      features: [
        "Custom design (up to 5 pages)",
        "Mobile-first, responsive layout",
        "Basic on-page SEO setup",
        "Contact / enquiry form",
        "Google Analytics integration",
        "Vercel / Netlify deployment",
        "2 rounds of revisions",
        "7-day post-launch support",
      ],
      cta: "Book a Strategy Call",
      ctaHref: "/book",
    },
    {
      id: "tier-growth-engine",
      tier: "Tier 2",
      name: "Growth Engine",
      amount: "$899",
      amountNote: "Starting from — scoped to your market",
      featured: true,
      badgeText: "Most popular",
      features: [
        "Everything in Launch System",
        "Landing page(s) for paid search",
        "Lead capture forms & CRM integration",
        "Google Business Profile setup/optimisation",
        "Cal.com booking system integration",
        "Local keyword research & targeting",
        "Monthly performance snapshot",
        "14-day post-launch support",
      ],
      cta: "Book a Strategy Call",
      ctaHref: "/book",
    },
    {
      id: "tier-growth-partner",
      tier: "Tier 3",
      name: "Growth Partner",
      amount: "$299",
      amountNote: "/month after initial build",
      featured: false,
      features: [
        "Everything in Launch System",
        "Ongoing on-page and technical SEO",
        "Monthly content optimisation (1 page)",
        "Security updates & plugin maintenance",
        "Uptime monitoring",
        "Core Web Vitals tracking",
        "Monthly progress report",
        "Priority email support",
      ],
      cta: "Book a Strategy Call",
      ctaHref: "/book",
    },
  ];

  return (
    <section className="pricing section" id="pricing" aria-label="Pricing tiers">
      <div className="container">
        <div className="section-header">
          <div className="section-header__inner">
            <FadeUp>
              <p className="section-label">Transparent pricing</p>
              <h2 className="display-lg" style={{ marginTop: 12 }}>
                Simple tiers,{" "}
                <span className="text-gradient">clear deliverables</span>
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
                All prices shown are starting points. Every project gets a custom
                quote based on your scope after an initial call or brief.
              </p>
            </FadeUp>
          </div>
        </div>

        <StaggerContainer className="pricing__grid" staggerDelay={0.12} containerDelay={0.1}>
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              className={`pricing-card${tier.featured ? " featured" : ""}`}
              id={tier.id}
              variants={childVariants}
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: tier.featured ? 1.02 : 1.01 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {tier.featured && tier.badgeText && (
                <div className="pricing-card__badge">{tier.badgeText}</div>
              )}
              <div className="pricing-card__header">
                <p className="pricing-card__tier">{tier.tier}</p>
                <h3 className="pricing-card__name">{tier.name}</h3>
                <div className="pricing-card__price">
                  <span className="pricing-card__currency">USD</span>
                  <span className="pricing-card__amount">{tier.amount}</span>
                </div>
                <p className="pricing-card__note">{tier.amountNote}</p>
              </div>

              <div className="pricing-card__body">
                <ul className="pricing-card__features" role="list">
                  {tier.features.map((feat) => (
                    <li key={feat} className="pricing-card__feature">
                      <span className="pricing-card__check" aria-hidden="true">
                        ✓
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.ctaHref}
                  className={`btn ${tier.featured ? "btn-primary" : "btn-ghost"}`}
                  id={`pricing-cta-${tier.id}`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
