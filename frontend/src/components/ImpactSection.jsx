import React, { useEffect, useState } from "react";
import "./ImpactSection.css";
import { HeartPulse, Hospital, Users, Clock } from "lucide-react";

const ImpactSection = () => {
  const [counts, setCounts] = useState({
    nurses: 0,
    families: 0,
    hospitals: 0,
    service: 0,
  });

  useEffect(() => {
    const target = { nurses: 500, families: 5000, hospitals: 25, service: 24 };
    const duration = 1500;
    const steps = 60;
    const increment = {
      nurses: target.nurses / steps,
      families: target.families / steps,
      hospitals: target.hospitals / steps,
      service: target.service / steps,
    };

    let current = { ...counts };
    let i = 0;
    const interval = setInterval(() => {
      i++;
      current = {
        nurses: Math.min(target.nurses, current.nurses + increment.nurses),
        families: Math.min(target.families, current.families + increment.families),
        hospitals: Math.min(target.hospitals, current.hospitals + increment.hospitals),
        service: Math.min(target.service, current.service + increment.service),
      };
      setCounts({ ...current });
      if (i >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="impact-section" id="impact">
      <h2 className="impact-title">OUR IMPACT IN NUMBERS</h2>
      <p className="impact-subtitle">
        A reflection of our commitment to care, compassion, and quality service.
      </p>

      <div className="impact-grid">
        <div className="impact-card">
          <HeartPulse size={45} className="impact-icon" />
          <h3 className="impact-number">{Math.round(counts.nurses)}+</h3>
          <p className="impact-label">Trusted Staff</p>
        </div>

        <div className="impact-card">
          <Users size={45} className="impact-icon" />
          <h3 className="impact-number">{Math.round(counts.families)}+</h3>
          <p className="impact-label">Families Served</p>
        </div>

        <div className="impact-card">
  <Hospital size={45} className="impact-icon" />
  <h3 className="impact-number">Locations</h3>
  <p className="impact-label">
    Delhi NCR, Mumbai, Bangalore & Many More
  </p>
</div>


        <div className="impact-card">
          <Clock size={45} className="impact-icon" />
          <h3 className="impact-number">{Math.round(counts.service)}×7</h3>
          <p className="impact-label">Available Support</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
