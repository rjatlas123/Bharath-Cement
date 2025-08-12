import React from "react";
import "./Navbar.css";
import logo from "../assets/Screenshot_2025-08-12_110952-removebg-preview.png"; // adjust path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h1>
          BHARATH <span className="cement-text">CEMENT</span>
        </h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#brands">Brands</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
