"use client";

import { motion, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerChildVariants,
  staggerChildVariantsReduced,
} from "@/components/motion/StaggerContainer";

// ─── BLOG POSTS CONFIGURATION ────────────────────────────────────────────────
// To publish a post:
//   1. Create the file at app/blog/[slug]/page.tsx
//   2. Set comingSoon: false on the matching entry below
//   3. Add a `slug` field matching the folder name (e.g. slug: "local-seo-guide")
// Until a post is live, keep comingSoon: true — no link will be rendered.
// ─────────────────────────────────────────────────────────────────────────────

export default function InsightsSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = shouldReduceMotion
    ? staggerChildVariantsReduced
    : staggerChildVariants;

  const posts = [
    {
      id: "insight-local-seo",
      icon: "📍",
      category: "Local SEO",
      title: "Why Your Google Business Profile Is Your Most Powerful Local Marketing Tool",
      excerpt:
        "Most local businesses set up their GBP once and forget it. Here's why that's leaving calls and walk-ins on the table — and what to do instead.",
      readTime: "5 min read",
      comingSoon: true,  // set to false and add slug when published
    },
    {
      id: "insight-restaurant",
      icon: "🍽️",
      category: "Restaurant Marketing",
      title: "How Restaurants Can Reduce Dependence on Delivery Apps (And Keep More Revenue)",
      excerpt:
        "Third-party platforms take 15–30% of every order. Direct online ordering isn't complicated — and it pays for itself fast.",
      readTime: "7 min read",
      comingSoon: true,  // set to false and add slug when published
    },
    {
      id: "insight-dental",
      icon: "🦷",
      category: "Dental Practices",
      title: "The 5-Page Dental Website Structure That Consistently Converts Searchers to Patients",
      excerpt:
        "Most dental websites bury the information patients actually need. Here's a structure — and reasoning — that's proven to improve booking rates.",
      readTime: "6 min read",
      comingSoon: true,  // set to false and add slug when published
    },
  ];

  return (
    <section className="insights section" id="insights" aria-label="Blog and insights">
      <div className="container">
        <div className="section-header">
          <div className="section-header__inner">
            <FadeUp>
              <p className="section-label">Insights</p>
              <h2 className="display-lg" style={{ marginTop: 12 }}>
                Practical advice for local businesses
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
                No fluff. Just actionable posts on web presence, local SEO, and
                turning traffic into customers.
              </p>
            </FadeUp>
          </div>
        </div>

        <StaggerContainer className="insights__grid" staggerDelay={0.1} containerDelay={0.1}>
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className={`insight-card${post.comingSoon ? " insight-card--coming-soon" : ""}`}
              id={post.id}
              aria-label={post.title}
              variants={childVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="insight-card__image" aria-hidden="true">
                <span>{post.icon}</span>
              </div>
              <div className="insight-card__body">
                <p className="insight-card__category">{post.category}</p>
                <h3 className="insight-card__title">{post.title}</h3>
                <p className="insight-card__excerpt">{post.excerpt}</p>
                <div className="insight-card__meta">
                  <span>{post.readTime}</span>
                  {post.comingSoon ? (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-3)",
                        fontStyle: "italic",
                      }}
                    >
                      Coming soon
                    </span>
                  ) : (
                    <span className="insight-card__read-more">
                      Read →
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
