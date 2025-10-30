import React from "react";
import AppNavbar from "../components/AppNavbar";
import ServicesSection from "../components/ServicesSection";
import ImpactSection from "../components/ImpactSection";
import EthosSection from "../components/EthosSection";
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <AppNavbar />

      <HeroSection />

      {/* Our Ethos Section */}
      <EthosSection />

      <ServicesSection />

      <ImpactSection />
      <WhyChooseSection />

      <Footer />
    </>
  );
}
