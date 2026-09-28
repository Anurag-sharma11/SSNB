import React from "react";
import Navbar3D from "../components/Navbar3D";import "./About.css";
import logo from "../assets/Logo.png";

import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";
import CompanyTimeline from "../components/CompanyTimeline";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function About() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <>
      <Navbar3D />

      <section
  className="about-section"
  style={{
    paddingTop: isMobile || isTablet ? "110px" : undefined, 
    marginLeft: isMobile || isTablet ? "0px" : undefined,
    flexDirection: isMobile || isTablet ? "column" : undefined,
    textAlign: isMobile ? "center" : undefined,
  }}
>

        <div className="about-content">
          <h1
            className="about-title"
            style={{ textAlign: isMobile ? "center" : "left" }}
          >
            About Us
          </h1>

          <p className="about-text">
            Welcome to Seva Sai Nursing Bureau — a trusted name in providing skilled and compassionate nursing staff across Delhi NCR. Our mission is to deliver quality healthcare assistance and support for patients at home and hospitals.
          </p>

          <p className="about-text">
            We specialize in trained nurses, attendants, and caretakers who focus on improving patients’ comfort, recovery, and overall well-being. Whether it’s 24/7 care or part-time support, we ensure you get the best service with empathy and professionalism.
          </p>

          <p className="about-text">
            Choosing Seva Sai Nursing Bureau means choosing{" "}
            <b>reliability, professionalism, and peace of mind</b>.
            We don’t just provide medical help  we build relationships based on empathy, care, and genuine human connection.
          </p>
        </div>

        <div
          className="about-image"
          style={{
            marginTop: isMobile ? "25px" : "0",
          }}
        >
          <img
            src={logo}
            alt="Company Logo"
            style={{
              width: isMobile ? "220px" : isTablet ? "280px" : "350px",
            }}
          />
        </div>
      </section>
      {/* Add Timeline Component */}
       <CompanyTimeline /> 

      {/* Our Services Section */}
       <OurServices />

       {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
         <FAQ />

         {/* Footer Component */}
          <Footer />

    </>
  );
}
