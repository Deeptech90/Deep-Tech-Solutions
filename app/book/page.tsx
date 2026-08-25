import React from 'react';
import QualificationWizard from '@/components/booking/QualificationWizard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Strategy Consultation | Deep Tech Solutions',
  description:
    'Schedule a direct 30-minute growth strategy and web architecture consultation with the principal developer. No middleman — direct access to the engineer.',
  alternates: {
    canonical: 'https://deeptechsolutions.online/book',
  },
  openGraph: {
    title: 'Book a Free Strategy Consultation | Deep Tech Solutions',
    description:
      'Schedule a 30-minute session to discuss website engineering, local SEO, and lead generation directly with the developer.',
    url: 'https://deeptechsolutions.online/book',
    siteName: 'Deep Tech Solutions',
    type: 'website',
  },
};

const TRUST_SIGNALS = [
  {
    icon: '⏱',
    title: '30 Minutes · No Obligation',
    desc: 'A focused session with a clear deliverable',
  },
  {
    icon: '👤',
    title: 'Direct Principal Access',
    desc: 'Zero middlemen — talk to the engineer building your system',
  },
  {
    icon: '🛡',
    title: 'Actionable Architectural Plan',
    desc: 'Leave with a concrete growth roadmap, not a sales pitch',
  },
] as const;

export default function BookingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Free 30-Minute Growth Strategy Consultation',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Deep Tech Solutions',
      url: 'https://deeptechsolutions.online',
    },
    description:
      'Direct 30-minute consultation with the principal developer covering website engineering, local SEO, and lead generation strategy.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollReveal />
      <Navigation />
      <main className="book-page" id="main-content">
        {/* Hero */}
        <div className="book-page__hero">
          <p className="section-label" style={{ marginBottom: '1rem' }}>
            Direct access · No account managers
          </p>
          <h1 className="book-page__title">
            Book a Free 30-Minute
            <br />
            <span className="text-gradient">Growth Strategy Session</span>
          </h1>
          <p className="book-page__subtitle">
            Discuss your website engineering, local search visibility, or lead generation
            objectives directly with the developer. Come prepared with your business URL and
            growth goals.
          </p>

          {/* Trust signals */}
          <div className="book-page__trust" role="list" aria-label="Session highlights">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal.title} className="book-page__trust-card" role="listitem">
                <span className="book-page__trust-icon" aria-hidden="true">
                  {signal.icon}
                </span>
                <div>
                  <p className="book-page__trust-title">{signal.title}</p>
                  <p className="book-page__trust-desc">{signal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qualification Wizard */}
        <div className="book-page__wizard-wrap">
          <QualificationWizard />
        </div>
      </main>
      <Footer />
    </>
  );
}

