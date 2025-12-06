    // src/pages/Contact.jsx
    import React, { useState } from "react";
    import "./Contacts.css";
    import ETH from "../assets/ETH.mp4";
    import ContactNavbar from "../components/ContactNavbar";
    import useIsMobile from "../hooks/useIsMobile";
    import useIsTablet from "../hooks/useIsTablet";
    import Footer from "../components/Footer";


    export default function Contact() {
      const isMobile = useIsMobile();
    const isTablet = useIsTablet();

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

      if (status) setStatus(""); // clear status on typing
    };


    // 🚀 Handle form submit
    const handleSubmit = async (e) => {
      e.preventDefault();

      // --- 🧩 Validation checks ---
      const nameRegex = /^[A-Za-z\s]{3,}$/;
      const phoneRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nameRegex.test(formData.name)) {
        setStatus("⚠️ Please enter a valid name (letters only, min 3 chars).");
        return;
      }
      if (!phoneRegex.test(formData.contact)) {
        setStatus("⚠️ Please enter a valid 10-digit contact number.");
        return;
      }
      if (formData.location.trim().length < 3) {
        setStatus("⚠️ Please enter a valid location (min 3 characters).");
        return;
      }
      if (!emailRegex.test(formData.email)) {
        setStatus("⚠️ Please enter a valid email address.");
        return;
      }
      

      // --- 📨 Proceed if valid ---
      setStatus("Sending...");

      try {
        const res = await fetch("https://ssnb-backend.onrender.com/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
          setStatus("✅ Message Sent! Our team will contact you as soon as possible.");
          setFormData({ name: "", contact: "", location: "", email: "", message: "" });

          // Clear status after few seconds
          setTimeout(() => setStatus(""), 4000);
        } else {
          setStatus("⚠️ Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error(error);
        setStatus("❌ Server error. Please try later.");
      }
    };


      return (
        <>
        <ContactNavbar />

        <div className={`contact-page ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`}>

          {/* 🌍 Background video */}
          <video autoPlay loop muted playsInline className="background-video">
      <source src={ETH} type="video/mp4" />
    </video>


          {/* 🧊 Contact form */}
          <div className={`contact-container ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`}>

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
        {/* Footer Component */}
              <Footer />
        </>
      );
    }
