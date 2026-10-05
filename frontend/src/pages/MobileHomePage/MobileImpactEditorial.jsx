import React from "react";
import "./MobileImpactEditorial.css";
import impactImage from "../../assets/impact image.png";

const MobileImpactEditorial = () => {
    return (
        <section className="mei-impact">
            <img
                src={impactImage}
                alt="Our Impact"
                className="mei-impact-image"
            />
        </section>
    );
};

export default MobileImpactEditorial;