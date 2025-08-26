import "../assets/css/About.css";

export default function About() {
  return (
    <div className="about-page">
      <header className="hero about-hero">
        <h1 className="hero-title">
          About <span className="highlight">Bizstrap</span>
        </h1>
        <p className="hero-subtitle">
          We craft high-performing websites and apps that empower businesses
          to scale with confidence.
        </p>
      </header>

      {/* Our Story */}
      <section className="container">
        <h2 className="section-title">Our Story</h2>
        <div className="grid">
          <div className="card">
            <p>
              Bizstrap was founded by passionate engineers and designers who
              believe technology should be <strong>simple, fast, and beautiful</strong>.
              Since day one, our mission has been to blend <em>clean code</em> with
              <em> thoughtful design</em>, building digital experiences that people love.
            </p>
          </div>
          <div className="card">
            <p>
              Over the years, we’ve partnered with <strong>startups</strong> and{" "}
              <strong>global enterprises</strong> across fintech, ecommerce, SaaS,
              and beyond. Our focus is always on outcomes: faster load times,
              intuitive user journeys, and higher conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container">
        <h2 className="section-title">Highlights</h2>
        <div className="grid">
          <div className="card highlight-card">
            <h3>🚀 50+ Launches</h3>
            <p>Websites & apps delivered with measurable impact.</p>
          </div>
          <div className="card highlight-card">
            <h3>⚡ 95+ Lighthouse</h3>
            <p>Performance, accessibility, and SEO scores on average builds.</p>
          </div>
          <div className="card highlight-card">
            <h3>🌍 Global Clients</h3>
            <p>Trusted by teams across US, EU, and APAC regions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
