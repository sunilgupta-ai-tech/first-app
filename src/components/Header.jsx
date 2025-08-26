import "../assets/css/Header.css";
import React, { useState, useEffect } from "react";
import { 
  FaCompass, 
  FaPencilRuler, 
  FaCode, 
  FaShoppingCart, 
  FaTachometerAlt, 
  FaLifeRing, 
  FaListUl,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
  FaUser,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => setIsOpen((v) => !v);
  const handleNavigate = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setSearchOpen(false);
  };
  
  const handleServicesToggle = (e) => {
    if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
      e.preventDefault();
      setServicesOpen((v) => !v);
    }
  };

  return (
    <header className={`header ${isOpen ? "open" : ""} ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <span><FaPhoneAlt /> +1 (234) 567-890</span>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Bizstrap Logo" />
          <div className="logo-text">
            <h2>Bizstrap</h2>
            <p>Digital Excellence</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={handleNavigate}>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link" onClick={handleNavigate}>
                <span>About</span>
              </a>
            </li>
            <li className={`nav-item has-dropdown ${servicesOpen ? "open" : ""}`}>
              <a href="/services" className="nav-link dropdown-toggle" onClick={handleServicesToggle}>
                <span>Services</span>
                <FaCompass className="dropdown-icon" />
              </a>
              <div className="mega-menu">
                <div className="mega-content">
                  <div className="mega-section">
                    <h4>Digital Experiences</h4>
                    <div className="mega-links">
                      <a href="/services" onClick={handleNavigate}>
                        <FaListUl />
                        <div>
                          <span>All Services</span>
                          <small>Complete overview</small>
                        </div>
                      </a>
                      <a href="/services/ui-ux-design" onClick={handleNavigate}>
                        <FaPencilRuler />
                        <div>
                          <span>UI/UX Design</span>
                          <small>User-centered design</small>
                        </div>
                      </a>
                      <a href="/services/discovery-strategy" onClick={handleNavigate}>
                        <FaCompass />
                        <div>
                          <span>Discovery & Strategy</span>
                          <small>Strategic planning</small>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="mega-section">
                    <h4>Enterprise Platforms</h4>
                    <div className="mega-links">
                      <a href="/services/web-development" onClick={handleNavigate}>
                        <FaCode />
                        <div>
                          <span>Web Development</span>
                          <small>Custom solutions</small>
                        </div>
                      </a>
                      <a href="/services/ecommerce" onClick={handleNavigate}>
                        <FaShoppingCart />
                        <div>
                          <span>Ecommerce</span>
                          <small>Online stores</small>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="mega-section">
                    <h4>Optimization</h4>
                    <div className="mega-links">
                      <a href="/services/performance-seo" onClick={handleNavigate}>
                        <FaTachometerAlt />
                        <div>
                          <span>Performance & SEO</span>
                          <small>Speed & visibility</small>
                        </div>
                      </a>
                      <a href="/services/care-support" onClick={handleNavigate}>
                        <FaLifeRing />
                        <div>
                          <span>Care & Support</span>
                          <small>24/7 assistance</small>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link" onClick={handleNavigate}>
                <span>Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="nav-link" onClick={handleNavigate}>
                <span>Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link" onClick={handleNavigate}>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" aria-label="Toggle menu" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

     
    </header>
  );
};

export default Header;

