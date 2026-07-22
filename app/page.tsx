import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import InsightsSection from "@/components/InsightsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Scroll reveal observer (client component, no UI) */}
      <ScrollReveal />

      {/* Sticky navigation */}
      <Navigation />

      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Expertise / Work showcase */}
        <ExpertiseSection />

        {/* 3. Capabilities grid */}
        <CapabilitiesSection />

        {/* 4. About / positioning */}
        <AboutSection />

        {/* 5. Pricing tiers */}
        <PricingSection />

        {/* 6. Insights / Blog */}
        <InsightsSection />

        {/* 7. CTA Banner */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
