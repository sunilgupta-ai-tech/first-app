import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "../assets/css/Footer.css";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-about">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <div>
              <h2>Bizstrap</h2>
              <p>Business Theme</p>
            </div>
          </div>
          <p>
            Transforming businesses with innovative solutions and exceptional
            service. We're committed to delivering excellence in every project
            we undertake.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 123 Business Street, Suite 100, New York, NY 10001</p>
          <p><FaPhoneAlt /> +1 (234) 567-890</p>
          <p><FaEnvelope /> info@example.com</p>
          <p><FaClock /> Mon - Fri: 9:00 AM - 6:00 PM <br /> Sat: 10:00 AM - 4:00 PM</p>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">➤</button>
          </form>
          <label>
            <input type="checkbox" /> I agree to the <a href="/privacy-policy">Privacy Policy</a>
          </label>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Tortoiz Themes. All rights reserved.</p>
        <div>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
