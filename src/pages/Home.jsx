import React, { useEffect, useRef } from "react";
import "../assets/css/Home.css";
const Home = () => {
  const sliderRef = useRef(null);
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

    // Auto slider
    const container = sliderRef.current;
    if (container) {
      let idx = 0;
      const slides = container.querySelectorAll('.slide');
      const tick = () => {
        idx = (idx + 1) % slides.length;
        container.style.transform = `translateX(-${idx * 100}%)`;
      };
      const id = setInterval(tick, 3500);
      return () => clearInterval(id);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <h1>Engineering digital transformation for modern enterprises</h1>
        <p>
          We deliver Digital, Cloud, and Enterprise technology solutions that scale securely and perform globally.
        </p>
      </header>

      {/* Services Section (aligned to software company pillars) */}
      <section className="container">
        <h2 className="section-title">What we do</h2>
        <div className="grid">
          <div className="card stagger-1">
            <h3>Digital Experiences</h3>
            <p>Customer portals, headless CMS, and omnichannel CX with analytics.</p>
          </div>
          <div className="card stagger-2">
            <h3>Enterprise Platforms</h3>
            <p>CRM/ERP integrations, data pipelines, and secure API ecosystems.</p>
          </div>
          <div className="card stagger-3">
            <h3>Cloud & DevOps</h3>
            <p>Modernization, observability, IaC, and CI/CD across AWS/Azure/GCP.</p>
          </div>
          <div className="card stagger-4">
            <h3>AI & Automation</h3>
            <p>GenAI copilots, intelligent automation, and decision intelligence.</p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container">
        <h2 className="section-title">Featured work</h2>
        <div className="grid">
          <div className="card">
            <h3>Fintech Landing</h3>
            <p>+42% sign-ups after redesign and speed optimization.</p>
          </div>
          <div className="card">
            <h3>D2C Store</h3>
            <p>2.1s LCP and +28% checkout completion rate.</p>
          </div>
          <div className="card">
            <h3>B2B SaaS</h3>
            <p>+35% demo requests with improved IA and messaging.</p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="container">
        <h2 className="section-title">Why choose us</h2>
        <div className="grid">
          <div className="card">
            <h3>Performance-first builds</h3>
            <p>Core Web Vitals optimized for faster loads, higher rankings, and better UX.</p>
          </div>
          <div className="card">
            <h3>SEO from day one</h3>
            <p>Clean HTML, schema, sitemaps and best practices built into your site.</p>
          </div>
          <div className="card">
            <h3>Scalable architecture</h3>
            <p>Modern stacks with maintainable code and room to grow as you do.</p>
          </div>
          <div className="card">
            <h3>Transparent delivery</h3>
            <p>Clear milestones, regular updates, and results you can measure.</p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="container">
        <h2 className="section-title">Resources</h2>
        <div className="grid">
          <div className="card"><h3>How to hit green CWV</h3><p>Guide to improving LCP, CLS, and INP in React.</p></div>
          <div className="card"><h3>Scaling Design Systems</h3><p>Patterns for multi-product UI libraries.</p></div>
          <div className="card"><h3>SEO for SPAs</h3><p>What actually matters for modern frameworks.</p></div>
        </div>
      </section>

      {/* Tech */}
      <section className="container">
        <h2 className="section-title">Tech we love</h2>
        <div className="badges">
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
          <span>Kafka</span>
          <span>Stripe</span>
          <span>Vercel</span>
          <span>AWS</span>
          <span>Azure</span>
          <span>GCP</span>
        </div>
      </section>

      {/* Industries */}
      <section className="container">
        <h2 className="section-title">Industries we serve</h2>
        <div className="grid">
          <div className="card"><h3>BFSI</h3><p>Onboarding, risk analytics, and regulatory-ready systems.</p></div>
          <div className="card"><h3>Manufacturing</h3><p>Supplier portals, MES integrations, and product lifecycle data.</p></div>
          <div className="card"><h3>Healthcare</h3><p>HIPAA-ready apps, intake automation, and secure data exchange.</p></div>
          <div className="card"><h3>Energy</h3><p>Asset data platforms, IoT telemetry, and process automation.</p></div>
        </div>
      </section>

      {/* Testimonials slider */}
      <section className="container">
        <h2 className="section-title">What clients say</h2>
        <div className="slider-viewport">
          <div className="slider-track" ref={sliderRef}>
            <div className="slide">
              <div className="card"><p>“They delivered a blazing‑fast site. Our sign‑ups jumped immediately.”</p><h4>— Sarah M., SaaS Founder</h4></div>
            </div>
            <div className="slide">
              <div className="card"><p>“Clean code, great communication, and on‑time delivery. Highly recommend.”</p><h4>— Daniel R., Product Lead</h4></div>
            </div>
            <div className="slide">
              <div className="card"><p>“Ecommerce conversion is up 28%. The speed and UX are outstanding.”</p><h4>— Priya S., D2C Owner</h4></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container">
        <h2 className="section-title">FAQ</h2>
        <div className="faq">
          <details>
            <summary>How long does a project take?</summary>
            <p>Most sites launch in 3–8 weeks depending on scope and complexity.</p>
          </details>
          <details>
            <summary>Do you provide content and branding?</summary>
            <p>We can collaborate with your team or bring trusted partners on board.</p>
          </details>
          <details>
            <summary>Do you handle hosting and maintenance?</summary>
            <p>Yes. We set up secure, scalable hosting and offer care plans post‑launch.</p>
          </details>
        </div>
      </section>

      {/* Contact CTA removed from Home */}
    </>
  );
};

export default Home;
