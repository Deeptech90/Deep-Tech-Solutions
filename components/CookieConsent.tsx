"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "dts_cookie_consent";

type ConsentValue = "accepted" | "declined" | null;

function loadGA(measurementId: string) {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga-script")) return; // already loaded

  const script1 = document.createElement("script");
  script1.id = "ga-script";
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.id = "ga-inline";
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { anonymize_ip: true });
  `;
  document.head.appendChild(script2);
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [visible, setVisible] = useState(false);

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue;
    if (stored) {
      setConsent(stored);
      if (stored === "accepted" && measurementId) {
        loadGA(measurementId);
      }
    } else {
      // Slight delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, [measurementId]);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
    if (measurementId) loadGA(measurementId);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  };

  if (!visible || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9998,
        background: "rgba(26, 28, 30, 0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid var(--color-border)",
        padding: "20px clamp(20px, 5vw, 60px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        flexWrap: "wrap",
        boxShadow: "0 -8px 40px rgba(0,0,0,0.5)",
        animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 280 }}>
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--color-text)",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          <span style={{ fontWeight: 600 }}>We use cookies.</span>{" "}
          Essential cookies keep the site working. We&apos;d also like to use
          analytics cookies (Google Analytics) to understand how visitors use
          this site — but only with your consent.{" "}
          <Link
            href="/privacy"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              fontSize: "0.85rem",
            }}
          >
            Privacy Policy
          </Link>
        </p>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
        <button
          onClick={handleDecline}
          id="cookie-decline"
          style={{
            padding: "9px 20px",
            borderRadius: 8,
            border: "1px solid var(--color-border)",
            background: "transparent",
            color: "var(--color-text-2)",
            fontSize: "0.85rem",
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "var(--font-body)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border-2)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-2)";
          }}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          id="cookie-accept"
          style={{
            padding: "9px 20px",
            borderRadius: 8,
            border: "1px solid var(--color-accent)",
            background: "var(--color-accent)",
            color: "#191B1D",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "var(--font-body)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--color-accent-2)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--color-accent)";
          }}
        >
          Accept analytics
        </button>
      </div>
    </div>
  );
}
