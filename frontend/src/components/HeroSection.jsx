import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import logo from "../assets/Logo.png";
import ologo from "../assets/PNGL.JPG"

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Remove intro after animation (2.5s)
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔹 Intro Overlay */}
      {showIntro && (
        <div className="logo-intro">
          <div className="logo-glass">
            <img src={ologo} alt="Seva Sai Logo" className="intro-logo" />
          </div>
        </div>
      )}

      {/* 🔹 Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Empowering Families with <span>Trusted Nursing Care</span>
            </h1>
            <p className="hero-subtext">
              At Seva Sai Nursing Bureau, we bring professional healthcare to
              your home — combining medical expertise with compassion and trust.
            </p>
            <div className="hero-buttons">
              <button className="btn primary">Book a Nurse</button>
              <button className="btn secondary">Learn More</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={logo} alt="Nursing care" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
