import React, { useEffect } from "react";
import "../assets/css/Home.css";
const Home = () => {
  useEffect(() => {
    // Reveal cards on scroll
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
      {/* Hero Section */}
      <header className="hero">
        <h1>🚀 Grow Your Business with Our 7 Powerful Solutions</h1>
        <p>
          All-in-One yearly subscription packages for E-commerce, Education, POS,
          ERP, Digital Marketing, and more.
        </p>
      </header>

      {/* Products Section */}
      <section className="container">
        <h2 className="section-title">Our Top 7 Products</h2>
        <div className="grid">
          <div className="card">
            <h3>E-Commerce Solutions</h3>
            <p>
              Launch your own online store or multi-vendor marketplace like
              Amazon/Flipkart. Secure payments, inventory control, and
              mobile-ready.
            </p>
          </div>
          <div className="card">
            <h3>Education Platforms</h3>
            <p>
              Learning Management Systems (LMS) and School Management Software
              for online classes, exams, and fee management.
            </p>
          </div>
          <div className="card">
            <h3>POS & Vendor Management</h3>
            <p>
              Smart billing, inventory tracking, supplier management, and
              GST-compliant invoices for your retail business.
            </p>
          </div>
          <div className="card">
            <h3>School ERP</h3>
            <p>
              Manage attendance, payroll, timetable, library, and complete
              academic administration in one place.
            </p>
          </div>
          <div className="card">
            <h3>Digital Marketing</h3>
            <p>
              SEO, social media marketing, content creation, and ad campaigns to
              boost your brand visibility and leads.
            </p>
          </div>
          <div className="card">
            <h3>Websites & Mobile Apps</h3>
            <p>
              Professional business websites and Android/iOS apps with yearly
              maintenance & hosting support.
            </p>
          </div>
          <div className="card">
            <h3>CRM & Automation</h3>
            <p>
              Customer tracking, sales funnels, email campaigns, and AI chatbots
              to automate your growth process.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>💰 Choose Your Yearly Plan</h2>
        <div className="plans">
          <div className="plan">
            <h3>Silver</h3>
            <p className="price">₹19,999 / year</p>
            <ul>
              <li>Basic Website or App</li>
              <li>SEO Starter Pack</li>
              <li>Email Support</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="plan">
            <h3>Gold</h3>
            <p className="price">₹39,999 / year</p>
            <ul>
              <li>E-commerce or LMS</li>
              <li>Advanced SEO + SMM</li>
              <li>Priority Support</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="plan">
            <h3>Platinum</h3>
            <p className="price">₹59,999 / year</p>
            <ul>
              <li>ERP / Multi-vendor Platform</li>
              <li>Complete Digital Marketing</li>
              <li>24/7 Dedicated Support</li>
            </ul>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container">
        <form>
          <h2>📩 Contact Us for a Free Demo</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Phone" required />
          <textarea name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Home;
