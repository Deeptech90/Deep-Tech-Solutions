import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.deeptechsolutions.online";


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-08-15"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: new Date("2026-08-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ── Published blog posts ─────────────────────────────────────────────────
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
    // ── Legal pages ──────────────────────────────────────────────────────────────
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
