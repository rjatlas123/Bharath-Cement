import React from "react";
import "./Brand.css";

import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.jpg";
import brand5 from "../assets/brand5.jpg";
import brand6 from "../assets/brand6.jpg";
import brand7 from "../assets/brand7.png";
import brand8 from "../assets/brand8.jpg";
import brand9 from "../assets/brand9.png";
import brand10 from "../assets/brand10.png";
import brand11 from "../assets/brand11.png";

const Brand = () => {
  const brands = [
    brand1, brand2, brand3, brand4, brand5, brand6,
    brand7, brand8, brand9, brand10, brand11
  ];

  return (
    <div className="brand-section" id="brands">
      <h2 className="brand-heading">Our Brand Collaborations</h2>
      <div className="brand-grid">
        {brands.map((logo, index) => (
          <div className="brand-card" key={index}>
            <img src={logo} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
