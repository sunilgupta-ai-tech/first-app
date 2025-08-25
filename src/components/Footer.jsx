import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../assets/css/Footer.css";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <div>
              <h2>Bizstrap</h2>
              <p>Website Development</p>
            </div>
          </div>
          <p>
            We design and build fast, SEO-friendly websites and apps that grow
            your business.
          </p>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> New York, USA</p>
          <p><FaPhoneAlt /> +1 (234) 567-890</p>
          <p><FaEnvelope /> hello@bizstrap.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bizstrap. All rights reserved.</p>
        <div>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
