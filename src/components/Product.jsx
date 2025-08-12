import React from "react";
import "./Product.css";
import cementImage from "../assets/cement1.jpg.jpg";
import steelImage from "../assets/aggregrate.jpg";
import bricksImage from "../assets/others.jpg.jpg";

const Product = () => {
  return (
    <div className="products-wrapper">
      <h2 className="section-title">Our Products</h2>

      {/* Product Images */}
      <div className="products-container">
        <div className="product-item">
          <img src={cementImage} alt="Cement" />
          <h3>Cement</h3>
        </div>
        <div className="product-item">
          <img src={steelImage} alt="Steel" />
          <h3>Steel & Aggregates</h3>
        </div>
        <div className="product-item">
          <img src={bricksImage} alt="Bricks" />
          <h3>Blocks & Bricks</h3>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="quality-section">
        <h2>Quality Assurance: <span>Strength You Can Trust</span></h2>
        <div className="quality-grid">
          <div className="quality-card">
            <h3>Quality Control</h3>
            <p>Strict inspection at every supply stage ensures excellence.</p>
          </div>
          <div className="quality-card">
            <h3>Standards Compliance</h3>
            <p>Adhering to BIS codes & ISO 9001:2015 certification.</p>
          </div>
          <div className="quality-card">
            <h3>Certified Sourcing</h3>
            <p>All materials sourced from certified, trusted manufacturers.</p>
          </div>
          <div className="quality-card">
            <h3>In-House Testing</h3>
            <p>Advanced lab facilities for rigorous material testing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
