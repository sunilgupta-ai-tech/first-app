import React from "react";
import "../assets/css/Home.css";

const Blog = () => {
  const posts = [
    { id: 1, title: "Improving Core Web Vitals in React", excerpt: "Tactics to hit green scores on LCP, CLS, and INP.", date: "2025-05-01" },
    { id: 2, title: "Design Systems that Scale", excerpt: "How component libraries speed delivery and reduce bugs.", date: "2025-04-18" },
    { id: 3, title: "SEO for SPAs: What Actually Matters", excerpt: "Technical SEO tips for modern JavaScript frameworks.", date: "2025-04-02" },
  ];

  return (
    <>
      <header className="hero">
        <h1>Insights & guides</h1>
        <p>Articles on performance, UX, and building better products.</p>
      </header>

      <section className="container">
        <h2 className="section-title">Latest posts</h2>
        <div className="grid">
          {posts.map((p) => (
            <div className="card" key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <small>{new Date(p.date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;


