import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookNurseModal from "../../components/BookNurseModal";
import "./MobileHomePage.css";
import MobileImpactEditorial from "./MobileImpactEditorial";
import img17 from "../../assets/img17.jpg";
import img20 from "../../assets/img20.jpg";
import img15 from "../../assets/img15.jpg";
import SDR from "../../assets/SDR.png";
import par from "../../assets/par.jpg";
import WD from "../../assets/WD.jpeg";
import inj from "../../assets/inj.jpeg";
import phy from "../../assets/phy.png";
import OLOGO from "../../assets/OLOGO.png";
import Footer from "../../components/Footer";
import Navbar3D from "../../components/Navbar3D";
import {
    Network,
    Clock3,
    HeartPulse,
    BadgeCheck,
    IndianRupee,
    TrendingUp
} from "lucide-react";


export default function MobileHomePage() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    

    useEffect(() => {
        const ethosSection = document.querySelector("[data-ethos]");

        if (!ethosSection) return;

        /* -----------------------------------------
           ETHOS INTRO OBSERVER
        ----------------------------------------- */

        const introObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        ethosSection.classList.add("ethos-visible");

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        const intro = ethosSection.querySelector(".mobile-section-intro");

        if (intro) {
            introObserver.observe(intro);
        }



        /* -----------------------------------------
          SERVICES INTRO OBSERVER
       ----------------------------------------- */

        const servicesSection = document.querySelector("[data-services]");

        if (servicesSection) {

            const servicesIntroObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            servicesSection.classList.add("services-visible");

                            observer.unobserve(entry.target);
                        }

                    });
                },
                {
                    threshold: 0.15,
                }
            );

            const servicesIntro =
                servicesSection.querySelector(".mobile-services-intro");

            if (servicesIntro) {
                servicesIntroObserver.observe(servicesIntro);
            }
        }


        /* -----------------------------------------
           ETHOS CARD OBSERVER
        ----------------------------------------- */

        const cardObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ethos-card-visible");

                        // Animate only once
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        const cards = ethosSection.querySelectorAll(".mobile-ethos-card");

        cards.forEach((card) => {
            cardObserver.observe(card);
        });


        /* -----------------------------------------
           CLEANUP
        ----------------------------------------- */

        return () => {
            introObserver.disconnect();
            cardObserver.disconnect();
        };

    }, []);



    return (
        <div className="mobile-home">

            <Navbar3D />

            {/* ================================
          HERO
      ================================= */}

            <section className="mobile-hero">

                {/* Header */}
                <header className="mobile-hero-header">

                    <img
                        src={OLOGO}
                        alt="Seva Sai Nursing Bureau"
                        className="mobile-logo"
                    />

                    <button
                        className="mobile-header-book"
                        onClick={() => setShowModal(true)}
                    >
                        Book Care
                    </button>

                </header>


                {/* Hero Visual */}
                <div className="mobile-hero-visual">

                    <div className="mobile-hero-image">

                        {/* Temporary image area */}
                        <div className="mobile-image-overlay"></div>

                        <div className="mobile-image-label">
                            <span className="mobile-live-dot"></span>
                            HOME HEALTHCARE
                        </div>

                    </div>


                    {/* 24/7 Floating Card */}
                    <div className="mobile-floating-card mobile-care-card">

                        <div className="mobile-floating-icon">
                            +
                        </div>

                        <div>
                            <strong>24 × 7</strong>
                            <span>Care Support</span>
                        </div>

                    </div>


                    {/* Trusted Floating Card */}
                    <div className="mobile-floating-card mobile-trust-card">

                        <div className="mobile-avatar-stack">
                            <span>✓</span>
                        </div>

                        <div>
                            <strong>Trusted Care</strong>
                            <span>For Your Loved Ones</span>
                        </div>

                    </div>

                </div>


                {/* Hero Text */}
                <div className="mobile-hero-text">

                    <div className="mobile-eyebrow">
                        <span></span>
                        COMPASSIONATE HOME HEALTHCARE
                    </div>

                    <h1>
                        Care that
                        <br />
                        <em>feels like home.</em>
                    </h1>

                    <p>
                        Professional nursing and patient care,
                        delivered with compassion, dignity and
                        comfort at your doorstep.
                    </p>


                    {/* CTA */}
                    <div className="mobile-hero-buttons">

                        <button
                            className="mobile-main-cta"
                            onClick={() => setShowModal(true)}
                        >
                            <span>Book a Nurse</span>
                            <b>→</b>
                        </button>

                        <button
                            className="mobile-learn-btn"
                            onClick={() => navigate("/services")}
                        >
                            Explore our services
                            <span>↗</span>
                        </button>

                    </div>


                    {/* Trust Row */}
                    <div className="mobile-trust-row">

                        <div className="mobile-trust-item">
                            <strong>500+</strong>
                            <span>Families Served</span>
                        </div>

                        <div className="mobile-trust-divider"></div>

                        <div className="mobile-trust-item">
                            <strong>10+</strong>
                            <span>Years Experience</span>
                        </div>

                        <div className="mobile-trust-divider"></div>

                        <div className="mobile-trust-item">
                            <strong>24/7</strong>
                            <span>Support</span>
                        </div>

                    </div>

                </div>

            </section>

            {/* ================================
    OUR ETHOS
================================= */}

            <section className="mobile-ethos" data-ethos>

                <div className="mobile-section-intro">

                    <span className="mobile-section-label">
                        OUR ETHOS
                    </span>

                    <h2>
                        Care built on
                        <br />
                        <em>trust & compassion.</em>
                    </h2>

                    <p>
                        At Seva Sai Nursing Bureau, our values form
                        the foundation of everything we do — blending
                        medical precision with human compassion.
                    </p>

                </div>


                <div className="mobile-ethos-list">

                    {/* 01 */}
                    <article className="mobile-ethos-card">

                        <div className="mobile-ethos-number">
                            01
                        </div>

                        <div className="mobile-ethos-icon">
                            🧠
                        </div>

                        <h3>
                            Knowledge-Driven Care
                        </h3>

                        <p>
                            Every nurse at Seva Sai is trained under
                            certified healthcare professionals to ensure
                            evidence-based and safe patient care.
                        </p>

                    </article>


                    {/* 02 */}
                    <article className="mobile-ethos-card">

                        <div className="mobile-ethos-number">
                            02
                        </div>

                        <div className="mobile-ethos-icon">
                            ♥
                        </div>

                        <h3>
                            Empathy First
                        </h3>

                        <p>
                            Beyond treatment, we focus on emotional
                            support and building trust with families
                            through consistent, compassionate service.
                        </p>

                    </article>


                    {/* 03 */}
                    <article className="mobile-ethos-card">

                        <div className="mobile-ethos-number">
                            03
                        </div>

                        <div className="mobile-ethos-icon">
                            ✦
                        </div>

                        <h3>
                            Modern Approach
                        </h3>

                        <p>
                            We embrace digital tracking, supervision
                            systems, and continuous training to provide
                            quality that adapts to modern healthcare.
                        </p>

                    </article>

                </div>

            </section>

            {/* ================================
              SERVICES
       ================================= */}

            <section
                className="mobile-services"
                data-services
            >

                <div className="mobile-section-intro mobile-services-intro">

                    <span className="mobile-section-label">
                        OUR SERVICES
                    </span>

                    <h2>
                        Healthcare,
                        <br />
                        <em>right at home.</em>
                    </h2>

                    <p>
                        Professional home healthcare services
                        designed around the needs of you and
                        your loved ones.
                    </p>

                </div>


                <div className="mobile-services-grid">

                    {/* 01 */}
                    <article className="mobile-service-card">

                        <div className="mobile-service-image">
                            <img
                                src={img17}
                                alt="Patient Care"
                            />

                            <span>01</span>
                        </div>

                        <div className="mobile-service-content">

                            <div className="mobile-service-icon">
                                ♥
                            </div>

                            <h3>Patient Care</h3>

                            <p>
                                24/7 personalized patient support
                                at home by trained caregivers.
                            </p>

                        </div>

                    </article>


                    {/* 02 */}
                    <article className="mobile-service-card">

                        <div className="mobile-service-image">
                            <img
                                src={img20}
                                alt="Elder Caretaker"
                            />

                            <span>02</span>
                        </div>

                        <div className="mobile-service-content">

                            <div className="mobile-service-icon">
                                ♡
                            </div>

                            <h3>Elder Caretaker</h3>

                            <p>
                                Compassionate assistance for seniors
                                with daily activities.
                            </p>

                        </div>

                    </article>


                    {/* 03 */}
                    <article className="mobile-service-card">

                        <div className="mobile-service-image">
                            <img
                                src={img15}
                                alt="Baby Care"
                            />

                            <span>03</span>
                        </div>

                        <div className="mobile-service-content">

                            <div className="mobile-service-icon">
                                ✦
                            </div>

                            <h3>Baby Care</h3>

                            <p>
                                Professional newborn and infant care
                                by certified attendants.
                            </p>

                        </div>

                    </article>


                    {/* 04 */}
                    <article className="mobile-service-card">

                        <div className="mobile-service-image">
                            <img
                                src={SDR}
                                alt="Male Female Nurses"
                            />

                            <span>04</span>
                        </div>

                        <div className="mobile-service-content">

                            <div className="mobile-service-icon">
                                +
                            </div>

                            <h3>Male/Female Nurses</h3>

                            <p>
                                Experienced male and female nurses
                                available for home visits.
                            </p>

                        </div>

                    </article>


                    {/* 05 */}
                    <article className="mobile-service-card service-extra">

                        <div className="mobile-service-image">
                            <img
                                src={par}
                                alt="Paralytic and Fracture Care"
                            />

                            <span>05</span>
                        </div>

                        <div className="mobile-service-content">

                            <div className="mobile-service-icon">
                                ◉
                            </div>

                            <h3>Paralytic & Fracture Care</h3>

                            <p>
                                Specialized support for bedridden,
                                paralytic and injury patients.
                            </p>

                        </div>

                    </article>


                    {/* 06 */}
                    <article className="mobile-service-card service-extra">

                        <div className="mobile-service-image">
                            <img
                                src={WD}
                                alt="Wound Dressing and Medical Assistance"
                            />

                            <span>06</span>
                        </div>

                        <div className="mobile-service-content">

                            <div className="mobile-service-icon">
                                +
                            </div>

                            <h3>Wound Dressing & Medical Assistance</h3>

                            <p>
                                Safe and hygienic dressing,
                                injections, drips and more.
                            </p>

                        </div>

                    </article>


                    {/* 07 */}
                    <article className="mobile-service-card service-extra">

                        <div className="mobile-service-image">
                            <img
                                src={inj}
                                alt="Injection On Call"
                            />

                            <span>07</span>
                        </div>

                        <div className="mobile-service-content">

                            <div className="mobile-service-icon">
                                +
                            </div>

                            <h3>Injection On Call</h3>

                            <p>
                                Certified nurses available for
                                doorstep injections anytime.
                            </p>

                        </div>

                    </article>


                    {/* 08 */}
                    <article className="mobile-service-card service-extra">

                        <div className="mobile-service-image">
                            <img
                                src={phy}
                                alt="Physiotherapy Services"
                            />

                            <span>08</span>
                        </div>

                        <div className="mobile-service-content">

                            <div className="mobile-service-icon">
                                ↗
                            </div>

                            <h3>Physiotherapy Services</h3>

                            <p>
                                Expert physiotherapists for recovery
                                and mobility improvement.
                            </p>

                        </div>

                    </article>

                </div>


                {/* View All Services */}

                <button
                    className="mobile-services-button"
                    onClick={() => navigate("/services")}
                >
                    View All Services
                    <span>→</span>
                </button>

            </section>

            {/* NEW IMPACT */}
            <MobileImpactEditorial />

            {/* ================================
    WHY SEVA SAI
================================= */}

            <section className="mobile-advantage">

                <div className="mobile-advantage-intro">

                    <span className="mobile-section-label">
                        WHY SEVA SAI
                    </span>

                    <h2>
                        Healthcare you
                        <br />
                        <em>can trust.</em>
                    </h2>

                    <p>
                        Compassionate, certified and connected —
                        delivering reliable healthcare right at
                        your doorstep.
                    </p>

                </div>


                <div className="mobile-advantage-list">

                    {/* 01 */}
                    <article className="mobile-advantage-card">

                        <div className="mobile-advantage-top">
                            <span>01</span>

                            <div className="mobile-advantage-icon">
                                <Network size={18} strokeWidth={2} />
                            </div>
                        </div>

                        <h3>
                            Verified Nurse Network
                        </h3>

                        <p>
                            Our certified nurses serve across metro
                            and tier-2 cities, ensuring consistent
                            professional care.
                        </p>

                        <div className="mobile-advantage-tag">
                            CERTIFIED CARE
                        </div>

                    </article>


                    {/* 02 */}
                    <article className="mobile-advantage-card">

                        <div className="mobile-advantage-top">
                            <span>02</span>

                            <div className="mobile-advantage-icon">
                                <Clock3 size={18} strokeWidth={2} />
                            </div>
                        </div>

                        <h3>
                            4× Faster Response
                        </h3>

                        <p>
                            Nurses can be assigned within hours,
                            making the process faster and smoother.
                        </p>

                        <div className="mobile-response-meter">

                            <div>
                                <span>Traditional</span>
                                <i className="meter-short"></i>
                            </div>

                            <div>
                                <span>Seva Sai</span>
                                <i className="meter-long"></i>
                            </div>

                        </div>

                    </article>


                    {/* 03 */}
                    <article className="mobile-advantage-card">

                        <div className="mobile-advantage-top">
                            <span>03</span>

                            <div className="mobile-advantage-icon">
                                <HeartPulse size={18} strokeWidth={2} />
                            </div>
                        </div>

                        <h3>
                            Care Quality Index
                        </h3>

                        <p>
                            Patient satisfaction is measured through
                            follow-ups and recovery feedback.
                        </p>

                        <div className="mobile-quality">

                            <strong>98%</strong>

                            <span>
                                Care Quality
                            </span>

                        </div>

                    </article>


                    {/* 04 */}
                    <article className="mobile-advantage-card">

                        <div className="mobile-advantage-top">
                            <span>04</span>

                            <div className="mobile-advantage-icon">
                                <BadgeCheck size={18} strokeWidth={2} />
                            </div>
                        </div>

                        <h3>
                            24×7 Availability
                        </h3>

                        <p>
                            Round-the-clock nurse coordination and
                            on-call medical support for families.
                        </p>

                        <div className="mobile-availability">
                            <span></span>
                            Available around the clock
                        </div>

                    </article>


                    {/* 05 */}
                    <article className="mobile-advantage-card">

                        <div className="mobile-advantage-top">
                            <span>05</span>

                            <div className="mobile-advantage-icon">
                                <IndianRupee size={18} strokeWidth={2} />
                            </div>
                        </div>

                        <h3>
                            Transparent Pricing
                        </h3>

                        <p>
                            A fair and clear billing model designed
                            around patient-first care.
                        </p>

                        <div className="mobile-pricing">

                            <div className="pricing-care">
                                <strong>90%</strong>
                                <span>Care</span>
                            </div>

                            <div className="pricing-admin">
                                <strong>10%</strong>
                                <span>Admin</span>
                            </div>

                        </div>

                    </article>


                    {/* 06 */}
                    <article className="mobile-advantage-card">

                        <div className="mobile-advantage-top">
                            <span>06</span>

                            <div className="mobile-advantage-icon">
                                <TrendingUp size={18} strokeWidth={2} />
                            </div>
                        </div>

                        <h3>
                            Growing Patient Trust
                        </h3>

                        <p>
                            Expanding our care network and patient
                            satisfaction across 20+ cities in India.
                        </p>

                        <div className="mobile-growth-line">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </article>

                </div>

            </section>




            {/* Booking Modal */}
            <BookNurseModal
                show={showModal}
                onClose={() => setShowModal(false)}
            />
            <Footer />
        </div>


    );
}