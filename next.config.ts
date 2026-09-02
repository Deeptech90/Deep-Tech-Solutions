import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" removed — Vercel uses native Next.js server mode
  // which unlocks image optimization, ISR, and API routes.
  // To restore static export for other hosts, re-add: output: "export"
  images: {
    unoptimized: true,
  },

  // ── Canonical domain redirect ──────────────────────────────────────────────
  // Redirects bare domain ➜ www (301 permanent, SEO-safe).
  // Vercel will also enforce this via its domain settings, but having it
  // here means it works in any deployment environment.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "deeptechsolutions.online",
          },
        ],
        destination: "https://www.deeptechsolutions.online/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
