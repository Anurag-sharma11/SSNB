// src/components/BookNurseModal.jsx
import React from "react";
import "./BookNurseModal.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function BookNurseModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h2>Book a Nurse</h2>
        <p>Choose how you’d like to connect with us 👇</p>

        <div className="modal-options">
          <button
            className="modal-btn phone"
            onClick={() => window.open("tel:+91 9999327975")}
          >
            <FaPhoneAlt /> Call Us
          </button>

          <button
            className="modal-btn form"
            onClick={() => (window.location.href = "/contact")}
          >
            <IoMdMail /> Fill Contact Form
          </button>

          <button
            className="modal-btn whatsapp"
            onClick={() =>
              window.open("https://wa.me/919999327975?text=Hi, I’d like to book a nurse", "_blank")
            }
          >
            <FaWhatsapp /> Connect via WhatsApp
          </button>
        </div>

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
}
