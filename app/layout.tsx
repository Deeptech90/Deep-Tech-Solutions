import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deep Tech Solutions | Web Design & Lead Generation for Local Businesses",
  description:
    "Premium web design, lead generation, and local SEO for dental clinics, restaurants, and local service businesses. Get found online and convert more visitors into customers.",
  keywords:
    "web design, lead generation, local SEO, dental website, restaurant website, local business, freelance web developer",
  authors: [{ name: "Deep Tech Solutions" }],
  metadataBase: new URL("https://deeptechsolutions.online"),
  alternates: {
    canonical: "https://deeptechsolutions.online",
  },
  openGraph: {
    title: "Deep Tech Solutions | Web Design & Lead Generation",
    description:
      "Premium web design, lead generation, and local SEO for dental clinics, restaurants, and local service businesses.",
    url: "https://deeptechsolutions.online",
    siteName: "Deep Tech Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Tech Solutions | Web Design & Lead Generation",
    description:
      "Premium web design, lead generation, and local SEO for dental clinics, restaurants, and local service businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Deep Tech Solutions",
    "url": "https://deeptechsolutions.online",
    "sameAs": [
      "https://www.facebook.com/deeptechsolutions",
      "https://www.instagram.com/lustforlife342024/"
    ]
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
