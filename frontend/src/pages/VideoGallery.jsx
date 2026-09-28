import React from "react";
import "./VideoGallery.css";
import Navbar3D from "../components/Navbar3D";

const videos = [
    {
        src: "/videos/ssnb-care.mp4",
        title: "Moments of Care",
        description: "Compassion and dedication in every moment.",
    },
];

export default function VideoGallery() {
    return (
        <div className="video-gallery-page">

            {/* Navbar */}
            <Navbar3D />

            {/* Cinematic Background */}
            <div className="video-gallery-background">
                <div className="video-gallery-bg-image" />
                <div className="video-gallery-overlay" />
            </div>

            {/* Back Button */}
            <button
                className="video-gallery-back"
                onClick={() => window.history.back()}
            >
                <span>←</span>
                BACK
            </button>

            {/* Heading */}
            <div className="video-gallery-heading">

                <span>
                    SEVA SAI NURSING BUREAU
                </span>

                <h1>
                    Our Stories
                </h1>

                <p>
                    Watch our moments of care and compassion
                </p>

            </div>

            {/* Video Area */}
            <main className="video-gallery-content">

                {videos.map((video, index) => (

                    <div
                        className="video-gallery-card"
                        key={index}
                    >

                        <div className="video-wrapper">

                            <video
                                src={video.src}
                                controls
                                playsInline
                                preload="metadata"
                            />

                            <div className="video-glass" />

                        </div>

                        <div className="video-info">

                            <span className="video-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div>
                                <h2>
                                    {video.title}
                                </h2>

                                <p>
                                    {video.description}
                                </p>
                            </div>

                        </div>

                    </div>

                ))}

            </main>

        </div>
    );
}