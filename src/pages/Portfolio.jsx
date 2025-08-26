import React from "react";
import "../assets/css/Portfolio.css";

// Import images
import fintechImg from "../assets/images/portfolio/fintech.jpg";
import storeImg from "../assets/images/portfolio/store.jpg";
import saasImg from "../assets/images/portfolio/saas.jpg";
import eduImg from "../assets/images/portfolio/edu.jpg";

const projects = [
  { id: 1, title: "Fintech Landing", blurb: "+42% sign-ups post-redesign", tag: "Marketing", img: fintechImg },
  { id: 2, title: "D2C Store", blurb: "+28% checkout completion", tag: "Ecommerce", img: storeImg },
  { id: 3, title: "B2B SaaS", blurb: "+35% demo requests", tag: "SaaS", img: saasImg },
  { id: 4, title: "Edu Platform", blurb: "Faster lesson loads", tag: "EdTech", img: eduImg },
];

const Portfolio = () => {
  return (
    <>
    <header className="hero portfolio-hero">
  <h1 className="hero-title">Our Selected Work</h1>
  <p className="hero-subtitle">
    A few projects we’ve recently launched — designed and built 
    to help businesses grow faster.
  </p>
</header>



      <section className="container">
        <h2 className="section-title">Case studies</h2>
        <div className="grid portfolio-grid">
          {projects.map((p) => (
            <div className="card portfolio-card" key={p.id}>
              <img src={p.img} alt={p.title} className="portfolio-img" />
              <div className="portfolio-content">
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <small className="tag">{p.tag}</small>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;



