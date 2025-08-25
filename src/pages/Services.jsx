import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCompass, FaPencilRuler, FaCode, FaShoppingCart, FaTachometerAlt, FaLifeRing } from "react-icons/fa";
import "../assets/css/Home.css";

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <>
      <header className="hero">
        <h1>Services tailored to your growth</h1>
        <p>From concept to launch, we craft high‑quality digital experiences.</p>
      </header>

      <section className="container">
        <h2 className="section-title">Our core offerings</h2>
        <div className="grid">
          <div className="card">
            <h3><FaCompass /> Discovery & Strategy</h3>
            <p>Workshops, user research, and roadmaps to align business goals.</p>
            <Link to="/services/discovery-strategy">Learn more →</Link>
          </div>
          <div className="card">
            <h3><FaPencilRuler /> UI/UX Design</h3>
            <p>Wireframes, prototypes, and design systems that scale.</p>
            <Link to="/services/ui-ux-design">Learn more →</Link>
          </div>
          <div className="card">
            <h3><FaCode /> Web Development</h3>
            <p>Responsive, accessible, and SEO‑friendly websites and apps.</p>
            <Link to="/services/web-development">Learn more →</Link>
          </div>
          <div className="card">
            <h3><FaShoppingCart /> Ecommerce Solutions</h3>
            <p>Storefronts, payments, and integrations with a focus on CRO.</p>
            <Link to="/services/ecommerce">Learn more →</Link>
          </div>
          <div className="card">
            <h3><FaTachometerAlt /> Performance & SEO</h3>
            <p>Core Web Vitals, schema, and analytics for measurable results.</p>
            <Link to="/services/performance-seo">Learn more →</Link>
          </div>
          <div className="card">
            <h3><FaLifeRing /> Care & Support</h3>
            <p>Maintenance, monitoring, and iterative improvements post‑launch.</p>
            <Link to="/services/care-support">Learn more →</Link>
          </div>
        </div>
      </section>

      {/* Contact form removed from Services */}
    </>
  );
};

export default Services;


