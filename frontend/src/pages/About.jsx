import React from "react";
import AppNavbar from "../components/AppNavbar";
import "./About.css";
import logo from "../assets/Logo.png"; // ✅ your logo on right side
import CompanyTimeline from "../components/CompanyTimeline";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <AppNavbar />
      <section className="about-section">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>

          <p className="about-text">
            Welcome to{" "}
            <span className="highlight">Seva Sai Nursing Bureau</span> — a trusted
            name in providing skilled and compassionate nursing staff across
            Delhi NCR. Our mission is to deliver quality healthcare assistance
            and support for patients at home and hospitals.
          </p>

          <p className="about-text">
            We specialize in trained nurses, attendants, and caretakers who focus
            on improving patients’ comfort, recovery, and overall well-being.
            Whether it’s 24/7 care or part-time support, we ensure you get the
            best service with empathy and professionalism.
          </p>

          <button className="learn-btn">Learn More</button>
        </div>

        <div className="about-image">
          <img src={logo} alt="Company Logo" />
        </div>
      </section>

      {/* Add Timeline Component */}
      <CompanyTimeline />

      {/* Our Services Section */}
      <OurServices />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Component */}
      <Footer />
    </>
  );
}
