"use client";

import { useEffect } from "react";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import AboutUsSection from "@/components/sections/about-us";
import ServicesSection from "@/components/sections/services-section";
import StrongFoundations from "@/components/sections/strong-foundations";
import MissionCta from "@/components/sections/mission-cta";
import WhatWeDoSection from "@/components/sections/what-we-do";
import ModernInfrastructure from "@/components/sections/modern-infrastructure";
import QualityConstruction from "@/components/sections/quality-construction";
import PortfolioSection from "@/components/sections/portfolio";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  // Handle smooth scrolling for hash links on page load
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 120; // Offset for fixed navigation header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300); // Delay to ensure page is fully loaded
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <StrongFoundations />
      <MissionCta />
      <WhatWeDoSection />
      <ModernInfrastructure />
      <QualityConstruction />
      <PortfolioSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}