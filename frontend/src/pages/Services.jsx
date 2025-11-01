// src/pages/Services.jsx
import React, { useState } from "react";
import AppNavbar from "../components/AppNavbar";
import ServiceCards from "../components/ServiceCards";
import ServiceDetails from "../components/ServiceDetails";
import "./Services.css"; // ✅ We'll make this for page styling

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <AppNavbar />

      <main className="services-page">
        {/* --- Hero Header --- */}
        <header className="services-hero">
          <div className="services-hero-content">
            <h1>Explore Our Professional Services</h1>
            <p>
              Compassionate, reliable, and medical-grade care — discover how our
              expert nursing team brings hospital-quality care to your home.
            </p>
          </div>
        </header>

        {/* --- Clickable Service Cards --- */}
        <ServiceCards onServiceSelect={setActiveService} />

        {/* --- 3D Service Details Section --- */}
        <section id="serviceDetails" className="services-details-section">
          {!activeService ? (
            <div className="placeholder-text">
              👇 Click on a service card above to view its 3D interactive
              details
            </div>
          ) : (
            <ServiceDetails activeService={activeService} />
          )}
        </section>
      </main>
    </>
  );
}
