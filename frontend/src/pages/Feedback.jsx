import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import "./Feedback.css";
import AppNavbar from "../components/AppNavbar";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";

export default function Feedback() {
  const isMobile = useIsMobile();
const isTablet = useIsTablet();

  const [feedbacks, setFeedbacks] = useState([]);
  const socketRef = useRef(null);

  // --- Fake pre-filled reviews (displayed first) ---
  const fakeFeedbacks = [
    {
      name: "Suman Verma",
      phone: "9810012345",
      rating: 5,
      role: "Daughter of Patient",
      location: "Dwarka, New Delhi",
      comment:
        "The nurses from Seva Sai Nursing Bureau were extremely caring and attentive. They treated my bedridden father with patience and empathy, always keeping hygiene in check. The team made sure to update us daily, which gave our family a lot of peace of mind.",
    },
    {
      name: "Ravi Shah",
      phone: "9876543210",
      rating: 4,
      role: "Patient’s Son",
      location: "Noida Sector 15",
      comment:
        "We hired a night nurse after my mother’s surgery, and the experience was smooth from start to finish. The nurse was punctual, polite, and well-trained. She kept proper records of medicine and vitals. The bureau’s support team checked in regularly to ensure everything went well.",
    },
    {
      name: "Anita Gupta",
      phone: "9998887776",
      rating: 5,
      role: "Client",
      location: "South Extension, Delhi",
      comment:
        "Seva Sai Nursing Bureau has been a blessing for our family. The nurse they provided for my elderly mother handled her medication, diet, and daily physiotherapy perfectly. She even kept her company, which really brightened my mother’s mood. Highly recommended.",
    },
    {
      name: "Karan Mehra",
      phone: "9812345670",
      rating: 4,
      role: "Post-Surgery Patient",
      location: "Gurugram, Haryana",
      comment:
        "After my knee surgery, I needed help with dressing changes and mobility. The nurse assigned was skilled and friendly. She ensured I followed the doctor’s routine and encouraged light exercises. The agency’s response time and coordination were very professional.",
    },
    {
      name: "Priya Sharma",
      phone: "9001122334",
      rating: 5,
      role: "Client",
      location: "Rohini, Delhi",
      comment:
        "Seva Sai Nursing Bureau is one of the few agencies I truly trust. Their nurses are well-trained, punctual, and emotionally intelligent. The care they provided for my grandmother was beyond expectation — she was treated with warmth and respect at all times.",
    },
    {
      name: "Sahil Yadav",
      phone: "9023456789",
      rating: 3,
      role: "Relative of Patient",
      location: "Pitampura, Delhi",
      comment:
        "The service quality was good overall. The nurse took care of all essentials and was kind toward the patient. There were slight delays sometimes, but the overall coordination and professionalism made up for it. I would still recommend them for reliable home care.",
    },
    {
      name: "Neha Singh",
      phone: "9012345678",
      rating: 5,
      role: "Granddaughter of Patient",
      location: "Mayur Vihar, Delhi",
      comment:
        "My grandmother absolutely adored the nurse assigned to her. She made sure medicines were given on time, helped her with meals, and even chatted with her during the day. It’s rare to find such dedication and warmth — a very positive experience for us all.",
    },
    {
      name: "Rajiv Kumar",
      phone: "9112233445",
      rating: 4,
      role: "Patient’s Brother",
      location: "Indirapuram, Ghaziabad",
      comment:
        "Affordable and dependable — that’s how I’d describe Seva Sai Nursing Bureau. The nurse maintained proper hygiene and handled wound dressing with expertise. The team also followed up frequently to check if the services were satisfactory. Great job overall.",
    },
    {
      name: "Deepa Joshi",
      phone: "9988776655",
      rating: 5,
      role: "Daughter of Patient",
      location: "Vikas Puri, Delhi",
      comment:
        "The caregiver assigned for my mother was very gentle, skilled, and compassionate. She took care of physiotherapy, hygiene, and emotional support. The bureau’s management team was always quick to adjust schedules when needed. Excellent service and coordination.",
    },
    {
      name: "Vivek Patel",
      phone: "9776655443",
      rating: 4,
      role: "Client",
      location: "Janakpuri, Delhi",
      comment:
        "We hired a day nurse for my grandfather, who suffers from dementia. The nurse was patient, understanding, and attentive. She managed his routine, meals, and mood swings calmly. The staff handled everything professionally — truly dependable service.",
    },
    {
      name: "Meena Rani",
      phone: "9665544332",
      rating: 5,
      role: "Patient",
      location: "Lajpat Nagar, Delhi",
      comment:
        "I availed Seva Sai’s services during my recovery phase at home. The nurse made sure my medicines, diet, and comfort were all managed perfectly. She maintained cleanliness and a cheerful attitude that really helped my healing process. Great experience.",
    },
    {
      name: "Arjun S.",
      phone: "9554433221",
      rating: 4,
      role: "Client",
      location: "Rajouri Garden, Delhi",
      comment:
        "Professionalism and reliability — these two words sum up Seva Sai Nursing Bureau. The nurse who attended me post-surgery ensured proper care every single day. Their staff was polite, skilled, and always ready to help. Would definitely recommend to others.",
    },
  ];

  // --- Helper functions ---
  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.map((p) => p[0]).join("").toUpperCase().slice(0, 2);
  };

  const renderStars = (rating) =>
    Array.from({ length: rating }).map((_, idx) => (
      <span key={idx} className="star">
        ★
      </span>
    ));

  // --- Load data + real-time socket setup ---
  useEffect(() => {
    // 1️⃣ Show fake feedbacks instantly
    setFeedbacks(fakeFeedbacks.slice(0, 12));

    // 2️⃣ Connect socket for live updates
    socketRef.current = io("http://localhost:5000"); // change to your backend domain if hosted
    socketRef.current.on("connect", () => console.log("✅ Socket connected"));
    socketRef.current.on("newFeedback", (newItem) => {
      setFeedbacks((prev) => {
        const exists = prev.some(
          (p) =>
            (p._id && p._id === newItem._id) ||
            (p.name === newItem.name && p.phone === newItem.phone)
        );
        if (exists) return prev;
        return [...prev, newItem].slice(0, 12);
      });
    });

    // 3️⃣ Fetch backend feedbacks and merge
    async function loadFeedbacks() {
      try {
        const res = await axios.get("/api/feedbacks");
        const backend = Array.isArray(res.data) ? res.data.reverse() : [];
        const combined = [...fakeFeedbacks, ...backend];
        setFeedbacks(combined.slice(0, 12));
      } catch (err) {
        console.error("⚠️ Backend fetch failed, showing fake only", err);
      }
    }
    loadFeedbacks();

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, []);

  return (
    <>
    <AppNavbar />
    <section
  className={`feedback-wall ${isMobile ? "mobile" : ""} ${
    isTablet ? "tablet" : ""
  }`}
  id="feedback"
>

      <div className={`feedback-header ${isMobile ? "mobile" : ""}`}>

        <h2 className="feedback-title">What Our Patients Say 💬</h2>
        <p className="feedback-desc">
          See how Seva Sai Nursing Bureau provides trusted care for patients and
          families.
        </p>
      </div>

      {/* Scrolling Row 1 */}
      <div className={`feedback-row feedback-row-top ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`}>

        {[...feedbacks].slice(0, 6).map((f, i) => (
          <div className={`feedback-card ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`} key={i}>

            <p className="comment">“{f.comment}”</p>

            <div className="profile">
              <div className="avatar">{getInitials(f.name)}</div>
              <div>
                <h6 className="name">{f.name}</h6>
                <p className="role">{f.role}</p>
                <p className="location">{f.location}</p>
              </div>
            </div>

            <div className="stars">
              <span className="rating-label">Rating:</span> {renderStars(f.rating)}
            </div>
            <p className="verified">✅ Verified Review</p>
          </div>
        ))}
      </div>

      {/* Scrolling Row 2 */}
      <div className={`feedback-row feedback-row-bottom ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`}>

        {[...feedbacks].slice(6, 12).map((f, i) => (
          <div className={`feedback-card ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`} key={`bottom-${i}`}>

            <p className="comment">“{f.comment}”</p>

            <div className="profile">
              <div className="avatar">{getInitials(f.name)}</div>
              <div>
                <h6 className="name">{f.name}</h6>
                <p className="role">{f.role}</p>
                <p className="location">{f.location}</p>
              </div>
            </div>

            <div className="stars">
              <span className="rating-label">Rating:</span> {renderStars(f.rating)}
            </div>
            <p className="verified">✅ Verified Review</p>
          </div>
        ))}
      </div>
      {/* ➕ Add Feedback Form */}
<div className={`add-feedback-container ${isMobile ? "mobile" : ""}`}>

  <h3 className="add-feedback-title">Share Your Experience 💙</h3>
  <p className="add-feedback-desc">
    Your feedback helps us improve and serve patients better.
  </p>

  <form
    className="add-feedback-form"
    onSubmit={async (e) => {
      e.preventDefault();
      const newFeedback = {
        name: e.target.name.value.trim(),
        phone: e.target.phone.value.trim(),
        role: e.target.role.value.trim(),
        location: e.target.location.value.trim(),
        rating: parseInt(e.target.rating.value),
        comment: e.target.comment.value.trim(),
      };

      if (!newFeedback.name || !newFeedback.comment || !newFeedback.phone) {
        alert("Please fill all required fields.");
        return;
      }

      try {
        await axios.post("http://localhost:5000/api/feedbacks", newFeedback);

        e.target.reset();
        alert("✅ Thank you! Your feedback has been submitted.");
      } catch (err) {
        console.error("Feedback submission failed:", err);
        alert("⚠️ Something went wrong. Please try again later.");
      }
    }}
  >
    <div className="form-row">
      <input type="text" name="name" placeholder="Full Name" required />
      <input type="text" name="phone" placeholder="Phone Number" required />
    </div>
    <div className="form-row">
      <input type="text" name="role" placeholder="Relation or Role (e.g. Daughter of Patient)" />
      <input type="text" name="location" placeholder="City / Location" />
    </div>
    <div className="form-row">
      <select name="rating" defaultValue="5" required>
        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
        <option value="4">⭐⭐⭐⭐ Good</option>
        <option value="3">⭐⭐⭐ Average</option>
        <option value="2">⭐⭐ Poor</option>
        <option value="1">⭐ Very Bad</option>
      </select>
    </div>
    <textarea
      name="comment"
      placeholder="Write your feedback here..."
      rows="3"
      required
    ></textarea>

    <button type="submit" className="submit-btn">Submit Feedback</button>
  </form>
</div>

    </section>
    </>
  );
}
