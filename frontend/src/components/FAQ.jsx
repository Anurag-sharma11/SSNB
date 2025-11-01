import React, { useState } from "react";
import "./FAQ.css";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Seva Sai Nursing Bureau?",
      answer:
        "Seva Sai Nursing Bureau provides professional nursing and caretaker services for patients, elderly people, and those needing home medical assistance.",
    },
    {
      question: "Who can avail your nursing services?",
      answer:
        "Our services are available for patients recovering from surgeries, senior citizens, and anyone requiring home medical support.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes, we provide 24/7 nursing support, including day and night shifts as per patient needs.",
    },
    {
      question: "How to book a nurse or caretaker?",
      answer:
        "You can easily book by calling us or filling out the online request form available on our website.",
    },
    {
      question: "What are your service charges?",
      answer:
        "Charges depend on the type of service, duration, and patient condition. Contact us for an exact quote.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, bookings can be canceled or modified by contacting our support team within 24 hours of the service time.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <button className="faq-tag">FAQ</button>
          <h2>Have a question?</h2>
          <p>Browse through our frequently asked topics.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={index} className="faq-box">
              <div
                className={`faq-item ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question">{item.question}</span>
                <span
                  className={`faq-arrow ${
                    openIndex === index ? "rotate" : ""
                  }`}
                >
                  ›
                </span>
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                  <div className="faq-contact">
                    <p>
                      📞 <strong>Call us:</strong> +91 7835929812 <br></br>
                      📞 <strong>Call us:</strong> +91 9999327975
                    </p>
                    <button
                      className="faq-form-btn"
                      onClick={() => navigate("/form")}
                    >
                      Fill Out Form
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
