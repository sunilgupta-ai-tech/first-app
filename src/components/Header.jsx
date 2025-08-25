import "../assets/css/Header.css";
import React, { useState } from "react";
import { FaCompass, FaPencilRuler, FaCode, FaShoppingCart, FaTachometerAlt, FaLifeRing, FaListUl } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // your logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const handleToggle = () => setIsOpen((v) => !v);
  const handleNavigate = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };
  const handleServicesToggle = (e) => {
    // Only toggle on mobile (when burger menu is used)
    if (window.matchMedia && window.matchMedia("(max-width: 600px)").matches) {
      e.preventDefault();
      setServicesOpen((v) => !v);
    }
  };

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div>
          <h2>Bizstrap</h2>
          <p>Website Development</p>
        </div>
      </div>

      {/* Hamburger */}
      <button className="menu-toggle" aria-label="Toggle menu" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="/" onClick={handleNavigate}>Home</a></li>
          <li><a href="/about" onClick={handleNavigate}>About</a></li>
          <li className={`has-dropdown ${servicesOpen ? "open" : ""}`}>
            <a href="/services" className="dropdown-toggle" onClick={handleServicesToggle}>Services</a>
            {/* Mega Menu on desktop, collapsible list on mobile */}
            <div className="mega">
              <div className="mega-columns">
                <div className="mega-col">
                  <h4>Digital Experiences</h4>
                  <a href="/services" onClick={handleNavigate}><FaListUl /> All Services</a>
                  <a href="/services/ui-ux-design" onClick={handleNavigate}><FaPencilRuler /> UI/UX Design</a>
                  <a href="/services/discovery-strategy" onClick={handleNavigate}><FaCompass /> Discovery & Strategy</a>
                </div>
                <div className="mega-col">
                  <h4>Enterprise Platforms</h4>
                  <a href="/services/web-development" onClick={handleNavigate}><FaCode /> Web Development</a>
                  <a href="/services/ecommerce" onClick={handleNavigate}><FaShoppingCart /> Ecommerce</a>
                </div>
                <div className="mega-col">
                  <h4>Optimization</h4>
                  <a href="/services/performance-seo" onClick={handleNavigate}><FaTachometerAlt /> Performance & SEO</a>
                  <a href="/services/care-support" onClick={handleNavigate}><FaLifeRing /> Care & Support</a>
                </div>
              </div>
            </div>
          </li>
          <li><a href="/blog" onClick={handleNavigate}>Blog</a></li>
          <li><a href="/portfolio" onClick={handleNavigate}>Portfolio</a></li>
          <li><a href="/login" onClick={handleNavigate}>Login</a></li>
          <li><a href="/register" onClick={handleNavigate}>Register</a></li>
          <li><a href="/contact" onClick={handleNavigate}>Contact</a></li>
        </ul>
      </nav>

      {/* Primary CTA */}
      <div className="actions">
        <a className="cta-btn" href="#contact">Get a Quote</a>
      </div>
    </header>
  );
};

export default Header;

