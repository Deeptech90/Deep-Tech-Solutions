"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Note: metadata can't be exported from a "use client" component.
// Using a wrapper approach — see /app/contact/layout.tsx for metadata.

const businessTypes = [
  "Dental / Healthcare",
  "Restaurant / Café",
  "Law Firm",
  "Local Service (Plumber, Electrician, etc.)",
  "Retail / E-commerce",
  "Consultant / Coach",
  "Startup",
  "Other",
];

const budgetRanges = [
  "Under $200 / ₹15,000",
  "$200–$400 / ₹15,000–₹35,000",
  "$400–$700 / ₹35,000–₹60,000",
  "$700–$1,500 / ₹60,000–₹1,25,000",
  "$1,500+ / ₹1,25,000+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP (within 2 weeks)",
  "1 month",
  "1–3 months",
  "Flexible",
];

interface FormState {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  currentWebsite: string;
  requirements: string;
  budget: string;
  timeline: string;
  _honeypot: string;
}

const initialState: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  businessType: "",
  currentWebsite: "",
  requirements: "",
  budget: "",
  timeline: "",
  _honeypot: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email us directly.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    color: "var(--color-text)",
    padding: "12px 16px",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-body)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.82rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    color: "var(--color-text-2)",
    marginBottom: 6,
  };

  return (
    <>
      <Navigation />
      <main
        id="main-content"
        style={{
          minHeight: "100dvh",
          background: "var(--color-bg)",
          color: "var(--color-text)",
          paddingTop: 96,
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Breadcrumb */}
        <div className="container" style={{ paddingTop: 24, paddingBottom: 0 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--color-text-3)" }}>
            <Link href="/" style={{ color: "var(--color-text-3)", textDecoration: "none" }}>Home</Link>
            {" / "}
            <span style={{ color: "var(--color-accent)" }}>Contact</span>
          </nav>
        </div>

        <section
          className="section"
          aria-label="Contact and enquiry"
          style={{ paddingTop: "clamp(40px, 5vw, 64px)" }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "clamp(40px, 6vw, 80px)",
                maxWidth: 1100,
                margin: "0 auto",
              }}
              className="contact-grid"
            >
              {/* ── LEFT: Info ─────────────────────────────────── */}
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    marginBottom: 16,
                  }}
                >
                  Get in Touch
                </p>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                    marginBottom: 20,
                  }}
                >
                  Let&apos;s talk about your website
                </h1>
                <p
                  style={{
                    color: "var(--color-text-2)",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    marginBottom: 36,
                    maxWidth: 480,
                  }}
                >
                  Fill in the form and I&apos;ll be in touch within 24 hours with a
                  clear response — not a generic sales pitch. No obligation.
                </p>

                {/* Contact options */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                  {[
                    {
                      icon: "✉️",
                      label: "Email",
                      value: "hello@deeptechsolutions.online",
                      href: "mailto:hello@deeptechsolutions.online",
                      id: "contact-email-link",
                    },
                    {
                      icon: "💬",
                      label: "WhatsApp",
                      value: "Chat directly on WhatsApp",
                      href: `https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918929490433").replace(/[^0-9]/g, "")}?text=Hi%20Deepak%2C%20I%27d%20like%20to%20discuss%20a%20website%20project`,
                      id: "contact-whatsapp-link",
                      external: true,
                    },
                    {
                      icon: "📅",
                      label: "Book a call",
                      value: "Free 30-min consultation via Cal.com",
                      href: "/book",
                      id: "contact-book-link",
                    },
                  ].map((opt) => (
                    <a
                      key={opt.id}
                      id={opt.id}
                      href={opt.href}
                      {...(opt.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "16px 20px",
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)",
                        textDecoration: "none",
                        color: "var(--color-text)",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
                        (e.currentTarget as HTMLElement).style.background = "var(--color-surface-2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                        (e.currentTarget as HTMLElement).style.background = "var(--color-surface)";
                      }}
                    >
                      <span style={{ fontSize: "1.4rem" }} aria-hidden="true">{opt.icon}</span>
                      <div>
                        <p style={{ fontSize: "0.75rem", color: "var(--color-text-3)", marginBottom: 2, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          {opt.label}
                        </p>
                        <p style={{ fontSize: "0.9rem", color: "var(--color-text-2)" }}>{opt.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Trust points */}
                <div
                  style={{
                    padding: "20px",
                    background: "rgba(201,168,118,0.06)",
                    border: "1px solid rgba(201,168,118,0.15)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-accent)", marginBottom: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    What to expect
                  </p>
                  {[
                    "Response within 24 hours",
                    "No sales pitch — just honest advice",
                    "You speak directly with the developer",
                    "Free consultation, no obligation",
                  ].map((point) => (
                    <div key={point} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ color: "var(--color-accent)", fontSize: "0.9rem" }}>✓</span>
                      <span style={{ fontSize: "0.88rem", color: "var(--color-text-2)" }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT: Form ─────────────────────────────────── */}
              <div>
                {status === "success" ? (
                  <div
                    style={{
                      padding: "clamp(32px, 4vw, 48px)",
                      background: "rgba(34, 197, 94, 0.08)",
                      border: "1px solid rgba(34, 197, 94, 0.25)",
                      borderRadius: "var(--radius-xl)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎉</div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>
                      Enquiry received!
                    </h2>
                    <p style={{ color: "var(--color-text-2)", lineHeight: 1.7, marginBottom: 24 }}>
                      Thank you for reaching out. I&apos;ll review your project details and
                      get back to you within 24 hours with a clear, personalised response.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn btn-ghost"
                      style={{ margin: "0 auto" }}
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Website enquiry form"
                    style={{
                      padding: "clamp(24px, 4vw, 40px)",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-xl)",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        marginBottom: 24,
                      }}
                    >
                      Tell me about your project
                    </h2>

                    {/* Honeypot — hidden from real users */}
                    <input
                      type="text"
                      name="_honeypot"
                      value={form._honeypot}
                      onChange={handleChange}
                      style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
                      tabIndex={-1}
                      aria-hidden="true"
                      autoComplete="off"
                    />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }} className="form-grid">
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" style={labelStyle}>
                          Your name <span aria-hidden="true" style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          style={inputStyle}
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label htmlFor="contact-business" style={labelStyle}>
                          Business name
                        </label>
                        <input
                          id="contact-business"
                          type="text"
                          name="businessName"
                          autoComplete="organization"
                          value={form.businessName}
                          onChange={handleChange}
                          placeholder="Acme Dental"
                          style={inputStyle}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" style={labelStyle}>
                          Email address <span aria-hidden="true" style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@acmedental.com"
                          style={inputStyle}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="contact-phone" style={labelStyle}>
                          Phone / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          style={inputStyle}
                        />
                      </div>

                      {/* Business Type */}
                      <div>
                        <label htmlFor="contact-business-type" style={labelStyle}>
                          Business type
                        </label>
                        <select
                          id="contact-business-type"
                          name="businessType"
                          value={form.businessType}
                          onChange={handleChange}
                          style={{ ...inputStyle, cursor: "pointer" }}
                        >
                          <option value="">Select one...</option>
                          {businessTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      {/* Current Website */}
                      <div>
                        <label htmlFor="contact-website" style={labelStyle}>
                          Current website (if any)
                        </label>
                        <input
                          id="contact-website"
                          type="url"
                          name="currentWebsite"
                          value={form.currentWebsite}
                          onChange={handleChange}
                          placeholder="https://example.com"
                          style={inputStyle}
                        />
                      </div>

                      {/* Budget */}
                      <div>
                        <label htmlFor="contact-budget" style={labelStyle}>
                          Approximate budget
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          style={{ ...inputStyle, cursor: "pointer" }}
                        >
                          <option value="">Select a range...</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      {/* Timeline */}
                      <div>
                        <label htmlFor="contact-timeline" style={labelStyle}>
                          Timeline
                        </label>
                        <select
                          id="contact-timeline"
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          style={{ ...inputStyle, cursor: "pointer" }}
                        >
                          <option value="">Select timeline...</option>
                          {timelineOptions.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      {/* Requirements — full width */}
                      <div style={{ gridColumn: "1 / -1" }}>
                        <label htmlFor="contact-requirements" style={labelStyle}>
                          What do you need?
                        </label>
                        <textarea
                          id="contact-requirements"
                          name="requirements"
                          rows={4}
                          value={form.requirements}
                          onChange={handleChange}
                          placeholder="Tell me about your business, what you need, and any specific goals..."
                          style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                        />
                      </div>
                    </div>

                    {/* Error message */}
                    {status === "error" && errorMsg && (
                      <p
                        role="alert"
                        style={{
                          color: "#ef4444",
                          fontSize: "0.88rem",
                          marginTop: 16,
                          padding: "10px 14px",
                          background: "rgba(239,68,68,0.08)",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid rgba(239,68,68,0.2)",
                        }}
                      >
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="contact-submit-btn"
                      disabled={status === "submitting"}
                      style={{ width: "100%", marginTop: 20, justifyContent: "center" }}
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <circle cx="12" cy="12" r="10" strokeOpacity={0.3} />
                            <path d="M12 2a10 10 0 0 1 10 10" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Enquiry →"
                      )}
                    </button>

                    <p style={{ fontSize: "0.78rem", color: "var(--color-text-3)", marginTop: 12, textAlign: "center" }}>
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Privacy Policy</Link>.
                      We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @media (min-width: 768px) {
            .contact-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 640px) {
            .form-grid { grid-template-columns: 1fr !important; }
          }
          input:focus, textarea:focus, select:focus {
            border-color: var(--color-accent) !important;
            box-shadow: 0 0 0 3px rgba(201,168,118,0.15);
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
