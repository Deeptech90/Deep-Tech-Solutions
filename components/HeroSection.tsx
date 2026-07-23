"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import VideoModal from "@/components/VideoModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Framer Motion spring transition configs
  const EASE = [0.16, 1, 0.3, 1] as const;

  // Stagger variants for the project showcase cards inside the screen
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -30, y: 20, rotate: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -8,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  const cardVariantsCenter = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 30, y: 20, rotate: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 8,
      transition: { duration: 0.8, ease: EASE },
    },
  };

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
                {/* SCREEN CONTENT — PROJECT SHOWCASE CARDS                     */}
                {/* ============================================================ */}
                <div className="relative h-full w-full bg-gradient-to-br from-[#0B132B] via-[#0D1B3E] to-[#070D1F] p-4 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Screen Ambient Mesh */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,168,118,0.15),transparent_50%)]" />
                  
                  {/* Top Header inside Screen */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      {/* Category Headline in Italic Serif Font mixing White + Warm Gold */}
                      <h2 className="font-serif italic text-xl sm:text-3xl md:text-4xl tracking-wide font-normal">
                        <span className="text-white drop-shadow-sm">Selected </span>
                        <span className="text-[#E5A853] drop-shadow-md">Projects</span>
                      </h2>
                      <p className="text-[10px] sm:text-xs text-slate-400 tracking-wider uppercase font-mono mt-1">
                        High-Impact Digital Experiences • 2026
                      </p>
                    </div>

                    {/* Live status badge inside screen */}
                    <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md px-3 py-1 border border-white/10 text-[11px] text-white/80 font-mono">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Active Portfolio
                    </div>
                  </div>

                  {/* Faint Dotted/Curved Connector Lines SVG */}
                  <svg
                    className="absolute inset-0 h-full w-full pointer-events-none stroke-white/15"
                    aria-hidden="true"
                  >
                    <path
                      d="M 150 140 Q 350 80 500 160 T 700 150"
                      fill="none"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 220 240 Q 420 300 620 230"
                      fill="none"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      className="stroke-amber-400/20"
                    />
                  </svg>

                  {/* 3 OVERLAPPING PROJECT CARDS FANNING OUT */}
                  <motion.div
                    className="relative z-20 grid grid-cols-3 gap-2 sm:gap-6 items-center justify-center mt-4 sm:mt-6 px-2 sm:px-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    
                    {/* CARD 1 (LEFT) — Rotated -8deg */}
                    <motion.div
                      variants={cardVariantsLeft}
                      className="group relative rounded-xl border border-white/15 bg-[#161B26]/90 p-2 sm:p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:z-30 hover:scale-105 hover:border-amber-400/40"
                      style={{ zIndex: 10 }}
                    >
                      {/* Date Badge */}
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="inline-block rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] sm:text-[11px] font-mono text-white/70">
                          Q1 2026
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      </div>

                      {/* Photo / Visual Placeholder */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-900/60 to-slate-900 border border-white/10">
                        {/* PLACEHOLDER IMAGE: Replace with actual project screenshot */}
                        <svg className="h-full w-full p-3" viewBox="0 0 200 150" fill="none">
                          <rect width="200" height="150" fill="#0F172A" />
                          <circle cx="100" cy="60" r="30" fill="url(#grad1)" />
                          <rect x="30" y="105" width="140" height="8" rx="4" fill="#334155" />
                          <rect x="50" y="120" width="100" height="6" rx="3" fill="#C9A876" />
                          <defs>
                            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="100%" stopColor="#9333EA" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      </div>

                      {/* Card Bottom Label */}
                      <div className="mt-2">
                        <h4 className="text-[10px] sm:text-xs font-semibold text-white truncate">
                          CyberSphere AI
                        </h4>
                        <p className="text-[8px] sm:text-[10px] text-slate-400 truncate">
                          SaaS Analytics Platform
                        </p>
                      </div>
                    </motion.div>

                    {/* CARD 2 (MIDDLE / TOP LAYER) — Rotated 0deg (Highest Z-Index) */}
                    <motion.div
                      variants={cardVariantsCenter}
                      className="group relative rounded-xl border border-amber-400/30 bg-[#1C2333]/95 p-2 sm:p-3.5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:z-30 hover:scale-105 hover:border-amber-400"
                      style={{ zIndex: 20 }}
                    >
                      {/* Date Badge */}
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="inline-block rounded-md bg-[#C9A876]/20 px-2 py-0.5 text-[9px] sm:text-[11px] font-mono text-[#E5A853] font-medium">
                          Q2 2026
                        </span>
                        <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                      </div>

                      {/* Photo / Visual Placeholder */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-amber-950/40 via-slate-900 to-indigo-950 border border-amber-400/20">
                        {/* PLACEHOLDER IMAGE: Replace with actual project screenshot */}
                        <svg className="h-full w-full p-3" viewBox="0 0 200 150" fill="none">
                          <rect width="200" height="150" fill="#0B132B" />
                          <path d="M20 120 L70 60 L110 90 L180 30" stroke="#E5A853" strokeWidth="4" fill="none" />
                          <circle cx="180" cy="30" r="6" fill="#F59E0B" />
                          <rect x="20" y="20" width="80" height="12" rx="3" fill="#1E293B" />
                          <rect x="20" y="38" width="50" height="8" rx="2" fill="#334155" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      </div>

                      {/* Card Bottom Label */}
                      <div className="mt-2">
                        <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">
                          Apex Quantum
                        </h4>
                        <p className="text-[9px] sm:text-[11px] text-amber-300/80 truncate">
                          Fintech & Wealth System
                        </p>
                      </div>
                    </motion.div>

                    {/* CARD 3 (RIGHT) — Rotated +8deg */}
                    <motion.div
                      variants={cardVariantsRight}
                      className="group relative rounded-xl border border-white/15 bg-[#161B26]/90 p-2 sm:p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:z-30 hover:scale-105 hover:border-amber-400/40"
                      style={{ zIndex: 10 }}
                    >
                      {/* Date Badge */}
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="inline-block rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] sm:text-[11px] font-mono text-white/70">
                          Q3 2026
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </div>

                      {/* Photo / Visual Placeholder */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-white/10">
                        {/* PLACEHOLDER IMAGE: Replace with actual project screenshot */}
                        <svg className="h-full w-full p-3" viewBox="0 0 200 150" fill="none">
                          <rect width="200" height="150" fill="#064E3B" fillOpacity="0.3" />
                          <rect x="30" y="30" width="140" height="90" rx="8" stroke="#10B981" strokeWidth="2" fill="#022C22" />
                          <circle cx="100" cy="75" r="24" stroke="#6EE7B7" strokeWidth="2" fill="none" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      </div>

                      {/* Card Bottom Label */}
                      <div className="mt-2">
                        <h4 className="text-[10px] sm:text-xs font-semibold text-white truncate">
                          Aura Luxury
                        </h4>
                        <p className="text-[8px] sm:text-[10px] text-slate-400 truncate">
                          E-Commerce Brand Experience
                        </p>
                      </div>
                    </motion.div>

                  </motion.div>

                  {/* Screen Footer Status Line */}
                  <div className="relative z-10 mt-2 flex items-center justify-between text-[9px] sm:text-[11px] text-white/40 font-mono border-t border-white/10 pt-2">
                    <span>STATUS: ALL SYSTEMS OPTIMAL</span>
                    <span>100% RESPONSIVE</span>
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
              We craft high-performance digital products, bespoke web applications, and immersive brand experiences for market leaders.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Video Modal Lightbox */}
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
