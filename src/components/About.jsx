import React from "react";
import "./About.css";
import aboutImg from "../assets/about.jpg"; // Replace with your image

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">About Us: Our Foundation</h2>

        <div className="about-section">
          <h3 className="about-subtitle">Our History</h3>
          <p>
            Founded in 2000 by the owner's father with humble beginnings.
          </p>
        </div>

        <div className="about-section">
          <h3 className="about-subtitle">Mission & Vision</h3>
          <ul>
            <li>Deliver quality construction materials reliably.</li>
            <li>Become Kerala's leading supplier.</li>
          </ul>
        </div>

        <div className="about-section">
          <h3 className="about-subtitle">Product Expansion</h3>
          <p>
            Started with 3 cement types, now a full-range supplier of building materials.
          </p>
        </div>
      </div>

      <div className="about-image">
        <img src={aboutImg} alt="About Bharath Cement" />
      </div>
    </section>
  );
};

export default About;


