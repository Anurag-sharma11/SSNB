import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>

          <div className="footer-map">
            <a
              href="https://maps.app.goo.gl/wZbMLgLesDzRFyxeA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                title="Seva Sai Nursing Bureau Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.962480095085!2d77.0766592!3d28.6003396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b71abf84e8b%3A0xcbe6158d851072cc!2sSeva%20Sai%20Nursing%20Bureau!5e0!3m2!1sen!2sin!4v1764784818755!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>

          <span className="footer-map-icon">
            <a
              href="https://maps.app.goo.gl/swJs4dpcT5dxV2ry8"
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              <MapPin size={18} />
              Open in Google Maps
            </a>

          </span>
        </div>

        {/* Right Section */}
        {/* Right Section */}
        <div className="footer-right">
          <h3>Contact Us</h3>

          {/* Multiple phone numbers */}
          <p><Phone size={16} /> +91 9999327975</p>
          <p><Phone size={16} /> +91 7835929812</p>

          {/* Email */}
          <p><Mail size={16} /> sevasainursing@gmail.com</p>

          {/* Office Address (multi-line) */}
          <p className="footer-address">
            <MapPin size={16} />
            <span>
              <br></br>
              <b>Address:</b><br />
              Rz-36A, Gali Number 1,<br />
              Vijay Enclave, New Delhi,<br />
              Near Nav gian Deep Public School,<br />
              Delhi – 110045
            </span>
          </p><br />

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
