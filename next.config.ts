import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" removed — Vercel uses native Next.js server mode
  // which unlocks image optimization, ISR, and API routes.
  // To restore static export for other hosts, re-add: output: "export"
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
