import React from "react";
import "./OurServices.css";

export default function OurServices() {
  const services = [
    {
      icon: "🩺",
      title: "Home Nursing",
      desc: "Professional nursing care at your home for post-surgery, elderly, or medical support.",
    },
    {
      icon: "🤝",
      title: "Patient Attendants",
      desc: "Trained attendants to assist with daily activities, hygiene, and personal care.",
    },
    {
      icon: "🧓",
      title: "Elderly Care",
      desc: "Compassionate caretakers ensuring comfort, companionship, and well-being for seniors.",
    },
    {
      icon: "🏥",
      title: "Hospital Care Support",
      desc: "Reliable nursing staff available for hospital-based patient care and recovery support.",
    },
  ];

  return (
    <section className="our-services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
