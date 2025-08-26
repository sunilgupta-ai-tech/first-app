import React from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  return (
    <div className="career-page">
      {/* Hero Section */}
      <header className="hero">
        <h1>Join Our Team</h1>
        <p>
          At Bizstrap, we’re always looking for passionate people to build
          digital products that make an impact.
        </p>
      </header>

      {/* Open Positions */}
      <section className="container">
        <h2 className="section-title">Open Positions</h2>
        <div className="job-grid">
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>📍 Remote | Full-time</p>
            <button className="btn-apply">Apply Now</button>
          </div>

          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>📍 Bengaluru | Hybrid</p>
            <button className="btn-apply">Apply Now</button>
          </div>

          <div className="job-card">
            <h3>Backend Engineer</h3>
            <p>📍 Remote | Full-time</p>
            <button className="btn-apply">Apply Now</button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="container">
        <h2 className="section-title">Didn’t find a role?</h2>
        <p className="section-subtitle">
          Send us your profile and we’ll reach out when a matching role opens.
        </p>
        <form className="career-form">
          <div className="form-grid">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone" />
            <input type="text" name="role" placeholder="Desired Role" />
            <textarea
              className="span-2"
              name="message"
              rows="6"
              placeholder="Tell us why you’d be a great fit"
            ></textarea>
            <input type="file" className="span-2" name="resume" />
          </div>
          <button type="submit" className="btn-submit">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
