// src/components/ContactNavbar.jsx
import React from "react";
import "./ContactNavbar.css";
import logo from "../assets/Logo.png";

export default function ContactNavbar() {
  return (
    <nav className="contact-navbar">
      <div className="contact-logo">
        <img src={logo} alt="Seva Sai Logo" />
        
      </div>

      <ul className="contact-nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact" className="active">Contact</a></li>
      </ul>

      
    </nav>
  );
}
