"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const servicesItems = [
  { title: "Small Business Websites", desc: "Professional sites for local businesses", href: "/small-business-web-design" },
  { title: "Web Design & Development", desc: "Custom design + full-stack development", href: "/web-design-development" },
  { title: "Freelance Web Developer", desc: "Direct developer access, no agency layers", href: "/freelance-web-developer" },
  { title: "Website Redesign", desc: "Modernize your existing website", href: "/website-redesign" },
  { title: "Lead Generation", desc: "Websites designed to generate enquiries", href: "/lead-generation-websites" },
  { title: "Local SEO", desc: "Rank for searches in your area", href: "/local-seo-web-design" },
];

const industriesItems = [
  { title: "Dental Clinics", href: "/web-design-for-dentists" },
  { title: "Restaurants & Cafés", href: "/restaurant-website-design" },
  { title: "Law Firms", href: "/law-firm-website-design" },
  { title: "Healthcare", href: "/healthcare-web-design" },
  { title: "Local Services", href: "/local-service-business-web-design" },
  { title: "India", href: "/web-designer-india" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

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
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
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
          <Link href="/" className="nav__logo" id="nav-logo">
            <div className="nav__logo-mark" aria-hidden="true">DT</div>
            Deep Tech Solutions
          </Link>

          {/* Desktop Links */}
          <ul className="nav__links" role="list">
            <li>
              <a href="/#work" id="nav-link-work">Work</a>
            </li>

            {/* Services Dropdown */}
            <li
              className="nav__dropdown-wrapper"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 py-1 text-sm font-medium transition-colors hover:text-[#C9A876] text-white/90"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                id="nav-link-services"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#C9A876]" : "text-white/60"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="nav__dropdown-menu"
                    style={{ minWidth: 340 }}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-1 p-1">
                      {servicesItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="nav__dropdown-item group flex flex-col items-start gap-0.5 rounded-lg p-2.5 transition-colors hover:bg-white/10"
                        >
                          <span className="text-sm font-semibold text-white group-hover:text-[#C9A876]">{item.title}</span>
                          <span className="text-xs text-white/60 font-normal">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Industries Dropdown */}
            <li
              className="nav__dropdown-wrapper"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 py-1 text-sm font-medium transition-colors hover:text-[#C9A876] text-white/90"
                onClick={() => setIndustriesOpen(!industriesOpen)}
                aria-expanded={industriesOpen}
                aria-haspopup="true"
                id="nav-link-industries"
              >
                Industries
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${industriesOpen ? "rotate-180 text-[#C9A876]" : "text-white/60"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    className="nav__dropdown-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-1 p-1">
                      {industriesItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIndustriesOpen(false)}
                          className="nav__dropdown-item group flex items-center rounded-lg p-2.5 transition-colors hover:bg-white/10"
                        >
                          <span className="text-sm font-semibold text-white group-hover:text-[#C9A876]">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <a href="/#pricing" id="nav-link-pricing">Pricing</a>
            </li>
            <li>
              <Link href="/blog" id="nav-link-blog">Blog</Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="btn btn-primary nav__cta"
            id="nav-cta-contact"
          >
            Get a Quote
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="nav__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            id="nav-hamburger"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
            <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
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
            <motion.a href="/#work" onClick={() => setMobileOpen(false)} variants={mobileLinkVariants}>Work</motion.a>

            {/* Mobile Services */}
            <motion.div variants={mobileLinkVariants}>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-white"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <svg className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pb-2 space-y-2">
                  {servicesItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block text-sm text-white/70 hover:text-white py-1">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Mobile Industries */}
            <motion.div variants={mobileLinkVariants}>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-white"
                aria-expanded={mobileIndustriesOpen}
              >
                Industries
                <svg className={`h-4 w-4 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileIndustriesOpen && (
                <div className="pl-4 pb-2 space-y-2">
                  {industriesItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block text-sm text-white/70 hover:text-white py-1">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.a href="/#pricing" onClick={() => setMobileOpen(false)} variants={mobileLinkVariants}>Pricing</motion.a>
            <motion.div variants={mobileLinkVariants}>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="block">Blog</Link>
            </motion.div>
            <motion.div variants={mobileLinkVariants}>
              <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)} id="nav-mobile-cta">Get a Quote</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
