import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Website Quote | Contact Deep Tech Solutions",
  description:
    "Tell us about your business website project. Get a free quote and consultation from a senior web developer — no obligation, no sales pitch.",
  alternates: {
    canonical: "https://www.deeptechsolutions.online/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
