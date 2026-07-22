"use client";

import { motion, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";
import MagneticButton from "@/components/motion/MagneticButton";

// ─── CONFIGURATION ───────────────────────────────────────────────────────────
// Replace CALENDLY_URL with your real scheduling link before going live.
// Example: "https://calendly.com/yourname/consult"
const CALENDLY_URL = "https://calendly.com/YOUR_USERNAME/consult";
// ─────────────────────────────────────────────────────────────────────────────

export default function CtaBanner() {
  return (
    <section className="cta-banner" id="contact" aria-label="Contact call to action">
      <div className="cta-banner__bg" aria-hidden="true" />
      <div className="cta-banner__inner">
        <FadeUp>
          <p className="section-label" style={{ marginBottom: 20 }}>
            Let&apos;s work together
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cta-banner__title">
            Ready to get more customers
            <br />
            from your <span className="text-gradient">website?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="cta-banner__desc">
            Send me a brief, or just say hello. I&apos;ll reply within one
            business day with honest feedback on whether I&apos;m the right fit
            — and a free preview if your project is a good match.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="cta-banner__actions">
            <MagneticButton>
              <a
                href="mailto:hello@deeptechsolutions.digital"
                className="btn btn-primary"
                id="cta-email"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
                hello@deeptechsolutions.digital
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                id="cta-calendly"
              >
                Book a Free Consultation
              </a>
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
