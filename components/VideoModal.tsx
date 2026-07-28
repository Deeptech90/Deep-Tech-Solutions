"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─────────────────────────────────────────────────────────────────────────────
// SHOWREEL VIDEO CONFIG
// ─────────────────────────────────────────────────────────────────────────────
//
// When you have a real showreel video ready, update ONE value below:
//
//   • Self-hosted MP4  → set SHOWREEL_SRC to "/videos/showreel.mp4"
//                        and set SHOWREEL_TYPE to "video/mp4"
//
//   • YouTube embed    → set SHOWREEL_SRC to the YouTube nocookie embed URL
//                        e.g. "https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID?autoplay=1"
//                        and set SHOWREEL_TYPE to "youtube"
//
// Leave SHOWREEL_SRC as null to show the "Showreel coming soon" placeholder screen.
//
const SHOWREEL_SRC: string | null = "/videos/hero-intro.mp4"; // ← Updated with user video
const SHOWREEL_TYPE: "video/mp4" | "youtube" = "video/mp4";

// ─────────────────────────────────────────────────────────────────────────────

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoTitle = "Deep Tech Solutions — Showreel",
}: VideoModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop overlay — click outside to close */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#141619] shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label={videoTitle}
          >
            {/* Modal Header with Browser Address Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3 bg-[#191B1D]">
              <div className="flex items-center gap-3">
                {/* Browser dots */}
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </div>
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center gap-2 rounded-md bg-[#0D0F12] px-4 py-1 border border-white/10 text-xs font-mono text-emerald-400">
                <svg className="h-3.5 w-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-white font-semibold">https://deeptechsolutions.online</span>
              </div>

              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-white/15 hover:text-white"
                aria-label="Close showreel modal"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ── VIDEO CONTENT AREA ──────────────────────────────────────────── */}
            <div className="relative aspect-video w-full bg-black overflow-hidden">
              {SHOWREEL_SRC === null ? (
                /* ── PLACEHOLDER: displayed until a real showreel video exists ── */
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-br from-[#0B132B] via-[#111418] to-[#0a0a0f] px-8 text-center">
                  {/* Animated camera/film icon */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#C9A876]/30 bg-[#1A1D22]">
                    <svg
                      className="h-10 w-10 text-[#C9A876]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                    {/* Pulse ring */}
                    <span className="absolute inset-0 rounded-full border border-[#C9A876]/20 animate-ping" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-white">
                      Showreel Coming Soon
                    </h4>
                    <p className="max-w-sm text-sm text-slate-400 leading-relaxed">
                      We&apos;re putting together a reel of our best web projects — local business websites, live web apps, and lead-gen campaigns. Check back shortly.
                    </p>
                  </div>

                  {/* Live project links as temporary stand-in */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                    <a
                      href="https://naamakaran.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-[#C9A876]/40 bg-[#C9A876]/10 px-5 py-2.5 text-sm font-medium text-[#E5A853] transition-all hover:bg-[#C9A876]/20 hover:border-[#C9A876]/70"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      View Naamakaran.com
                    </a>
                    <a
                      href="https://uniquebusinessname.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:border-white/30"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      View UniqueBusinessName.com
                    </a>
                  </div>
                </div>
              ) : SHOWREEL_TYPE === "youtube" ? (
                /* ── YOUTUBE EMBED MODE ─────────────────────────────────────── */
                <iframe
                  className="h-full w-full border-0"
                  src={SHOWREEL_SRC}
                  title={videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* ── SELF-HOSTED VIDEO MODE ─────────────────────────────────── */
                <video
                  className="h-full w-full object-cover"
                  src={SHOWREEL_SRC}
                  autoPlay
                  controls
                  playsInline
                  title={videoTitle}
                >
                  <source src={SHOWREEL_SRC} type={SHOWREEL_TYPE} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            {/* ── END VIDEO CONTENT AREA ──────────────────────────────────────── */}

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-3 bg-[#111214] text-xs text-white/50 border-t border-white/5 font-mono">
              <span className="text-[#E5A853] font-medium">https://deeptechsolutions.online</span>
              <span>Press ESC or click outside to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
