import React from "react";
import "./Services.css";
import { FaTruck, FaHome, FaCubes, FaHeadset } from "react-icons/fa";

const Services = () => {
  const services = [
    { icon: <FaTruck />, title: "Fast Delivery", desc: "Ensuring materials reach all parts of Kerala promptly." },
    { icon: <FaHome />, title: "Technical Support", desc: " Expert consultation to help with material selection and use." },
    { icon: <FaCubes />, title: "Stock Management", desc: " Offering inventory solutions tailored to clients' project needs." },
    { icon: <FaHeadset />, title: " Custom Orders", desc: "Sourcing materials as per client-specific requirements." }
  ];

  return (
    <section className="services">
      <h2 className="services-title">Our <span className="cement-text">Services</span></h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
