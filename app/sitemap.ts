import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.deeptechsolutions.online";


export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date("2026-09-07");

  return [
    // ── Homepage ───────────────────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Core Service Pages ─────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/small-business-web-design`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/web-design-development`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/freelance-web-developer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/website-redesign`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/lead-generation-websites`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/local-seo-web-design`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ── Industry Pages ─────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/web-design-for-dentists`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/restaurant-website-design`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/law-firm-website-design`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/healthcare-web-design`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/local-service-business-web-design`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/web-designer-india`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Conversion / High-Intent Pages ─────────────────────────────────────────
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // ── Blog Index ─────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ── Published Blog Posts ───────────────────────────────────────────────────
    {
      url: `${BASE_URL}/blog/small-business-website-cost`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/what-should-a-small-business-website-include`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/freelancer-vs-agency`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/how-to-get-more-leads-from-website`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/small-business-website-redesign-checklist`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/local-seo-guide`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/restaurant-delivery-apps`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/dental-website-structure`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Legal Pages ────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
