import React, { useEffect, useRef, useState } from "react";
import "./HeroScrollTest.css";
import BookNurseModal from "../components/BookNurseModal";
import { useNavigate } from "react-router-dom";


const FRAME_COUNT = 300;

// Overall scroll length
const SCROLL_HEIGHT = 800;

// Frame smoothing
const FRAME_SMOOTHNESS = 0.12;

const getFramePath = (index) => {
  const frameNumber = String(index + 1).padStart(3, "0");
  return `/hero-frames/ezgif-frame-${frameNumber}.jpg`;
};

export default function HeroScrollTest() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const lastDrawnFrameRef = useRef(-1);

  const animationRef = useRef(null);

  const [loaded, setLoaded] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // --------------------------------------------------
  // PRELOAD ALL FRAMES
  // --------------------------------------------------

  useEffect(() => {
    let cancelled = false;

    const images = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();

      img.src = getFramePath(i);

      img.onload = () => {
        if (!cancelled) {
          setLoaded((prev) => prev + 1);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, []);

  // --------------------------------------------------
  // DRAW FRAME
  // --------------------------------------------------

  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;

    if (!canvas || !images[frameIndex]) return;

    const img = images[frameIndex];

    if (!img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.clearRect(0, 0, width, height);

    const imageRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth;
    let drawHeight;
    let offsetX;
    let offsetY;

    if (imageRatio > canvasRatio) {
      drawHeight = height;
      drawWidth = height * imageRatio;

      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = width;
      drawHeight = width / imageRatio;

      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.drawImage(
      img,
      offsetX,
      offsetY,
      drawWidth,
      drawHeight
    );

    lastDrawnFrameRef.current = frameIndex;
  };

  // --------------------------------------------------
  // SMOOTH FRAME ANIMATION
  // --------------------------------------------------

  const animateFrames = () => {
    const current = currentFrameRef.current;
    const target = targetFrameRef.current;

    const difference = target - current;

    let nextFrame;

    if (Math.abs(difference) < 0.05) {
      nextFrame = target;
    } else {
      nextFrame =
        current + difference * FRAME_SMOOTHNESS;
    }

    currentFrameRef.current = nextFrame;

    const frameToDraw = Math.round(nextFrame);

    if (frameToDraw !== lastDrawnFrameRef.current) {
      drawFrame(frameToDraw);
    }

    animationRef.current =
      requestAnimationFrame(animateFrames);
  };

  // --------------------------------------------------
  // SCROLL
  // --------------------------------------------------

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const section =
          document.querySelector(".hero-scroll-test");

        if (!section) {
          ticking = false;
          return;
        }

        const rect =
          section.getBoundingClientRect();

        const scrollDistance =
          section.offsetHeight -
          window.innerHeight;

        const scrolled = Math.min(
          Math.max(-rect.top, 0),
          scrollDistance
        );

        const progress =
          scrollDistance > 0
            ? scrolled / scrollDistance
            : 0;

        const targetFrame =
          progress * (FRAME_COUNT - 1);

        targetFrameRef.current =
          Math.max(
            0,
            Math.min(
              FRAME_COUNT - 1,
              targetFrame
            )
          );

        setScrollProgress(progress);

        ticking = false;
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    animationRef.current =
      requestAnimationFrame(animateFrames);

    setTimeout(() => {
      drawFrame(0);
    }, 100);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, []);

  // --------------------------------------------------
  // RESIZE
  // --------------------------------------------------

  useEffect(() => {
    const handleResize = () => {
      drawFrame(
        Math.round(currentFrameRef.current)
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  // --------------------------------------------------
  // DRAW WHEN FRAMES LOAD
  // --------------------------------------------------

  useEffect(() => {
    if (loaded > 0) {
      drawFrame(
        Math.round(currentFrameRef.current)
      );
    }
  }, [loaded]);

  // --------------------------------------------------
  // SECTION PROGRESS
  // --------------------------------------------------

  const getSectionStyle = (start, end) => {
    const sectionProgress =
      (scrollProgress - start) /
      (end - start);

    const clamped =
      Math.max(0, Math.min(1, sectionProgress));

    const fadeIn =
      Math.min(clamped * 5, 1);

    const fadeOut =
      Math.min((1 - clamped) * 5, 1);

    const opacity =
      Math.min(fadeIn, fadeOut);

    const translateY =
      40 - clamped * 40;

    const scale =
      0.94 + clamped * 0.06;

    return {
      opacity,
      transform: `
        translate3d(0, ${translateY}px, 0)
        scale(${scale})
      `,
      pointerEvents:
        opacity > 0.05
          ? "auto"
          : "none",
    };
  };


    // --------------------------------------------------
  // ORIGINAL HERO — APPEARS NEAR FRAME 300
  // --------------------------------------------------

  const getOriginalHeroStyle = () => {
    // Start appearing around frame 260
    // Fully visible at frame 300
    const start = 260 / (FRAME_COUNT - 1);

    const progress =
      (scrollProgress - start) / (1 - start);

    const clamped =
      Math.max(0, Math.min(1, progress));

    // Smooth fade
    const opacity = clamped;

    // Smooth movement from left
    const translateX = -60 + clamped * 60;

    return {
      opacity,

      transform: `
        translate3d(${translateX}px, 0, 0)
      `,

      pointerEvents:
        opacity > 0.05
          ? "auto"
          : "none",
    };
  };

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <section
      className="hero-scroll-test"
      style={{
        height: `${SCROLL_HEIGHT}vh`,
      }}
    >

      <div className="hero-scroll-sticky">

        {/* ------------------------------------------
            CANVAS
        ------------------------------------------ */}

        <canvas
          ref={canvasRef}
          className="hero-scroll-canvas"
        />

                {/* ------------------------------------------
            ORIGINAL HERO — FRAME 300
        ------------------------------------------ */}

        <div
          className="original-hero-content"
          style={getOriginalHeroStyle()}
        >
          <div className="original-hero-inner">

            <h1 className="original-hero-title">
              Empowering Families
              <br />
              with{" "}
              <span>
                Trusted Nursing Care
              </span>
            </h1>

            <div className="original-hero-care">
              24 × 7 Elder care
            </div>

            <p className="original-hero-description">
              At Seva Sai Nursing Bureau, we bring
              professional healthcare to your home —
              combining medical expertise with
              compassion and trust.
            </p>

            <div className="original-hero-buttons">

                <button
                    className="original-btn"
                    onClick={() => setShowModal(true)}
                >
                    Book a Nurse
                </button>

                <button
                    className="original-btn"
                    onClick={() => navigate("/about")}
                >
                    Learn More
                </button>

            </div>

          </div>
        </div>

        {/* ------------------------------------------
            01 — HERO
        ------------------------------------------ */}

        <div
          className="scroll-content hero-content"
          style={getSectionStyle(0, 0.16)}
        >
          <div className="hero-content-inner">

            <p className="eyebrow">
              PROFESSIONAL HOME HEALTHCARE
            </p>

            <h1>
              SEVA SAI
              <br />
              NURSING BUREAU
            </h1>

            <p className="hero-description">
              Compassionate healthcare,
              professional expertise,
              right at your home.
            </p>

            <div className="hero-buttons">
                <button onClick={() => setShowModal(true)}>
                    BOOK A NURSE
                </button>

                <button
                    className="secondary"
                    onClick={() => navigate("/about")}
                >
                    LEARN MORE
                </button>
            </div>

          </div>
        </div>

        {/* ------------------------------------------
            02 — STATS
        ------------------------------------------ */}

        <div
          className="scroll-content stats-content"
          style={getSectionStyle(0.14, 0.29)}
        >
          <div className="section-heading">
            <span>01 — TRUSTED CARE</span>

            <h2>
              CARE YOU CAN
              <br />
              COUNT ON.
            </h2>
          </div>

          <div className="stats-card">

            <div className="stat">
              <strong>24×7</strong>
              <span>CARE SUPPORT</span>
            </div>

            <div className="stat">
              <strong>100+</strong>
              <span>TRAINED CAREGIVERS</span>
            </div>

            <div className="stat">
              <strong>500+</strong>
              <span>FAMILIES SERVED</span>
            </div>

            <div className="stat">
              <strong>10+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

          </div>
        </div>

        {/* ------------------------------------------
            03 — SERVICES
        ------------------------------------------ */}

        <div
          className="scroll-content services-content"
          style={getSectionStyle(0.27, 0.47)}
        >
          <div className="section-heading">

            <span>02 — WHAT WE PROVIDE</span>

            <h2>
              HEALTHCARE
              <br />
              AT HOME.
            </h2>

          </div>

          <div className="services-grid">

            <div className="service-card">
              <span>01</span>
              <h3>Elder Care</h3>
              <p>
                Dedicated support and
                companionship for seniors.
              </p>
            </div>

            <div className="service-card">
              <span>02</span>
              <h3>Patient Care</h3>
              <p>
                Professional assistance
                throughout recovery.
              </p>
            </div>

            <div className="service-card">
              <span>03</span>
              <h3>Nursing Care</h3>
              <p>
                Skilled nursing services
                in the comfort of home.
              </p>
            </div>

            <div className="service-card">
              <span>04</span>
              <h3>ICU Care</h3>
              <p>
                Specialized healthcare
                support at home.
              </p>
            </div>

            <div className="service-card">
              <span>05</span>
              <h3>Home Attendant</h3>
              <p>
                Reliable daily assistance
                for patients and families.
              </p>
            </div>

            <div className="service-card">
              <span>06</span>
              <h3>Physiotherapy</h3>
              <p>
                Support for rehabilitation
                and recovery.
              </p>
            </div>

          </div>
        </div>

        {/* ------------------------------------------
            04 — ETHOS
        ------------------------------------------ */}

        <div
          className="scroll-content ethos-content"
          style={getSectionStyle(0.45, 0.62)}
        >

          <div className="ethos-layout">

            <div className="ethos-number">
              03
            </div>

            <div>

              <p className="eyebrow">
                OUR ETHOS
              </p>

              <h2>
                CARE BEYOND
                <br />
                MEDICINE.
              </h2>

              <p className="large-copy">
                At Seva Sai Nursing Bureau,
                we combine medical precision
                with human compassion.
              </p>

            </div>

          </div>

          <div className="ethos-points">

            <div>
              <span>01</span>
              <strong>COMPASSION</strong>
              <p>
                Treating every patient
                with dignity and respect.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>TRUST</strong>
              <p>
                Building confidence through
                reliable professional care.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>EXPERTISE</strong>
              <p>
                Professional healthcare
                from trained caregivers.
              </p>
            </div>

          </div>

        </div>

        {/* ------------------------------------------
            05 — PROCESS
        ------------------------------------------ */}

        <div
          className="scroll-content process-content"
          style={getSectionStyle(0.60, 0.78)}
        >

          <div className="section-heading">

            <span>04 — HOW IT WORKS</span>

            <h2>
              SIMPLE.
              <br />
              PERSONAL.
              <br />
              RELIABLE.
            </h2>

          </div>

          <div className="process-list">

            <div className="process-item">
              <span>01</span>
              <div>
                <h3>CONTACT</h3>
                <p>
                  Tell us what kind of
                  care you need.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span>02</span>
              <div>
                <h3>ASSESSMENT</h3>
                <p>
                  We understand the
                  patient's requirements.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span>03</span>
              <div>
                <h3>MATCH</h3>
                <p>
                  We arrange the right
                  caregiver for you.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span>04</span>
              <div>
                <h3>CARE</h3>
                <p>
                  Professional care
                  begins at home.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ------------------------------------------
            06 — FINAL CTA
        ------------------------------------------ */}

        <div
          className="scroll-content final-content"
          style={getSectionStyle(0.76, 1)}
        >

          <div className="final-card">

            <p className="eyebrow">
              SEVA SAI NURSING BUREAU
            </p>

            <h2>
              CARE THAT
              <br />
              FEELS LIKE HOME.
            </h2>

            <p>
              Professional healthcare.
              Compassionate people.
              Right where you need it.
            </p>

            <div className="hero-buttons">

                <button onClick={() => setShowModal(true)}>
                    BOOK A NURSE
                </button>

              <button className="secondary">
                CONTACT US
              </button>

            </div>

          </div>

        </div>

        {/* Loading */}

        {loaded < FRAME_COUNT && (
          <div className="hero-scroll-loading">
            Loading {loaded}/{FRAME_COUNT}
          </div>
        )}

      </div>
      
        <BookNurseModal
            show={showModal}
            onClose={() => setShowModal(false)}
        />

    </section>
  );
}