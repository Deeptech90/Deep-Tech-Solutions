"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerChildVariants,
  staggerChildVariantsReduced,
} from "@/components/motion/StaggerContainer";

const posts = [
  {
    id: "insight-cost",
    icon: "💰",
    category: "Website Cost",
    title: "How Much Does a Small Business Website Cost?",
    excerpt:
      "Transparent breakdown of what a professional small business website actually costs — and what drives the price up or down.",
    readTime: "6 min read",
    slug: "small-business-website-cost",
  },
  {
    id: "insight-local-seo",
    icon: "📍",
    category: "Local SEO",
    title: "Why Your Google Business Profile Is Your Most Powerful Local Marketing Tool",
    excerpt:
      "Most local businesses set up their GBP once and forget it. Here's why that's leaving calls and walk-ins on the table.",
    readTime: "5 min read",
    slug: "local-seo-guide",
  },
  {
    id: "insight-leads",
    icon: "🎯",
    category: "Lead Generation",
    title: "How to Get More Leads From Your Business Website",
    excerpt:
      "Your website is getting traffic but no enquiries? Here's a practical framework for turning visitors into paying customers.",
    readTime: "7 min read",
    slug: "how-to-get-more-leads-from-website",
  },
  {
    id: "insight-restaurant",
    icon: "🍽️",
    category: "Restaurant Marketing",
    title: "How Restaurants Can Reduce Dependence on Delivery Apps",
    excerpt:
      "Third-party platforms take 15–30% of every order. Direct online ordering isn't complicated — and it pays for itself fast.",
    readTime: "7 min read",
    slug: "restaurant-delivery-apps",
  },
  {
    id: "insight-freelancer",
    icon: "👨‍💻",
    category: "Hiring Advice",
    title: "Freelancer vs Agency: Which Is Better for Your Small Business Website?",
    excerpt:
      "A fair comparison of the two options — costs, communication, accountability, and which suits different business needs.",
    readTime: "5 min read",
    slug: "freelancer-vs-agency",
  },
  {
    id: "insight-dental",
    icon: "🦷",
    category: "Dental Practices",
    title: "The 5-Page Dental Website Structure That Consistently Converts",
    excerpt:
      "Most dental websites bury the information patients actually need. Here's a structure proven to improve booking rates.",
    readTime: "6 min read",
    slug: "dental-website-structure",
  },
];

export default function InsightsSection() {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = shouldReduceMotion
    ? staggerChildVariantsReduced
    : staggerChildVariants;

  return (
    <section className="insights section" id="insights" aria-label="Blog and insights">
      <div className="container">
        <div className="section-header">
          <div className="section-header__inner">
            <FadeUp>
              <p className="section-label">Insights & Resources</p>
              <h2 className="display-lg" style={{ marginTop: 12 }}>
                Practical advice for business owners
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p
                  style={{
                    maxWidth: 360,
                    color: "var(--color-text-2)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  No fluff. Actionable posts on web design, local SEO, and
                  turning traffic into customers.
                </p>
                <Link
                  href="/blog"
                  className="btn btn-ghost"
                  id="insights-view-all"
                  style={{ alignSelf: "flex-start" }}
                >
                  View all articles →
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>

        <StaggerContainer className="insights__grid" staggerDelay={0.08} containerDelay={0.1}>
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="insight-card"
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
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <h3 className="insight-card__title" style={{ cursor: "pointer" }}>{post.title}</h3>
                </Link>
                <p className="insight-card__excerpt">{post.excerpt}</p>
                <div className="insight-card__meta">
                  <span>{post.readTime}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="insight-card__read-more"
                    style={{ textDecoration: "none" }}
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
