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
