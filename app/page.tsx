import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import InsightsSection from "@/components/InsightsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Small Business Website Design & Development | Deep Tech Solutions",
  description:
    "Professional websites for small businesses, local services, dental clinics, restaurants, and law firms. Direct developer access, transparent pricing, and SEO-ready design. Get a free consultation.",
  alternates: {
    canonical: "https://www.deeptechsolutions.online",
  },
};

export default function Home() {
  return (
    <>
      {/* Scroll reveal observer (client component, no UI) */}
      <ScrollReveal />

      {/* Sticky navigation */}
      <Navigation />

      <main id="main-content">
        {/* 1. Hero — H1 + CTAs + trust badges + laptop mockup */}
        <HeroSection />

        {/* 2. Problem / Solution — business problems + how we solve them */}
        <ProblemSolutionSection />

        {/* 3. Services / Capabilities grid */}
        <CapabilitiesSection />

        {/* 4. Industries we serve */}
        <IndustriesSection />

        {/* 5. Portfolio / Work showcase */}
        <ExpertiseSection />

        {/* 6. Process — Discovery → Launch */}
        <ProcessSection />

        {/* 7. Pricing tiers */}
        <PricingSection />

        {/* 8. About / Why Deep Tech Solutions */}
        <AboutSection />

        {/* 9. Insights / Blog */}
        <InsightsSection />

        {/* 10. Final CTA */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
