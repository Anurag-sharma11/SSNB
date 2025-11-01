import React from "react";
import "./ServiceDetails.css";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useRef } from "react";



const serviceData = {
  "patient-care": {
    title: "Patient Care",
    desc: "Our Patient Care service brings skilled nursing directly to your home. From wound dressing and medication to vitals monitoring, we ensure safety, comfort, and recovery — just like in a hospital.",
    list: [
      "Post-operative nursing",
      "Wound care and injection support",
      "Vitals tracking and documentation",
      "Family and doctor communication",
    ],
    quote: "“We treat every home as an extension of our hospital — where care meets compassion.”",
    image: "https://media.istockphoto.com/id/1739325597/photo/nurse-senior-woman-and-smile-with-comfort-holding-hands-or-support-in-nursing-home-for.jpg?s=612x612&w=0&k=20&c=BMCKzCUYgUGPlSugqpmKVJ3tNzeh0Sv_HjYcKOrKuKI=",
    background: "url('https://media.istockphoto.com/id/1437830105/photo/cropped-shot-of-a-female-nurse-hold-her-senior-patients-hand-giving-support-doctor-helping.jpg?s=612x612&w=0&k=20&c=oKR-00at4oXr4tY5IxzqsswaLaaPsPRkdw2MJbYHWgA=')",
  },

  "elder-care": {
    title: "Elder Caretaker",
    desc: "Providing experienced caretakers for seniors with respect, love, and medical attention. Our caretakers help elders live independently, safely, and happily at home.",
    list: [
      "Mobility and hygiene assistance",
      "Daily medication reminders",
      "Health monitoring and companionship",
      "Doctor and family updates",
    ],
    quote: "“Every elder deserves dignity, safety, and kindness at home.”",
    image: "https://media.istockphoto.com/id/1719538017/photo/home-care-healthcare-professional-hugging-senior-patient.jpg?s=612x612&w=0&k=20&c=DTQwVD1DTH0CMQ78aox8-cVKg8Nl-wCkSwY-S072M4E=",
    background: "url('https://static.vecteezy.com/system/resources/thumbnails/024/488/739/small_2x/asian-careful-caregiver-or-nurse-taking-care-of-the-elderly-asian-patient-in-a-wheelchair-concept-of-happy-retirement-with-care-from-a-caregiver-and-savings-and-senior-health-insurance-elderly-care-video.jpg')",
  },

  "baby-care": {
    title: "Baby Care",
    desc: "Our trained baby caretakers ensure proper feeding, hygiene, and comfort for your little one. We care for newborns and infants with patience, safety, and affection.",
    list: [
      "Newborn and infant care",
      "Feeding and nap management",
      "Health monitoring and hygiene",
      "Mother support and baby growth tracking",
    ],
    quote: "“Caring for your baby as gently as a mother’s love.”",
    image: "https://plus.unsplash.com/premium_photo-1661515635718-9414fe6adfd6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhcmV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    background: "url('https://media.istockphoto.com/id/1368212146/photo/cropped-shot-of-an-attractive-young-woman-and-her-newborn-baby-at-home.jpg?s=612x612&w=0&k=20&c=-bZiILQgb_zwVIGf5hczoGkeFaR8B2L5j50Yjh-1fO8=')",
  },

  "male-female-nurses": {
    title: "Male & Female Nurses",
    desc: "We provide professionally trained male and female nurses for personalized home care. Each nurse is certified and skilled in patient assistance and medical support.",
    list: [
      "ICU and general nursing care",
      "Injection, dressing, and vitals monitoring",
      "Patient transfer and mobility support",
      "Customized care plans",
    ],
    quote: "“Qualified nurses with a compassionate heart.”",
    image: "https://media.istockphoto.com/id/495479586/photo/two-young-nurses-on-the-ward.jpg?s=612x612&w=0&k=20&c=mdToKrwiiPG3Q6kphft0ZuMEpEX1vjPuEkuYkFQU5lQ=",
    background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQNqQbBDeQhhhKrrrdqI-ZemwSVwv8wX8hg&s')",
  },

  "tracheostomy-care": {
    title: "Tracheostomy Care",
    desc: "Our expert nurses provide complete tracheostomy management, ensuring cleanliness, comfort, and safety for the patient.",
    list: [
      "Tube cleaning and maintenance",
      "Sterile suctioning procedures",
      "Infection prevention",
      "Monitoring and oxygen management",
    ],
    quote: "“Precision and care — because every breath matters.”",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXaxfNhb3YX-5L8bNU7cuyKKD7bz3b3qrxQ&s",
    background: "url('https://media.gettyimages.com/id/2236035407/video/asian-nurse-suctions-mucus-from-a-tube-in-the-throat-of-a-patient-who-had-a-tracheostomy-and.jpg?s=640x640&k=20&c=fEkBwQp8JtoZHvyJntv2NMgBhYbOHgAJ2339bWmtR7I=')",
  },

  "gastrostomy-care": {
    title: "Gastrostomy Care",
    desc: "We handle gastrostomy care with high medical hygiene standards. Our staff ensures safe and comfortable feeding for patients with feeding tubes.",
    list: [
      "Tube cleaning and replacement support",
      "Safe feeding and hygiene maintenance",
      "Infection control",
      "Continuous monitoring",
    ],
    quote: "“Dedicated care with safety and compassion.”",
    image: "https://media.istockphoto.com/id/1152499860/vector/percutaneous-endoscopic-gastronomy.jpg?s=612x612&w=0&k=20&c=m7Mrv4IkYY_SB8ee7xk_Cdw0jdi0t28c_OvwVHB01eo=",
    background: "url('https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.jpg?s=612x612&w=0&k=20&c=zknrVfCELovlvvXKrAlWKLnFLfkMQF8nh9k2d97pJkE=')",
  },

  "injection-on-call": {
    title: "Injection On Call",
    desc: "Avoid hospital visits with our on-call nursing service. Get injections and medications administered safely in your home.",
    list: [
      "IV/IM/Subcutaneous injections",
      "Doctor-prescribed dose administration",
      "Sterile equipment handling",
      "Home comfort and safety",
    ],
    quote: "“Safe, hygienic injections — right at your doorstep.”",
    image: "https://media.istockphoto.com/id/1668066413/photo/hands-medical-and-doctor-with-patient-for-vaccine-in-a-clinic-for-healthcare-treatment-for.jpg?s=612x612&w=0&k=20&c=kPvGvDYDZ4NJWNgZ17INIU2Y1A_M2ujMNaf-qAdh2LY=",
    background: "url('https://media.istockphoto.com/id/1483403917/photo/vaccine-and-syringe-image-of-vaccination.jpg?s=612x612&w=0&k=20&c=k6_gskBZuE5_xl3s9c2q00CPRvukZ2B000uiyg5BT_g=')",
  },

  physiotherapy: {
    title: "Physiotherapy Services",
    desc: "We provide professional physiotherapy sessions that promote recovery, mobility, and strength — all at home.",
    list: [
      "Post-surgery rehabilitation",
      "Joint and muscle pain management",
      "Paralysis recovery",
      "Personalized exercise plans",
    ],
    quote: "“Helping you move towards better health.”",
    image: "https://media.istockphoto.com/id/1428417112/photo/physiotherapy-doctor-senior-patient-and-leg-surgery-physical-therapy-and-orthopedic-healing.jpg?s=612x612&w=0&k=20&c=NK5v7uZ6xzcZiyPeEh9gfFrcOY7KWh4jMcsAsYSl8kc=",
    background: "url('https://media.istockphoto.com/id/1373226059/video/4k-video-footage-of-a-senior-man-having-a-checkup-with-a-physiotherapist.jpg?s=640x640&k=20&c=oHY1bGfIFFmmFfOfCPnqaWgFP07lhRgJ4JsiglnXPIk=')",
  },
};
function ServiceImage3D({ image, title }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Convert cursor movement into rotation angles
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // Track mouse movement within the image box
  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx);
    y.set(dy);
  }

  // Reset when cursor leaves
  function resetTilt() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className="details-image-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ perspective: 1000 }}
    >
      <motion.img
        src={image}
        alt={title}
        className="details-image"
        style={{
          rotateX,
          rotateY,
          scale: 1.05,
          transition: "transform 0.3s ease",
        }}
      />
    </motion.div>
  );
}

export default function ServiceDetails({ activeService }) {
  const data = serviceData[activeService];
  if (!data) return null;
    
  return (
    <section
      className="service-details-section"
      style={{ backgroundImage: data.background }}
    >
      <div className="overlay"></div>

      <div className="details-content">
        <div className="details-text-box">
          <h2 className="details-title">{data.title}</h2>
          <p className="details-description">{data.desc}</p>

          <ul className="details-list">
            {data.list.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>

          <blockquote className="details-quote">{data.quote}</blockquote>
        </div>

        <ServiceImage3D image={data.image} title={data.title} />

      </div>
    </section>
  );
}
