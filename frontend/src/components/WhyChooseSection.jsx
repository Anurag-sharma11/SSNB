import React from "react";
import "./WhyChooseSection.css";
import { MapPin, Timer, HeartPulse, Wallet, CheckCircle2, Users } from "lucide-react";

const SevaSaiAdvantage = () => {
  return (
    <section className="advantage-section" >
      <div className="advantage-header">
        <h2>
          Why <span>Seva Sai Nursing Bureau</span> is Trusted Across India
        </h2>
        <p>
          Compassionate, certified, and connected — delivering reliable healthcare right at your doorstep.
        </p>
      </div>

      <div className="advantage-grid">
        {/* 1️⃣ Verified Network */}
        <div className="adv-card">
          <h3><Users size={22} /> Verified Nurse Network</h3>
          <p>Our certified nurses serve across metro & tier-2 cities ensuring consistent, professional care.</p>
          <div className="map-dots">
            <div className="dot" style={{ top: "35%", left: "25%" }}></div>
            <div className="dot" style={{ top: "45%", left: "50%" }}></div>
            <div className="dot" style={{ top: "60%", left: "40%" }}></div>
            <div className="dot" style={{ top: "30%", left: "70%" }}></div>
          </div>
        </div>

        {/* 2️⃣ Faster Response */}
        <div className="adv-card">
          <h3><Timer size={22} /> 4× Faster Response</h3>
          <p>Assigning nurses within hours — faster and smoother than any traditional process.</p>
          <div className="bar-graph">
            <div className="bar normal"></div>
            <div className="bar seva"></div>
          </div>
          <div className="bar-labels">
            <span>Other Agencies</span>
            <span>Seva Sai</span>
          </div>
        </div>

        {/* 3️⃣ Care Quality */}
        <div className="adv-card">
          <h3><HeartPulse size={22} /> Care Quality Index</h3>
          <p>Patient satisfaction rate measured across follow-ups and recovery data.</p>
          <div className="progress-ring">
            <svg viewBox="0 0 36 36">
              <path
                className="circle-bg"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray="98, 100"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">98%</text>
            </svg>
          </div>
        </div>

        {/* 4️⃣ 24×7 Availability */}
        <div className="adv-card">
          <h3><CheckCircle2 size={22} /> 24×7 Availability</h3>
          <p>Round-the-clock nurse coordination and on-call medical support for families.</p>
          <div className="pulse-circle"></div>
        </div>

        {/* 5️⃣ Cost Transparency */}
        <div className="adv-card">
          <h3><Wallet size={22} /> Transparent Pricing</h3>
          <p>90% cost for care, 10% admin — fair, clear, and patient-first billing model.</p>
          <div className="pie-chart">
            <div className="slice slice1"></div>
            <div className="slice slice2"></div>
            <div className="center"></div>
          </div>
        </div>

        {/* 6️⃣ Growth & Trust */}
        <div className="adv-card">
          <h3><MapPin size={22} /> Growing Patient Trust</h3>
          <p>Expanding care network and satisfaction rate across 20+ cities in India.</p>
          <div className="line-graph">
            <svg viewBox="0 0 100 40">
              <polyline
                points="0,30 20,28 40,22 60,15 80,10 100,5"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SevaSaiAdvantage;
