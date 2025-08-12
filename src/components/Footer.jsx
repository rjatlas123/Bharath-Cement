import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Company Name & Description */}
        <div className="footer-col">
          <h2 className="footer-logo">
            Bharath <span>Cement</span>
          </h2>
          <p className="footer-description">
            Leading provider of quality construction materials, delivering
            excellence for your projects since 1990.
          </p>
          <div className="footer-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <br />
          <p>📞 Phone: +91 98765 43210</p>
          <p>📱 Mobile: +91 91234 56789</p>
          <p>✉ Email: info@bharathcement.com</p>
        </div>

        {/* Column 3: Products */}
        <div className="footer-col">
          <h3>Products</h3>
          <br />
          <ul>
            <li>Cement</li>
            <li>TMT Bar</li>
            <li>Aggregate</li>
            <li>Block & Brick</li>
            <li>Construction Chemical</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        © 2025 RJ Atlas Digital AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
