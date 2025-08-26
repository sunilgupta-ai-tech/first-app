import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Blog.css";
import blogImage from "../assets/images/blog/blog.jpg";

const Blog = () => {
  const blogs = [
    { 
      title: "Boost Your Business", 
      desc: "Learn strategies to scale faster.", 
      img: blogImage
    },
    { 
      title: "Design Trends 2025", 
      desc: "Modern UI/UX practices.", 
      img: blogImage
    },
    { 
      title: "AI in SaaS", 
      desc: "How AI is changing software.", 
      img: blogImage
    },
    { 
      title: "Remote Work", 
      desc: "Best tools for collaboration.", 
      img: blogImage
    },
    { 
      title: "Cybersecurity", 
      desc: "Protecting your digital assets.", 
      img: blogImage
    },
    { 
      title: "Ecommerce Growth", 
      desc: "Trends for online shopping.", 
      img: blogImage
    },
    { 
      title: "Startup Hacks", 
      desc: "Lessons from successful founders.", 
      img: blogImage
    },
    { 
      title: "Web Performance", 
      desc: "Why speed matters for SEO.", 
      img: blogImage
    },
  ];
  

  return (
    <section className="blog container">
      
      <h2 className="section-title">Latest Blogs</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <Link to={`/blog/${index}`} className="read-more">
              Read More →
            </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
