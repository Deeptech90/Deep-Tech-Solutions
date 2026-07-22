"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import MagneticButton from "@/components/motion/MagneticButton";

// Splits text into individual word spans for staggered reveal
function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={shouldReduceMotion ? { opacity: 0 } : { y: "110%", opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.75,
              delay: shouldReduceMotion ? 0 : delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax on scroll — feeds into Lenis-aware rAF
  useEffect(() => {
    const bg = heroRef.current?.querySelector(".hero__bg-image") as HTMLElement;
    const handleScroll = () => {
      if (!bg || shouldReduceMotion) return;
      const scrollY = window.scrollY;
      bg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.05)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldReduceMotion]);

  const EASE = [0.16, 1, 0.3, 1] as const;

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.7,
      delay: shouldReduceMotion ? 0 : delay,
      ease: EASE,
    },
  });

  return (
    <section ref={heroRef} className="hero" id="hero" aria-label="Hero section">
      {/* Background layers */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-image" />
        <div className="hero__grid" />
        <div className="hero__bg-gradient" />
      </div>

      {/* Content */}
      <div className="hero__content">
        {/* Status badge */}
        <motion.div className="hero__badge" {...fadeIn(0.2)}>
          <span className="hero__badge-dot" />
          <span className="hero__badge-text">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline — word-by-word staggered reveal */}
        <h1 className="hero__headline" style={{ overflow: "visible" }}>
          <WordReveal text="Websites." delay={0.35} />
          {" "}
          <span className="text-gradient" style={{ display: "inline" }}>
            <WordReveal text="Lead Generation." delay={0.55} />
          </span>
          <br />
          <WordReveal text="Real Results for Local Businesses." delay={0.75} />
        </h1>

        <motion.p className="hero__subline" {...fadeIn(1.1)}>
          Helping dental clinics, restaurants, and local service businesses get
          found online — and turn website visitors into paying customers.
        </motion.p>

        <motion.div className="hero__actions" {...fadeIn(1.25)}>
          <MagneticButton>
            <a href="#work" className="btn btn-primary" id="hero-cta-work">
              See the Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#contact" className="btn btn-ghost" id="hero-cta-preview">
              Get a Free Preview
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social proof stats */}
        <motion.div className="hero__social-proof" {...fadeIn(1.4)}>
          <div className="hero__stat">
            <span className="hero__stat-value">48h</span>
            <span className="hero__stat-label">Avg. first delivery</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">100%</span>
            <span className="hero__stat-label">Direct communication</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">US/EU</span>
            <span className="hero__stat-label">Timezone overlap</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
