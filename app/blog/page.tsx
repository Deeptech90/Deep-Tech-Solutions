import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — Deep Tech Solutions",
  description:
    "Practical advice on web presence, local SEO, and lead generation for dental clinics, restaurants, and local service businesses.",
};

// ─── ADD POSTS HERE WHEN READY ───────────────────────────────────────────────
// Each post needs a matching folder: app/blog/[slug]/page.tsx
// Example:
//   { slug: "local-seo-guide", title: "Why Your GBP Is Your Best Marketing Tool", date: "2026-08-01" }
const PUBLISHED_POSTS: { slug: string; title: string; date: string }[] = [];
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogIndexPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        fontFamily: "var(--font-body)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          marginBottom: 16,
        }}
      >
        Insights
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
          marginBottom: 20,
          maxWidth: 640,
        }}
      >
        Practical advice for local businesses
      </h1>

      {PUBLISHED_POSTS.length === 0 ? (
        <>
          <p
            style={{
              color: "var(--color-text-2)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            Posts are on the way. Subscribe or check back soon for no-fluff
            guides on local SEO, website strategy, and turning online traffic
            into paying customers.
          </p>
          <Link
            href="/#insights"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--color-text)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            ← Back to homepage
          </Link>
        </>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: 40,
            width: "100%",
            maxWidth: 680,
            textAlign: "left",
          }}
        >
          {PUBLISHED_POSTS.map((post) => (
            <li
              key={post.slug}
              style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: 20, marginBottom: 20 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                style={{ color: "var(--color-text)", textDecoration: "none" }}
              >
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-3)", marginBottom: 6 }}>
                  {post.date}
                </p>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}>
                  {post.title}
                </strong>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
