import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="Seva Sai Nursing Bureau" className="footer-logo" />
          <p className="footer-tagline">
            Compassion. Care. Commitment.<br />
            Your trusted home healthcare partner.
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p><Phone size={16} /> +91 98765 43210</p>
          <p><Mail size={16} /> info@sevasainursing.com</p>
          <p><MapPin size={16} /> Delhi, India</p>

          <div className="footer-socials">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Seva Sai Nursing Bureau. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
