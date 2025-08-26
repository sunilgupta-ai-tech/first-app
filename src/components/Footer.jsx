import React, { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaShieldAlt,
  FaHeadset,
  FaRocket
} from "react-icons/fa";
import "../assets/css/Footer.css";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img src={logo} alt="Bizstrap Logo" />
              <div className="logo-text">
                <h3>Bizstrap</h3>
                <p>Digital Excellence</p>
              </div>
            </div>
            <p className="company-description">
              We design and build fast, SEO-friendly websites and applications that drive business growth. 
              Our team of experts delivers cutting-edge digital solutions.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog & News</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="/services/web-development">Web Development</a></li>
              <li><a href="/services/ui-ux-design">UI/UX Design</a></li>
              <li><a href="/services/ecommerce">Ecommerce Solutions</a></li>
              <li><a href="/services/seo">SEO & Marketing</a></li>
              <li><a href="/services/maintenance">Maintenance</a></li>
              <li><a href="/services/consulting">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <p>123 Business Street</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <p>+1 (234) 567-890</p>
                  <p>+1 (234) 567-891</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <p>hello@bizstrap.com</p>
                  <p>support@bizstrap.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section newsletter">
            <h4 className="footer-title">Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates and insights.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  <FaArrowRight />
                </button>
              </div>
              {isSubscribed && (
                <p className="success-message">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="features-bar">
        <div className="features-container">
          <div className="feature-item">
            <FaRocket className="feature-icon" />
            <div>
              <h5>Fast Delivery</h5>
              <p>Quick turnaround times</p>
            </div>
          </div>
          <div className="feature-item">
            <FaHeadset className="feature-icon" />
            <div>
              <h5>24/7 Support</h5>
              <p>Always here to help</p>
            </div>
          </div>
          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <div>
              <h5>Secure & Reliable</h5>
              <p>Your data is safe with us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; 2025 Bizstrap. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
