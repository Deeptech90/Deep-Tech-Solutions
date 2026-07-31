"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile when menu is open & close menu on desktop resize
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  const expertiseItems = [
    { title: "Web Development", desc: "Custom Next.js & React Applications", href: "#expertise" },
    { title: "AI Integration", desc: "LLM Agents & Automated Workflows", href: "#expertise" },
    { title: "Brand Systems", desc: "Identity, Design Systems & Motion", href: "#expertise" },
    { title: "Mobile Experience", desc: "Responsive Web & Cross-Platform Apps", href: "#expertise" },
  ];

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -20,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.25, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.35,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <>
      <motion.nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
        style={{ viewTransitionName: "site-header" } as React.CSSProperties}
      >
        <div className="nav__inner">
          {/* Logo */}
          <a href="#" className="nav__logo" id="nav-logo">
            <div className="nav__logo-mark" aria-hidden="true">
              DT
            </div>
            Deep Tech Solutions
          </a>

          {/* Desktop Links */}
          <ul className="nav__links" role="list">
            <li>
              <a href="#work" id="nav-link-work">
                Work
              </a>
            </li>

            {/* Expertise Link with Dropdown Chevron Indicator */}
            <li
              className="nav__dropdown-wrapper"
              onMouseEnter={() => setExpertiseOpen(true)}
              onMouseLeave={() => setExpertiseOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 py-1 text-sm font-medium transition-colors hover:text-[#C9A876] text-white/90"
                onClick={() => setExpertiseOpen(!expertiseOpen)}
                aria-expanded={expertiseOpen}
                aria-haspopup="true"
                id="nav-link-expertise"
              >
                Expertise
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    expertiseOpen ? "rotate-180 text-[#C9A876]" : "text-white/60"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {expertiseOpen && (
                  <motion.div
                    className="nav__dropdown-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-1 p-1">
                      {expertiseItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setExpertiseOpen(false)}
                          className="nav__dropdown-item group flex flex-col items-start gap-0.5 rounded-lg p-2.5 transition-colors hover:bg-white/10"
                        >
                          <span className="text-sm font-semibold text-white group-hover:text-[#C9A876]">
                            {item.title}
                          </span>
                          <span className="text-xs text-white/60 font-normal">
                            {item.desc}
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <a href="#services" id="nav-link-services">
                Services
              </a>
            </li>
            <li>
              <a href="#about" id="nav-link-about">
                About
              </a>
            </li>
            <li>
              <a href="#contact" id="nav-link-contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="btn btn-primary nav__cta"
            id="nav-cta-contact"
          >
            Get In Touch
          </a>

          {/* Mobile Hamburger */}
          <button
            className="nav__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            id="nav-hamburger"
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav__mobile open"
            id="nav-mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <motion.a
              href="#work"
              onClick={() => setMobileOpen(false)}
              variants={mobileLinkVariants}
            >
              Work
            </motion.a>
            <motion.a
              href="#expertise"
              onClick={() => setMobileOpen(false)}
              variants={mobileLinkVariants}
            >
              Expertise
            </motion.a>
            <motion.a
              href="#services"
              onClick={() => setMobileOpen(false)}
              variants={mobileLinkVariants}
            >
              Services
            </motion.a>
            <motion.a
              href="#about"
              onClick={() => setMobileOpen(false)}
              variants={mobileLinkVariants}
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              variants={mobileLinkVariants}
            >
              Contact
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              onClick={() => setMobileOpen(false)}
              id="nav-mobile-cta"
              variants={mobileLinkVariants}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
