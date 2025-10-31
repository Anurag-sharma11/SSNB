import React from "react";
import "./CompanyTimeline.css";

export default function CompanyTimeline() {
  return (
    <section className="company-timeline">
      <h2 className="timeline-title">Our Journey</h2>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="content">
            <h3>2015 — Foundation</h3>
            <p>
              Seva Sai Nursing Bureau began with a small but dedicated team of{" "}
              <b>five nurses</b> in Delhi, committed to providing quality patient
              care at home.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>2018 — Growth</h3>
            <p>
              Expanded our services to cover <b>Noida and Gurugram</b>, adding
              over 50 trained staff and professional attendants.
            </p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="content">
            <h3>2020 — Recognition</h3>
            <p>
              Recognized as one of the <b>most reliable home healthcare
              bureaus</b> in Delhi NCR, known for compassionate nursing and
              verified staff.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>2023 — Expansion</h3>
            <p>
              Introduced <b>elderly care and post-surgery support</b> services
              with a larger team and updated healthcare training modules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
