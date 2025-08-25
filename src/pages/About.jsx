import "../assets/css/Home.css";

export default function About() {
  return (
    <>
      <header className="hero">
        <h1>About Bizstrap</h1>
        <p>We craft high‑performing websites and apps that help businesses grow.</p>
      </header>

      <section className="container">
        <h2 className="section-title">Our story</h2>
        <div className="grid">
          <div className="card">
            <p>
              Founded by engineers and designers, Bizstrap blends clean code with
              thoughtful user experience. We’ve shipped products for startups and
              enterprises across fintech, ecommerce, and SaaS.
            </p>
          </div>
          <div className="card">
            <p>
              We focus on measurable outcomes: faster load times, clearer flows,
              and higher conversions. Transparency, quality, and speed are our
              north stars.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Highlights</h2>
        <div className="grid">
          <div className="card"><h3>50+ launches</h3><p>Delivered across web and mobile.</p></div>
          <div className="card"><h3>95+ Lighthouse</h3><p>Typical performance scores on new builds.</p></div>
          <div className="card"><h3>Global clients</h3><p>Teams from US, EU, and APAC.</p></div>
        </div>
      </section>
    </>
  );
}
