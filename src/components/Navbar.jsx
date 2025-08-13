import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/Screenshot_2025-08-12_110952-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h1>
          BHARATH <span className="cement-text">CEMENT</span>
        </h1>
      </div>

      {/* Hamburger Menu */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Nav Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#products" onClick={() => setIsOpen(false)}>Products</a></li>
        <li><a href="#aboutus" onClick={() => setIsOpen(false)}>About Us</a></li>
        <li><a href="#brands" onClick={() => setIsOpen(false)}>Brands</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
