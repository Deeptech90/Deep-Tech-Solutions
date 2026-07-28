"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import VideoModal from "@/components/VideoModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Framer Motion spring transition configs
  const EASE = [0.16, 1, 0.3, 1] as const;

  return (
    <>
      <section
        className="relative min-h-[92vh] w-full overflow-hidden bg-[#141618] text-white pt-24 pb-16 md:pt-28 md:pb-24 flex flex-col justify-between"
        id="hero"
        aria-label="Hero Section"
      >
        {/* Ambient Dark Glow Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#C9A876]/10 via-[#0B132B]/20 to-transparent blur-[120px] opacity-60" />
          <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#C9A876]/10 rounded-full blur-[140px]" />
          {/* Subtle Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center">
          
          {/* 3D-TILTED DEVICE MOCKUP CONTAINER */}
          <div className="hero-3d-stage w-full max-w-5xl my-4 sm:my-8 flex justify-center items-center">
            
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
              transition={{ duration: 1.1, ease: EASE }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* LAPTOP TOP BEZEL & SCREEN FRAME */}
              <div className="relative rounded-t-[24px] rounded-b-[6px] border-[10px] sm:border-[14px] border-[#22252A] bg-[#0B132B] shadow-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9.5]">
                
                {/* Laptop Camera dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 h-2 w-2 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
                  <div className="h-0.5 w-0.5 rounded-full bg-blue-400/80" />
                </div>

                {/* ============================================================ */}
                {/* SCREEN CONTENT — 3D HERO INTRODUCTION VIDEO                  */}
                {/* ============================================================ */}
                <div 
                  className="relative h-full w-full bg-black cursor-pointer group overflow-hidden"
                  onClick={() => setIsModalOpen(true)}
                  title="Click to view full screen with sound"
                >
                  {/* Hero Video */}
                  <video
                    src="/videos/hero-intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle Gradient Overlay for Header & Footer readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                  {/* Top Bar Header inside Screen */}
                  <div className="absolute top-3 left-4 right-4 z-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10 text-[10px] sm:text-xs text-white/90 font-mono">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      3D Hero Intro
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-[#C9A876]/20 backdrop-blur-md px-3 py-1 border border-[#C9A876]/40 text-[10px] sm:text-xs text-[#E5A853] font-mono">
                      Click to expand ⤢
                    </div>
                  </div>

                  {/* Center Play Button Overlay on Hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A876] text-black shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                      <svg className="ml-1 h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Screen Bottom Bar */}
                  <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-[9px] sm:text-[11px] text-white/70 font-mono">
                    <span>DEEP TECH SOLUTIONS</span>
                    <span>HD • 60 FPS</span>
                  </div>
                </div>
              </div>

              {/* LAPTOP HINGE & BOTTOM BASE DECK */}
              <div className="relative mx-auto h-4 sm:h-5 w-[98%] bg-gradient-to-b from-[#2A2D34] via-[#1F2126] to-[#121417] rounded-b-2xl border-t border-white/10 shadow-2xl flex justify-center items-center">
                {/* Opening Latch Recess */}
                <div className="h-1.5 w-16 sm:w-24 rounded-full bg-[#111215] border border-white/10" />
              </div>
            </motion.div>

            {/* ============================================================ */}
            {/* 3. ROTATING "WATCH SHOWREEL" BUTTON                          */}
            {/* ============================================================ */}
            <div className="absolute -bottom-8 -right-4 sm:bottom-2 sm:right-0 z-40">
              <div className="group relative flex items-center justify-center">
                
                {/* Circular White Badge Container */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-white text-black shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#C9A876]/50"
                  aria-label="Watch Showreel Video"
                >
                  {/* Rotating Circular Text SVG */}
                  <svg
                    className={`h-full w-full ${
                      shouldReduceMotion ? "" : "spin-badge-text"
                    }`}
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

                  {/* Centered Stationary Play Icon Button (Stays Upright) */}
                  <div className="absolute flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#191B1D] text-white shadow-md transition-transform duration-300 group-hover:bg-[#C9A876] group-hover:text-black">
                    <svg
                      className="ml-0.5 h-4 w-4 sm:h-5 sm:w-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Subtitle / Intro Below Mockup */}
          <motion.div
            className="mt-8 text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          >
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Helping dental clinics, restaurants, and local service businesses get found online — and turn website visitors into paying customers.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Video Modal Lightbox */}
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
