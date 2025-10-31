import React from "react";
import "./Testimonials.css";
import { useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Patient's Son – Delhi",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      review:
        "Seva Sai Nursing Bureau provided outstanding home nursing care for my father after surgery. Their staff were compassionate and very professional.",
    },
    {
      name: "Anjali Mehra",
      role: "Client – Noida",
      img: "https://www.tagmedstaffing.com/wp-content/uploads/2023/12/shutterstock_2193445651-e1703703014306-1-1024x806.jpg",
      review:
        "I’m grateful for the caretakers who supported my mother’s recovery. They were punctual, friendly, and well-trained.",
    },
    {
      name: "Dr. Amit Verma",
      role: "Referring Doctor – Gurugram",
      img: "https://static.pincel.app/cdn-cgi/image/width=450,format=auto/https://blog.pincel.app/wp-content/uploads/2024/02/medical_worker_in_uniform_happy_full_body_with_medical_equipment_in_a_bright_clinic_setting_background-1.jpeg",
      review:
        "I often recommend Seva Sai Nursing Bureau to my patients. Their team delivers quality and consistent patient care every time.",
    },
  ];

  useEffect(() => {
  const cards = document.querySelectorAll(".testimonial-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / 20).toFixed(2);
      const rotateY = ((centerX - x) / 20).toFixed(2);

      card.style.transform = `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `
        perspective(800px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
      card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.08)";
    });
  });
}, []);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-review">“{item.review}”</p>
              <h3 className="testimonial-name">{item.name}</h3>
              <p className="testimonial-role">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


