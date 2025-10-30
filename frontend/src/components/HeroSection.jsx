import React from "react";
import "./HeroSection.css";
import banner from "../assets/Banner.png"; // adjust name if needed

const HeroSection = () => {
  return (
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
          <img src={banner} alt="Nursing care" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
