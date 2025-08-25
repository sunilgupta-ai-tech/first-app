import React from "react";
import "../assets/css/Home.css";

const projects = [
  { id: 1, title: "Fintech Landing", blurb: "+42% sign‑ups post‑redesign", tag: "Marketing" },
  { id: 2, title: "D2C Store", blurb: "+28% checkout completion", tag: "Ecommerce" },
  { id: 3, title: "B2B SaaS", blurb: "+35% demo requests", tag: "SaaS" },
  { id: 4, title: "Edu Platform", blurb: "Faster lesson loads", tag: "EdTech" },
];

const Portfolio = () => {
  return (
    <>
      <header className="hero">
        <h1>Selected work</h1>
        <p>A few projects we’ve recently launched.</p>
      </header>

      <section className="container">
        <h2 className="section-title">Case studies</h2>
        <div className="grid">
          {projects.map((p) => (
            <div className="card" key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <small>{p.tag}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;


