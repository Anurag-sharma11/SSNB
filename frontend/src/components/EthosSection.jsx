import React from "react";
import "./EthosSection.css"; // External CSS file
import { Brain, Heart, Microscope } from "lucide-react";

const EthosSection = () => {
  const ethosPoints = [
    {
      icon: <Brain size={42} color="#2563eb" />,
      title: "Knowledge-Driven Care",
      desc: "Every nurse at Seva Sai is trained under certified healthcare professionals to ensure evidence-based and safe patient care.",
    },
    {
      icon: <Heart size={42} color="#2563eb" />,
      title: "Empathy First",
      desc: "Beyond treatment, we focus on emotional support and building trust with families through consistent, compassionate service.",
    },
    {
      icon: <Microscope size={42} color="#2563eb" />,
      title: "Modern Approach",
      desc: "We embrace digital tracking, supervision systems, and continuous training to provide quality that adapts to modern healthcare.",
    },
  ];

  return (
    <section className="ethos-section">
      <div className="ethos-container">
        <h2 className="ethos-title">Our Ethos</h2>
        <p className="ethos-subtext">
          At Seva Sai Nursing Bureau, our values form the foundation of
          everything we do — blending medical precision with human compassion.
        </p>

        <div className="ethos-grid">
          {ethosPoints.map((item, index) => (
            <div className="ethos-card" key={index}>
              <div className="ethos-icon">{item.icon}</div>
              <h3 className="ethos-card-title">{item.title}</h3>
              <p className="ethos-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthosSection;
