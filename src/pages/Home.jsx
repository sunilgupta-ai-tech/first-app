import React from "react";
import {
  FaRocket, FaCode, FaPalette, FaChartLine, FaUsers, FaShieldAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaProjectDiagram,
  FaLock,
} from "react-icons/fa";
import "../assets/css/Home.css";

const Home = () => {
  const OFFERINGS = [
    { title: "Web Development", icon: <FaLaptopCode />, desc: "Modern, scalable, and responsive websites & apps." },
    { title: "Mobile Apps", icon: <FaMobileAlt />, desc: "iOS & Android apps with seamless user experience." },
    { title: "Cloud Solutions", icon: <FaCloud />, desc: "Secure cloud-native apps and infrastructure." },
    { title: "Data & Analytics", icon: <FaDatabase />, desc: "Big data, AI, and business intelligence solutions." },
    { title: "Product Engineering", icon: <FaProjectDiagram />, desc: "End-to-end product design, build, and scaling." },
    { title: "Cybersecurity", icon: <FaLock />, desc: "Protect systems with best-in-class security practices." },
  ];
  const TESTIMONIALS = [
    {
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      feedback:
        "The team delivered our project on time with amazing quality. Their communication and expertise were top-notch!",
      img: "https://via.placeholder.com/80", // replace with client image
    },
    {
      name: "David Miller",
      role: "CEO, StartupHub",
      feedback:
        "They helped us scale our platform to thousands of users smoothly. Highly recommend for any fast-growing startup.",
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Emily Chen",
      role: "CTO, FinEdge",
      feedback:
        "From UI/UX to development, everything was seamless. We now have a product our users love.",
      img: "https://via.placeholder.com/80",
    },
  ];
  
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Business with
              <span className="gradient-text"> Digital Excellence</span>
            </h1>
            <p className="hero-description">
              We design and build fast, SEO-friendly websites and applications that drive business growth. 
              Our team of experts delivers cutting-edge digital solutions tailored to your needs.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="/portfolio" className="btn btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-card card-1">
                <FaCode />
                <span>Web Development</span>
              </div>
              <div className="floating-card card-2">
                <FaPalette />
                <span>UI/UX Design</span>
              </div>
              <div className="floating-card card-3">
                <FaChartLine />
                <span>Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Offerings Section */}
<section className="tech-section">
      <h2 className="section-title">Our Technology Offerings</h2>

      <div className="tech-grid">
        {OFFERINGS.map((item) => (
          <div className="tech-card" key={item.title}>
            <div className="tech-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="tech-cta">
        <button>Get in Touch</button>
      </div>
    </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Bizstrap?</h2>
            <p>We deliver exceptional results through our proven approach and expertise</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times without compromising quality. We deliver projects on time, every time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h3>Modern Technology</h3>
              <p>Built with the latest technologies and best practices for optimal performance and security.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaPalette />
              </div>
              <h3>Beautiful Design</h3>
              <p>Stunning, user-friendly designs that engage your audience and drive conversions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>SEO Optimized</h3>
              <p>Search engine optimized to help your business rank higher and reach more customers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support to ensure your website runs smoothly at all times.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security and reliability to protect your business and customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="testimonial-section">
      <h2 className="section-title">What Our Clients Say</h2>

      <div className="testimonial-grid">
        {TESTIMONIALS.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <p className="testimonial-feedback">“{t.feedback}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <span className="testimonial-role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your digital goals</p>
            <a href="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
