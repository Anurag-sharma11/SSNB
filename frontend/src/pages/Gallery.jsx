import React, { useEffect } from "react";
import "./Gallery.css";
import AppNavbar from "../components/AppNavbar";

// ✅ Import your local images here
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";

export default function GalleryTry() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".parallax-image");
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // ✅ Use imported images instead of URLs
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

  return (
    <>
      {/* ✅ Navbar on top */}
      <AppNavbar />

      {/* ✅ Add top margin to avoid overlap with fixed navbar */}
      <div className="parallax-wall-container mt-5 pt-5">
        <h1 className="parallax-title">Our Moments of Care</h1>

        <div className="parallax-grid">
          {imgs.map((src, i) => (
            <div className="parallax-item" key={i}>
              <div className="parallax-image">
                <img src={src} alt={`gallery-${i}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}