"use client";

import { motion, useReducedMotion } from "motion/react";
import FadeUp from "@/components/motion/FadeUp";
import MagneticButton from "@/components/motion/MagneticButton";

export default function CtaBanner() {
  return (
    <section className="cta-banner" id="contact" aria-label="Contact call to action">
      <div className="cta-banner__bg" aria-hidden="true" />
      <div className="cta-banner__inner">
        <FadeUp>
          <p className="section-label" style={{ marginBottom: 20 }}>
            Turn local search into booked appointments
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cta-banner__title">
            Ready to convert more visitors
            <br />
            into paying <span className="text-gradient">customers?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="cta-banner__desc">
            Book a free 30-minute strategy session. You&apos;ll speak directly with the
            principal developer — no sales reps, no account managers. Walk away with a
            concrete action plan for your website, local SEO, and lead acquisition system.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="cta-banner__actions">
            <MagneticButton>
              <a
                href="/book"
                className="btn btn-primary"
                id="cta-book-primary"
              >
                📅 Book Free Strategy Session
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918929490433").replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary bg-[#25D366] hover:bg-[#20bd5a] text-white border-transparent shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
                id="cta-whatsapp"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="mailto:hello@deeptechsolutions.online"
                className="btn btn-ghost"
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
                Email Us
              </a>
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
