import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#191B1D",
};

const SITE_URL = "https://www.deeptechsolutions.online";


export const metadata: Metadata = {
  applicationName: "Deep Tech Solutions",
  title: {
    default: "Deep Tech Solutions | Web Design & Lead Generation for Local Businesses",
    template: "%s | Deep Tech Solutions",
  },
  description:
    "Premium web design, lead generation, and local SEO for dental clinics, restaurants, and local service businesses. Get found online and convert more visitors into customers.",
  keywords: [
    "web design",
    "lead generation",
    "local SEO",
    "dental website design",
    "restaurant website",
    "local business website",
    "freelance web developer",
    "Google Business Profile",
    "local search optimisation",
    "booking system integration",
    "web developer India",
    "affordable web design",
    "conversion optimisation",
  ],
  authors: [{ name: "Deepak Kumar", url: SITE_URL }],
  creator: "Deepak Kumar",
  publisher: "Deep Tech Solutions",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Deep Tech Solutions | Web Design & Lead Generation",
    description:
      "Premium web design, lead generation, and local SEO for dental clinics, restaurants, and local service businesses.",
    url: SITE_URL,
    siteName: "Deep Tech Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Deep Tech Solutions — Web Design & Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Tech Solutions | Web Design & Lead Generation",
    description:
      "Premium web design, lead generation, and local SEO for dental clinics, restaurants, and local service businesses.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    "name": "Deep Tech Solutions",
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/og-image.png`,
      "width": "200",
      "height": "200",
    },
    "description":
      "Premium web design, lead generation, and local SEO for dental clinics, restaurants, and local service businesses.",
    "email": "hello@deeptechsolutions.online",
    "telephone": "+91-89-2949-0433",
    "priceRange": "$$",
    "currenciesAccepted": "USD, GBP, EUR, INR",
    "paymentAccepted": "Credit Card, Stripe, Bank Transfer",
    "areaServed": [
      // Countries
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Australia" },
      // US states (targeted markets)
      { "@type": "State", "name": "Massachusetts" },
      { "@type": "State", "name": "New York" },
      { "@type": "State", "name": "California" },
      { "@type": "State", "name": "Texas" },
      { "@type": "State", "name": "Florida" },
      // EU countries (GDPR-compliant markets)
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "Belgium" },
      { "@type": "Country", "name": "Sweden" },
      { "@type": "Country", "name": "Ireland" },
      { "@type": "Country", "name": "France" },
    ],
    "serviceType": [
      "Website Design & Development",
      "Small Business Web Design",
      "Freelance Web Developer",
      "Website Redesign",
      "Lead Generation Websites",
      "Local SEO Web Design",
      "Google Business Profile Optimisation",
      "Booking System Integration",
    ],
    "knowsAbout": [
      "Web Design",
      "Local SEO",
      "Lead Generation",
      "Dental Marketing",
      "Restaurant Marketing",
    ],
    "founder": {
      "@type": "Person",
      "name": "Deepak Kumar",
      "sameAs": "https://www.linkedin.com/in/deepak-kumar-007967160",
    },
    "sameAs": [
      "https://www.facebook.com/deeptechsolutions",
      "https://www.instagram.com/deeptechsolutions90",
      "https://www.linkedin.com/in/deepak-kumar-007967160",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "name": "Deep Tech Solutions",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <CookieConsent />
      </body>
    </html>
  );
}
