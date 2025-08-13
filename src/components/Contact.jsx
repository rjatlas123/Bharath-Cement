import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New Contact Form Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );

    // Open the default email client (works on desktop, mobile, Gmail app, Outlook, etc.)
    window.location.href = `mailto:info@bharathcement.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">

        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><FaMapMarkerAlt /> Our Location: 123 Main Street, City</p>
          <p><FaPhoneAlt /> Phone: +91 9876543210</p>
          <p><FaEnvelope /> Email: info@bharathcement.com</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
