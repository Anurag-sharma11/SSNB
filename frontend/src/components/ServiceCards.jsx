// src/components/ServiceCards.jsx
import React from "react";
import { motion } from "framer-motion";
import "./ServiceCards.css"; // ✅ We'll create this CSS file

const services = [
  {
    id: "patient-care",
    title: "Patient Care",
    icon: "🩺",
    tagline: "Skilled nurses for home recovery and daily monitoring",
  },
  {
    id: "elder-care",
    title: "Elder Caretaker",
    icon: "👴",
    tagline: "Trusted caretakers for senior citizens’ comfort and safety",
  },
  {
    id: "baby-care",
    title: "Baby Care",
    icon: "🍼",
    tagline: "Professional baby nurses ensuring mother and infant care",
  },
  {
    id: "male-female-nurses",
    title: "Male & Female Nurses",
    icon: "👨‍⚕️👩‍⚕️",
    tagline: "Trained nursing staff available for personalized home care",
  },
  {
    id: "tracheostomy-care",
    title: "Tracheostomy Care",
    icon: "💨",
    tagline: "Expert tracheostomy management with sterile technique",
  },
  {
    id: "gastrostomy-care",
    title: "Gastrostomy Care",
    icon: "💉",
    tagline: "Feeding tube care and maintenance by medical staff",
  },
  {
    id: "injection-on-call",
    title: "Injection On Call",
    icon: "💊",
    tagline: "Professional nurse visits for safe injections at home",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Services",
    icon: "🤸",
    tagline: "Rehabilitation and mobility recovery sessions at home",
  },
];

export default function ServiceCards({ onServiceSelect }) {
  const handleClick = (serviceId) => {
    onServiceSelect(serviceId);
    const detailSection = document.getElementById("serviceDetails");
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="service-section">
      <div className="service-container">
        <h2 className="service-heading">Our Services</h2>

        <div className="service-grid">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleClick(service.id)}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-tagline">{service.tagline}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
