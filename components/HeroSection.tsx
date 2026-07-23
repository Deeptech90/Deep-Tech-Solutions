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
                        <span className="text-white drop-shadow-sm">Recent </span>
                        <span className="text-[#E5A853] drop-shadow-md">Work</span>
                      </h2>
                      <p className="text-[10px] sm:text-xs text-slate-400 tracking-wider uppercase font-mono mt-1">
                        Web Dev & Lead Generation • Live Projects
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
                    
                    {/* CARD 1 (LEFT) — Naamakaran — Rotated -8deg */}
                    <motion.div
                      variants={cardVariantsLeft}
                      className="group relative rounded-xl border border-white/15 bg-[#161B26]/90 p-2 sm:p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:z-30 hover:scale-105 hover:border-amber-400/40"
                      style={{ zIndex: 10 }}
                    >
                      {/* Category Badge */}
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="inline-block rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] sm:text-[11px] font-mono text-white/70">
                          Live ✦
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </div>

                      {/* Project Visual — Naamakaran branding */}
                      {/*
                        PLACEHOLDER VISUAL: Ideally swap this SVG for a real
                        screenshot of naamakaran.com (e.g. <Image src="/naamakaran-preview.png" .../>).
                        The screenshot file should be placed in /public/naamakaran-preview.png.
                      */}
                      <a
                        href="https://naamakaran.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        tabIndex={-1}
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-950/60 via-[#1a0a00] to-slate-900 border border-orange-400/20">
                          <svg className="h-full w-full" viewBox="0 0 200 150" fill="none">
                            <rect width="200" height="150" fill="#1A0A00" />
                            {/* Om symbol styled backdrop */}
                            <circle cx="100" cy="65" r="44" fill="#2D1200" stroke="#C9A876" strokeWidth="1.5" strokeOpacity="0.4" />
                            <text x="100" y="78" textAnchor="middle" fontSize="36" fill="#E5A853" fontFamily="serif" opacity="0.9">ॐ</text>
                            {/* Site name */}
                            <rect x="22" y="120" width="156" height="12" rx="4" fill="#2D1200" />
                            <text x="100" y="130" textAnchor="middle" fontSize="8" fill="#C9A876" fontFamily="monospace" letterSpacing="1">NAAMAKARAN.COM</text>
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>
                      </a>

                      {/* Card Bottom Label */}
                      <div className="mt-2">
                        <h4 className="text-[10px] sm:text-xs font-semibold text-white truncate">
                          Naamakaran
                        </h4>
                        <p className="text-[8px] sm:text-[10px] text-orange-300/80 truncate">
                          Multilingual Web App
                        </p>
                      </div>
                    </motion.div>

                    {/* CARD 2 (MIDDLE / TOP LAYER) — UniqueBusinessName.com — Rotated 0deg (Highest Z-Index) */}
                    <motion.div
                      variants={cardVariantsCenter}
                      className="group relative rounded-xl border border-amber-400/30 bg-[#1C2333]/95 p-2 sm:p-3.5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:z-30 hover:scale-105 hover:border-amber-400"
                      style={{ zIndex: 20 }}
                    >
                      {/* Category Badge */}
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="inline-block rounded-md bg-[#C9A876]/20 px-2 py-0.5 text-[9px] sm:text-[11px] font-mono text-[#E5A853] font-medium">
                          Live ✦
                        </span>
                        <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                      </div>

                      {/* Project Visual — UniqueBusinessName branding */}
                      {/*
                        PLACEHOLDER VISUAL: Ideally swap this SVG for a real
                        screenshot of uniquebusinessname.com (e.g. <Image src="/uniquebiz-preview.png" .../>).
                        The screenshot file should be placed in /public/uniquebiz-preview.png.
                      */}
                      <a
                        href="https://uniquebusinessname.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        tabIndex={-1}
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-amber-950/40 via-slate-900 to-indigo-950 border border-amber-400/20">
                          <svg className="h-full w-full" viewBox="0 0 200 150" fill="none">
                            <rect width="200" height="150" fill="#0B1020" />
                            {/* Anti-gravity wheel concept */}
                            <circle cx="100" cy="70" r="40" stroke="#E5A853" strokeWidth="2" fill="none" strokeDasharray="6 3" />
                            <circle cx="100" cy="70" r="28" stroke="#C9A876" strokeWidth="1.5" fill="#1C1500" strokeOpacity="0.7" />
                            <circle cx="100" cy="70" r="8" fill="#F59E0B" />
                            {/* Spin lines */}
                            <line x1="60" y1="70" x2="80" y2="70" stroke="#E5A853" strokeWidth="1.5" strokeOpacity="0.6" />
                            <line x1="120" y1="70" x2="140" y2="70" stroke="#E5A853" strokeWidth="1.5" strokeOpacity="0.6" />
                            <text x="100" y="128" textAnchor="middle" fontSize="7" fill="#C9A876" fontFamily="monospace" letterSpacing="0.5">UNIQUEBUSINESSNAME.COM</text>
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        </div>
                      </a>

                      {/* Card Bottom Label */}
                      <div className="mt-2">
                        <h4 className="text-[11px] sm:text-sm font-bold text-white truncate">
                          UniqueBusinessName
                        </h4>
                        <p className="text-[9px] sm:text-[11px] text-amber-300/80 truncate">
                          Interactive Web Tool
                        </p>
                      </div>
                    </motion.div>

                    {/* CARD 3 (RIGHT) — Coming Soon / Local Business Client Slot — Rotated +8deg */}
                    {/*
                      PLACEHOLDER CARD: This slot is reserved for a future dental/restaurant
                      or local service business client project.
                      When ready, replace the SVG below with:
                        <Image src="/client-project-preview.png" alt="[Client Name]" fill className="object-cover" />
                      and update the h4 and category tag accordingly.
                    */}
                    <motion.div
                      variants={cardVariantsRight}
                      className="group relative rounded-xl border border-white/10 bg-[#161B26]/80 p-2 sm:p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:z-30 hover:scale-105 hover:border-white/25"
                      style={{ zIndex: 10 }}
                    >
                      {/* Category Badge */}
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="inline-block rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] sm:text-[11px] font-mono text-white/50">
                          Q4 2026
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      </div>

                      {/* Coming Soon Visual */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#111418] border border-white/10 flex items-center justify-center">
                        <svg className="h-full w-full" viewBox="0 0 200 150" fill="none">
                          <rect width="200" height="150" fill="#111418" />
                          {/* Generic local biz storefront icon */}
                          <rect x="55" y="60" width="90" height="55" rx="4" stroke="#444" strokeWidth="1.5" fill="#1A1D22" />
                          <rect x="70" y="80" width="24" height="35" rx="2" fill="#222629" stroke="#3D3F41" strokeWidth="1" />
                          <rect x="106" y="85" width="26" height="18" rx="2" fill="#222629" stroke="#3D3F41" strokeWidth="1" />
                          <rect x="55" y="50" width="90" height="14" rx="3" fill="#1E2022" stroke="#3D3F41" strokeWidth="1" />
                          <path d="M 55 60 L 100 38 L 145 60" stroke="#444" strokeWidth="1.5" fill="none" />
                          <text x="100" y="130" textAnchor="middle" fontSize="7.5" fill="#555" fontFamily="monospace" letterSpacing="1">COMING SOON</text>
                        </svg>
                        {/* Overlay dashed border effect */}
                        <div className="absolute inset-0 rounded-lg border border-dashed border-white/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Card Bottom Label */}
                      <div className="mt-2">
                        <h4 className="text-[10px] sm:text-xs font-semibold text-white/60 truncate">
                          Local Business Client
                        </h4>
                        <p className="text-[8px] sm:text-[10px] text-slate-500 truncate">
                          Lead-Gen Website
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
