import React from "react";
import "./ServicesSection.css";
import {
  HeartPulse,
  Baby,
  Syringe,
  User,
  Stethoscope,
  Brain,
  ShieldPlus,
  Dumbbell,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    { icon: <HeartPulse size={42} />, title: "Patient Care" },
    { icon: <User size={42} />, title: "Elder Caretaker" },
    { icon: <Baby size={42} />, title: "Baby Care" },
    { icon: <Stethoscope size={42} />, title: "Male/Female Nurses" },
    { icon: <Brain size={42} />, title: "Tracheostomy Care Nurses" },
    { icon: <ShieldPlus size={42} />, title: "Gastrostomy Care" },
    { icon: <Syringe size={42} />, title: "Injection On Call" },
    { icon: <Dumbbell size={42} />, title: "Physiotherapy Services" },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        {services.map((item, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{item.icon}</div>
            <h3 className="service-name">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
