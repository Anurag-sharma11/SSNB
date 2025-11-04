import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import logo from "../assets/Logo.png";
import ologo from "../assets/PNGL.JPG";
import CFLOGO from "../assets/FLOGO.jpg";
import BookNurseModal from "../components/BookNurseModal"; // ✅ import modal

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="logo-intro">
          <div className="logo-glass">
            <img src={ologo} alt="Seva Sai Logo" className="intro-logo" />
          </div>
        </div>
      )}

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
              <button
                className="btn primary"
                onClick={() => setShowModal(true)}
              >
                Book a Nurse
              </button>
              <button className="btn secondary">Learn More</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={CFLOGO} alt="Nursing care" />
          </div>
        </div>
      </section>

      {/* Modal */}
      <BookNurseModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default HeroSection;
