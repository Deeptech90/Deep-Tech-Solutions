"use client";

import FadeUp from "@/components/motion/FadeUp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Website Design & Development",
    "Lead Generation",
    "Local SEO",
    "Ongoing Maintenance",
    "Booking Integration",
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <FadeUp>
          <div className="footer__top">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="nav__logo-mark" aria-hidden="true">
                  DT
                </div>
                Deep Tech Solutions
              </div>
              <p className="footer__tagline">
                Helping dental clinics, restaurants, and local service businesses
                build their online presence — and turn it into real revenue.
              </p>
              <div className="footer__social" aria-label="Social media links">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/deeptechsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Facebook Page"
                  id="footer-facebook"
                  title="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/deeptechsolutions90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram Profile"
                  id="footer-instagram"
                  title="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="LinkedIn (coming soon)"
                  id="footer-linkedin"
                  title="LinkedIn"
                >
                  in
                </a>
                {/* Twitter/X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Twitter/X (coming soon)"
                  id="footer-twitter"
                  title="Twitter/X"
                >
                  𝕏
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="GitHub (coming soon)"
                  id="footer-github"
                  title="GitHub"
                >
                  ⌥
                </a>
              </div>
            </div>

            {/* Nav links */}
            <div>
              <p className="footer__col-title">Navigation</p>
              <ul className="footer__links" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="footer__col-title">Services</p>
              <ul className="footer__links" role="list">
                {services.map((s) => (
                  <li key={s}>
                    <a href="#services">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="footer__col-title">Get in touch</p>
              <div
                className="footer__contact-item"
                title="Email us"
              >
                <span className="footer__contact-icon" aria-hidden="true">
                  ✉
                </span>
                <a
                  href="mailto:hello@deeptechsolutions.digital"
                  id="footer-email"
                >
                  hello@deeptechsolutions.digital
                </a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  🕐
                </span>
                <span>IST (UTC+5:30) · US/EU hours covered</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  ⚡
                </span>
                <span>Typically reply within 24h</span>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} Deep Tech Solutions. All rights reserved.
          </p>
          <nav className="footer__legal" aria-label="Legal links">
            <a href="#" id="footer-privacy">
              Privacy Policy
            </a>
            <a href="#" id="footer-terms">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
