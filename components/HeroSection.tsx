"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import VideoModal from "@/components/VideoModal";

const EASE = [0.16, 1, 0.3, 1] as const;

const trustBadges = [
  { icon: "👤", label: "Direct Developer" },
  { icon: "💰", label: "Transparent Pricing" },
  { icon: "📱", label: "Mobile-First" },
  { icon: "🔍", label: "SEO-Ready" },
  { icon: "⚡", label: "Fast Performance" },
  { icon: "🌍", label: "Global Availability" },
];

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section
        className="relative min-h-[92vh] w-full overflow-hidden bg-[#141618] text-white pb-16 md:pb-24"
        style={{ paddingTop: "clamp(124px, 14vh, 160px)" }}
        id="hero"
        aria-label="Hero Section"
      >
        {/* Ambient Dark Glow Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#C9A876]/10 via-[#0B132B]/20 to-transparent blur-[120px] opacity-60" />
          <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#C9A876]/10 rounded-full blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

          {/* ── HEADLINE BLOCK ─────────────────────────────────── */}
          <motion.div
            className="text-center max-w-4xl w-full mb-10"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* Eyebrow */}
            <motion.p
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#C9A876] mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              <span className="h-px w-6 bg-[#C9A876]" aria-hidden="true" />
              Professional Web Development Studio
              <span className="h-px w-6 bg-[#C9A876]" aria-hidden="true" />
            </motion.p>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display)" }}>
              Websites That Help{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A876 0%, #D4B896 50%, #C9A876 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Small Businesses
              </span>{" "}
              Get More Customers
            </h1>

            {/* Supporting copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              Fast, modern websites, local SEO, and lead-generation systems — built directly by a senior developer.
              No unnecessary agency layers. No bloated retainers. Just results.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="btn btn-primary"
                id="hero-cta-primary"
              >
                Get a Free Website Consultation
              </Link>
              <a
                href="#work"
                className="btn btn-ghost"
                id="hero-cta-secondary"
              >
                View Our Work
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" role="list" aria-label="Key differentiators">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  role="listitem"
                  className="flex items-center gap-1.5 text-xs sm:text-sm text-white/60 font-medium"
                >
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── LAPTOP MOCKUP ──────────────────────────────────── */}
          <div className="hero-3d-stage w-full max-w-5xl flex justify-center items-center relative">
            <motion.div
              className="hero-3d-laptop relative w-full max-w-[840px] shadow-[0_30px_90px_rgba(0,0,0,0.8)] rounded-2xl"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 40, rotateX: 0, rotateY: 0 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, rotateX: 14, rotateY: -10, rotateZ: 3 }
              }
              transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* LAPTOP SCREEN FRAME */}
              <div className="relative rounded-t-[24px] rounded-b-[6px] border-[10px] sm:border-[14px] border-[#22252A] bg-[#0B132B] shadow-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9.5]">
                {/* Camera dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 h-2 w-2 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
                  <div className="h-0.5 w-0.5 rounded-full bg-blue-400/80" />
                </div>

                {/* SCREEN CONTENT */}
                <div
                  className="relative h-full w-full bg-black cursor-pointer group overflow-hidden"
                  onClick={() => setIsModalOpen(true)}
                  title="Click to view full screen with sound"
                >
                  <video
                    src="/videos/hero-intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Browser bar */}
                  <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between gap-2 bg-[#0B0D10] px-4 py-2 border-b border-white/10 shadow-lg">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 rounded-md bg-[#16191E] px-3 py-1 border border-white/10 text-[10px] sm:text-xs font-mono tracking-wide">
                      <svg className="h-3 w-3 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-white font-medium truncate">https://deeptechsolutions.online</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] text-emerald-400 font-mono border border-emerald-500/20 shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE
                    </div>
                  </div>

                  {/* Play button on hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A876] text-black shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                      <svg className="ml-1 h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Screen bottom bar */}
                  <div className="absolute bottom-2 left-3 right-3 z-20 flex items-center justify-between text-[9px] sm:text-[11px] text-white/70 font-mono bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md border border-white/5">
                    <span className="text-amber-300 font-semibold">https://deeptechsolutions.online</span>
                    <span>HD • 60 FPS ⤢</span>
                  </div>
                </div>
              </div>

              {/* Laptop base */}
              <div className="relative mx-auto h-4 sm:h-5 w-[98%] bg-gradient-to-b from-[#2A2D34] via-[#1F2126] to-[#121417] rounded-b-2xl border-t border-white/10 shadow-2xl flex justify-center items-center">
                <div className="h-1.5 w-16 sm:w-24 rounded-full bg-[#111215] border border-white/10" />
              </div>
            </motion.div>

            {/* Watch Showreel button */}
            <div className="absolute -bottom-6 right-0 sm:bottom-2 sm:right-0 z-40">
              <div className="group relative flex items-center justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative flex h-24 w-24 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-white text-black shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#C9A876]/50"
                  aria-label="Watch Showreel Video"
                >
                  <svg
                    className={`h-full w-full ${shouldReduceMotion ? "" : "spin-badge-text"}`}
                    viewBox="0 0 160 160"
                  >
                    <path
                      id="circlePath"
                      d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                      fill="none"
                    />
                    <text className="text-[12.5px] font-bold uppercase tracking-[0.24em] fill-black">
                      <textPath href="#circlePath" startOffset="0%">
                        WATCH SHOWREEL • WATCH SHOWREEL •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#191B1D] text-white shadow-md transition-transform duration-300 group-hover:bg-[#C9A876] group-hover:text-black">
                    <svg className="ml-0.5 h-4 w-4 sm:h-5 sm:w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Video Modal Lightbox */}
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
