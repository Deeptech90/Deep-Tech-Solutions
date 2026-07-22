import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ─── PUBLISHED POSTS ──────────────────────────────────────────────────────────
// To add a post:
//   1. Uncomment (or copy) an entry in the `posts` map below
//   2. Fill in title, date, category, and content (raw HTML or swap to MDX)
//   3. The slug key becomes the URL: /blog/local-seo-guide etc.
// The build will automatically pre-render any entry added here.
// ─────────────────────────────────────────────────────────────────────────────

type Post = {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string; // plain HTML; swap to an MDX import if you prefer
  comingSoon?: boolean;
};

const posts: Record<string, Post> = {
  // ── Add live posts below this line ─────────────────────────────────────────

  // "local-seo-guide": {
  //   title: "Why Your Google Business Profile Is Your Most Powerful Local Marketing Tool",
  //   date: "2026-08-01",
  //   category: "Local SEO",
  //   readTime: "5 min read",
  //   content: "<p>Your post content here...</p>",
  // },

  // ── Placeholder entries (renders a "coming soon" page, not a 404) ──────────
  // These exist so the static export has at least one slug to pre-render.
  // Remove them (or overwrite with real content) once posts are live.
  "local-seo-guide": {
    title: "Why Your Google Business Profile Is Your Most Powerful Local Marketing Tool",
    date: "Coming soon",
    category: "Local SEO",
    readTime: "5 min read",
    content: "",
    comingSoon: true,
  },
  "restaurant-delivery-apps": {
    title: "How Restaurants Can Reduce Dependence on Delivery Apps (And Keep More Revenue)",
    date: "Coming soon",
    category: "Restaurant Marketing",
    readTime: "7 min read",
    content: "",
    comingSoon: true,
  },
  "dental-website-structure": {
    title: "The 5-Page Dental Website Structure That Consistently Converts Searchers to Patients",
    date: "Coming soon",
    category: "Dental Practices",
    readTime: "6 min read",
    content: "",
    comingSoon: true,
  },
};

// Required for Next.js static export with a dynamic segment.
// dynamicParams = false means any unlisted slug 404s rather than trying to render.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.comingSoon
      ? `${post.title} — Coming Soon | Deep Tech Solutions`
      : `${post.title} — Deep Tech Solutions`,
    description: post.title,
    robots: post.comingSoon ? { index: false, follow: false } : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  // ── Coming-soon placeholder page ────────────────────────────────────────────
  if (post.comingSoon) {
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
          {post.category}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            marginBottom: 20,
            maxWidth: 640,
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            color: "var(--color-text-2)",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 12,
          }}
        >
          This post is on its way. Check back soon — or head back to the
          homepage to see what&apos;s available now.
        </p>
        <p
          style={{
            color: "var(--color-text-3)",
            fontSize: "0.85rem",
            marginBottom: 40,
          }}
        >
          {post.readTime} · estimated
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
          ← Back to insights
        </Link>
      </main>
    );
  }

  // ── Published post ──────────────────────────────────────────────────────────
  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        padding: "120px clamp(20px, 5vw, 60px) 80px",
      }}
    >
      <article style={{ maxWidth: 720, margin: "0 auto" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.85rem",
            color: "var(--color-text-3)",
            marginBottom: 40,
            textDecoration: "none",
          }}
        >
          ← All posts
        </Link>

        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 12,
          }}
        >
          {post.category}
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--color-text-3)",
            marginBottom: 48,
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: 24,
          }}
        >
          {post.date} · {post.readTime}
        </p>

        <div
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--color-text-2)",
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
