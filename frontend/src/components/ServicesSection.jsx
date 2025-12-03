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
import back2 from "../assets/back2.jpeg";
import img17 from "../assets/img17.jpg";
import img20 from "../assets/img20.jpg";
import img15 from "../assets/img15.jpg";
import SDR from "../assets/SDR.png";
import par from "../assets/par.jpg";
import WD from "../assets/WD.jpeg";
import inj from "../assets/inj.jpeg";
import phy from "../assets/phy.png";

const ServicesSection = () => {
  const services = [
  { 
    icon: <HeartPulse size={42} />, 
    title: "Patient Care",
    img: img17,
    id: "img-patient",
    desc: "24/7 personalized patient support at home by trained caregivers."
  },
  { 
    icon: <User size={42} />, 
    title: "Elder Caretaker",
    img: img20,
    id: "img-Elder",
    desc: "Compassionate assistance for seniors with daily activities."
  },
  { 
    icon: <Baby size={42} />, 
    title: "Baby Care",
    img: img15,
    id: "img-Baby",
    desc: "Professional newborn & infant care by certified attendants."
  },
  { 
    icon: <Stethoscope size={42} />, 
    title: "Male/Female Nurses",
    img: SDR,
    id: "img-MF",
    desc: "Experienced male & female nurses available for home visits."
  },
  { 
    icon: <Brain size={42} />, 
    title: "Paralytic & Fracture Care",
    img: par,
    id: "img-Para",
    desc: "Specialized support for bedridden, paralytic & injury patients."
  },
  { 
    icon: <ShieldPlus size={42} />, 
    title: "Wound Dressing & Medical Assistance",
    img: WD,
    id: "img-Wound",
    desc: "Safe & hygienic dressing, injections, drips, and more."
  },
  { 
    icon: <Syringe size={42} />, 
    title: "Injection On Call",
    img: inj,
    id: "img-injec",
    desc: "Certified nurses available for doorstep injections anytime."
  },
  { 
    icon: <Dumbbell size={42} />, 
    title: "Physiotherapy Services",
    img: phy,
    id: "img-Physio",
    desc: "Expert physiotherapists for recovery & mobility improvement."
  },
];



  return (
    <section className="services-section" id="services">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
  {services.map((item, i) => (
    <div className="service-card-modern" key={i}>

      {/* IMAGE */}
      <img
  src={item.img}
  alt={item.title}
  className="service-img"
  id={item.id}
/>


      {/* ICON + TITLE */}
      <div className="service-header">
        <div className="service-icon">{item.icon}</div>
        <h3 className="service-title">{item.title}</h3>
      </div>

      {/* DESCRIPTION */}
      <p className="service-desc">{item.desc}</p>

      

    </div>
  ))}
</div>


    </section>
  );
};

export default ServicesSection;
