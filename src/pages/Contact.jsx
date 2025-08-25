import React from "react";
import "../assets/css/Home.css";

const Contact = () => {
  return (
    <>
      <header className="hero">
        <h1>Contact us</h1>
        <p>Tell us about your project and we’ll get back within 1 business day.</p>
      </header>

      <section className="container">
        <form>
          <h2>Send a message</h2>
          <div className="form-grid">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone" />
            <input type="text" name="company" placeholder="Company" />
            <textarea className="span-2" name="message" rows="6" placeholder="Project details"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Contact;


