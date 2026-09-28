import React from "react";
import AppNavbar from "../components/AppNavbar";
import Navbar3D from "../components/Navbar3D";
import ServicesSection from "../components/ServicesSection";
import ImpactSection from "../components/ImpactSection";
import EthosSection from "../components/EthosSection";
import HeroScrollTest from "../components/HeroScrollTest";
import WhyChooseSection from "../components/WhyChooseSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar3D />

      <HeroScrollTest />

      {/* Our Ethos Section */}
      <EthosSection />

      <ServicesSection />

      <ImpactSection />

      <WhyChooseSection />

      <Footer />
    </>
  );
}