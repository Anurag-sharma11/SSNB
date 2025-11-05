import React, { useEffect, useRef } from "react";
import "./CompanyTimeline.css";

export default function CompanyTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    function onScroll() {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // --- Step 1: define start & end points for animation ---
      // when timeline top touches bottom of screen -> start
      const start = rect.top - windowHeight;
      // when timeline bottom reaches top of screen -> end
      const end = rect.bottom;

      // --- Step 2: calculate progress between 0 and 1 ---
      const scrollY = window.scrollY;
      const percent = Math.min(Math.max((scrollY - (scrollY + start)) / (end - start), 0), 1);

      // Actually simpler: based on element position relative to viewport
      const visibleDistance = windowHeight - rect.top; // how much of timeline has entered view
      const totalScrollable = rect.height + windowHeight; // total distance for animation
      let progress = visibleDistance / totalScrollable;

      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(progress, 1));

      // --- Step 3: slow down the fill ---
      // This is the key: power < 1 = faster, power > 1 = slower.
      const eased = Math.pow(progress, 0.7); // super slow fill (try 3–4 range)

      // --- Step 4: apply CSS variables ---
      el.style.setProperty("--line-fill", `${(eased * 100).toFixed(2)}%`);
      el.style.setProperty("--line-glow-opacity", `${0.2 + eased * 0.8}`);

      // --- Step 5: activate dots when line reaches them ---
      const items = el.querySelectorAll(".timeline-item");
      const filledHeight = eased * rect.height;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2 - rect.top;

        if (itemCenter <= filledHeight) {
  item.classList.add("active", "glow-card");
} else {
  item.classList.remove("active", "glow-card");
}

      });
    }

    // Initial trigger
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="company-timeline">
      <h2 className="timeline-title">Our Journey</h2>

      <div
        className="timeline"
        ref={timelineRef}
        style={{ "--line-fill": "0%", "--line-glow-opacity": "0.25" }}
      >
        <div className="timeline-item left">
          <div className="content">
            <h3>2014 — Foundation</h3>
            <p>
              Seva Sai Nursing Bureau began with a small but dedicated team of{" "}
              <b>Twenty Staff</b> in Delhi, committed to providing quality patient
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
              with a larger team and updated healthcare training modules & adding
              over 50 trained staff and professional attendants..
            </p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="content">
            <h3>2025 — Expansion</h3>
            <p>
      Today, <b>Seva Sai Nursing Bureau</b> proudly operates with a team of
      <b> 300+ certified nurses and attendants</b>, delivering trusted healthcare
      services across <b>Delhi NCR and major metro cities</b>. Our expansion
      reflects our continuous commitment to quality care, compassion, and
      excellence in home healthcare.
    </p>
          </div>
        </div>
      </div>
    </section>
  );
}
