import React, { useEffect, useRef, useState } from "react";
import "./GalleryTest.css";
import Navbar3D from "../components/Navbar3D";
import VideoGallery from "./VideoGallery";

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
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
];

export default function GalleryTest() {
    const [showGallery, setShowGallery] = useState(false);
    const [showVideoGallery, setShowVideoGallery] = useState(false);

    const galleryRef = useRef(null);
    const cardsRef = useRef([]);

    /*
    =========================================================
    OPEN GALLERY
    =========================================================
    */

    const openGallery = () => {
        setShowGallery(true);

        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
        });
    };

    /*
    =========================================================
    CLOSE GALLERY
    =========================================================
    */

    const closeGallery = () => {
        setShowGallery(false);

        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    };



    /*
    =========================================================
    3D SCROLL ENGINE
    =========================================================
    */

    useEffect(() => {
        if (!showGallery) return;

        const section = galleryRef.current;

        if (!section) return;

        let rafId = null;

        const updateGallery = () => {
            rafId = null;

            const rect = section.getBoundingClientRect();

            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;

            /*
            ---------------------------------------------------
            HOW MUCH OF THE GALLERY HAS BEEN SCROLLED
            ---------------------------------------------------
            */

            const maxScroll =
                sectionHeight - viewportHeight;

            const scrollTop =
                Math.max(
                    0,
                    Math.min(
                        -rect.top,
                        maxScroll
                    )
                );

            const progress =
                maxScroll > 0
                    ? scrollTop / maxScroll
                    : 0;

            /*
            ---------------------------------------------------
            CURRENT IMAGE
            ---------------------------------------------------

            0     = Image 1
            1     = Image 2
            2     = Image 3
            etc.
            */

            const currentPosition =
                progress * (images.length - 1);

            /*
            ---------------------------------------------------
            MOVE EACH CARD
            ---------------------------------------------------
            */

            cardsRef.current.forEach(
                (card, index) => {

                    if (!card) return;

                    /*
                    Distance from active image

                    0     = active
                    1     = next image
                    -1    = previous image
                    */

                    const distance =
                        index - currentPosition;

                    const absoluteDistance =
                        Math.abs(distance);

                    /*
                    ------------------------------------------------
                    DEPTH
                    ------------------------------------------------
                    */

                    const depth =
                        Math.min(
                            absoluteDistance,
                            4
                        );

                    /*
                    Active image = 0px
                    Nearby images = behind camera
                    */

                    const z =
                        -depth * 420;

                    /*
                    ------------------------------------------------
                    HORIZONTAL POSITION
                    ------------------------------------------------
                    */

                    /*
                    Images waiting to come forward sit slightly
                    to the right.

                    Previous images move slightly to the left.
                    */

                    const x =
                        distance * 34;

                    /*
                    ------------------------------------------------
                    SCALE
                    ------------------------------------------------
                    */

                    const scale =
                        Math.max(
                            0.62,
                            1 -
                            absoluteDistance *
                            0.15
                        );

                    /*
                    ------------------------------------------------
                    ROTATION
                    ------------------------------------------------
                    */

                    const rotateY =
                        Math.max(
                            -18,
                            Math.min(
                                18,
                                distance * -9
                            )
                        );

                    const rotateX =
                        Math.min(
                            4,
                            absoluteDistance * 1.5
                        );

                    /*
                    ------------------------------------------------
                    OPACITY
                    ------------------------------------------------
                    */

                    let opacity =
                        1 -
                        absoluteDistance *
                        0.45;

                    opacity =
                        Math.max(
                            0,
                            Math.min(
                                1,
                                opacity
                            )
                        );

                    /*
                    ------------------------------------------------
                    BLUR
                    ------------------------------------------------
                    */

                    const blur =
                        Math.min(
                            10,
                            absoluteDistance * 3.5
                        );

                    /*
                    ------------------------------------------------
                    VERTICAL MOVEMENT
                    ------------------------------------------------
                    */

                    const y =
                        Math.sin(
                            index * 1.7
                        ) *
                        Math.min(
                            absoluteDistance * 4,
                            12
                        );

                    /*
                    ------------------------------------------------
                    APPLY TRANSFORM
                    ------------------------------------------------
                    */

                    card.style.transform = `
                        translate3d(
                            calc(-50% + ${x}%),
                            calc(-50% + ${y}%),
                            ${z}px
                        )
                        rotateY(${rotateY}deg)
                        rotateX(${rotateX}deg)
                        scale(${scale})
                    `;

                    /*
                    ------------------------------------------------
                    OPACITY
                    ------------------------------------------------
                    */

                    card.style.opacity =
                        opacity;

                    /*
                    ------------------------------------------------
                    BLUR
                    ------------------------------------------------
                    */

                    card.style.filter =
                        `blur(${blur}px)`;

                    /*
                    ------------------------------------------------
                    Z INDEX
                    ------------------------------------------------
                    */

                    /*
                    Active image should ALWAYS be above
                    nearby images.
                    */

                    card.style.zIndex =
                        Math.round(
                            1000 -
                            absoluteDistance *
                            100
                        );

                    /*
                    ------------------------------------------------
                    ACTIVE CLASS
                    ------------------------------------------------
                    */

                    if (
                        absoluteDistance < 0.5
                    ) {
                        card.classList.add(
                            "gallery-card-active"
                        );
                    } else {
                        card.classList.remove(
                            "gallery-card-active"
                        );
                    }
                }
            );
        };

        const handleScroll = () => {
            if (!rafId) {
                rafId =
                    requestAnimationFrame(
                        updateGallery
                    );
            }
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            handleScroll
        );

        updateGallery();

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                handleScroll
            );

            if (rafId) {
                cancelAnimationFrame(
                    rafId
                );
            }
        };

    }, [showGallery]);

    /*
=========================================================
VIDEO GALLERY
=========================================================
*/

    if (showVideoGallery) {
        return <VideoGallery />;
    }

    /*
    =========================================================
    FULL IMAGE GALLERY
    =========================================================
    */

    if (showGallery) {
        return (
            <div className="gallery-3d-page">

                <Navbar3D />

                {/* Background */}

                <div className="gallery-3d-background">
                    <div className="gallery-3d-bg-image" />
                    <div className="gallery-3d-overlay" />
                </div>


                {/* Back */}

                <button
                    className="gallery-back-button"
                    onClick={closeGallery}
                >
                    <span>←</span>
                    BACK
                </button>


                {/* Heading */}

                <div className="gallery-3d-heading">

                    <span>
                        SEVA SAI NURSING BUREAU
                    </span>

                    <h1>
                        Moments of Care
                    </h1>

                    <p>
                        Scroll to explore our gallery
                    </p>

                </div>


                {/* =================================================
                    SCROLL SECTION
                ================================================= */}

                <section
                    ref={galleryRef}
                    className="gallery-3d-scroll"
                >

                    {/* Sticky camera */}

                    <div className="gallery-3d-sticky">

                        <div className="gallery-3d-scene">

                            {images.map(
                                (src, index) => (

                                    <div
                                        key={index}
                                        ref={(el) => {
                                            cardsRef.current[index] =
                                                el;
                                        }}
                                        className="gallery-3d-card"
                                    >

                                        <div className="gallery-3d-card-image">

                                            <img
                                                src={src}
                                                alt={`SSNB Gallery ${index + 1}`}
                                            />

                                        </div>


                                        {/* Glass overlay */}

                                        <div className="gallery-card-glass" />


                                        {/* Image number */}

                                        <div className="gallery-3d-number">

                                            {String(
                                                index + 1
                                            ).padStart(
                                                2,
                                                "0"
                                            )}

                                            <span>
                                                / {String(
                                                    images.length
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </section>


                {/* Scroll hint */}

                <div className="gallery-3d-scroll-hint">

                    <span />

                    SCROLL

                </div>

            </div>
        );
    }


    /*
    =========================================================
    LANDING PAGE
    =========================================================
    */

    return (
        <div className="gallery-test-page">

            <Navbar3D />


            {/* Cinematic background */}

            <div className="gallery-bg">

                <div className="gallery-bg-image" />

                <div className="gallery-bg-overlay" />

            </div>


            {/* Rain */}

            <div className="rain-layer">

                {Array.from({
                    length: 45,
                }).map((_, i) => (

                    <span
                        key={i}
                        className="rain-drop"
                        style={{
                            "--x":
                                `${Math.random() * 100}%`,

                            "--delay":
                                `${Math.random() * 6}s`,

                            "--duration":
                                `${4 + Math.random() * 5}s`,

                            "--size":
                                `${2 + Math.random() * 5}px`,
                        }}
                    />

                ))}

            </div>


            {/* Landing */}

            <main className="gallery-test-content">

                <div className="gallery-heading">

                    <span className="gallery-eyebrow">
                        SEVA SAI NURSING BUREAU
                    </span>

                    <h1>
                        Our Gallery
                    </h1>

                    <p>
                        Moments of care, compassion and dedication.
                    </p>

                </div>


                <div className="gallery-choice">

                    {/* IMAGES */}

                    <button
                        className="gallery-choice-card images-card"
                        onClick={openGallery}
                    >

                        <div className="choice-image choice-image-one" />

                        <div className="choice-glass" />

                        <div className="choice-content">

                            <span className="choice-number">
                                01
                            </span>

                            <div>

                                <h2>
                                    Images
                                </h2>

                                <p>
                                    Explore our moments of care
                                </p>

                            </div>

                            <span className="choice-arrow">
                                ↗
                            </span>

                        </div>

                    </button>


                    {/* VIDEOS */}

                    <button
                        className="gallery-choice-card videos-card"
                        onClick={() => setShowVideoGallery(true)}
                    >

                        <div className="choice-image choice-image-two" />

                        <div className="choice-glass" />

                        <div className="choice-content">

                            <span className="choice-number">
                                02
                            </span>

                            <div>

                                <h2>
                                    Videos
                                </h2>

                                <p>
                                    Watch our stories in motion
                                </p>

                            </div>

                            <span className="choice-arrow">
                                ↗
                            </span>

                        </div>

                    </button>

                </div>


                <div className="gallery-scroll">

                    <span />

                    SCROLL TO EXPLORE

                </div>

            </main>

        </div>
    );
}