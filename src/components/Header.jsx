import { NavLink } from "react-router-dom";
import "../assets/css/Header.css";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // your logo image

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div>
          <h2>Bizstrap</h2>
          <p>Business Theme</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="/">HOME</a><span>know us</span></li>
          <li><a href="/about">ABOUT</a><span>learn more</span></li>
          <li><a href="/services">SERVICES</a><span>our expertise</span></li>
          <li><a href="/portfolio">PORTFOLIO</a><span>our work</span></li>
          <li><a href="/blog">BLOG</a><span>latest news</span></li>
          <li><a href="/pages">PAGES</a><span>more options</span></li>
          <li><a href="/contact">CONTACT</a><span>get in touch</span></li>
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </header>
  );
};

export default Header;

