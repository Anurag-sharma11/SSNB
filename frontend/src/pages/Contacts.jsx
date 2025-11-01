// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contacts.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // 🧠 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", contact: "", location: "", email: "", message: "" });
      } else {
        setStatus("⚠️ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Please try later.");
    }
  };

  return (
    <div className="contact-page">
      {/* 🌍 Background video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/kk.mp4" type="video/mp4" />
      </video>

      {/* 🧊 Contact form */}
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Important Message!"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* 🔔 Status message */}
        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );
}
