import React from "react";
import "../assets/css/Home.css";

const Register = () => {
  return (
    <>
      <header className="hero">
        <h1>Create your account</h1>
        <p>Join us to start your next project.</p>
      </header>

      <section className="container">
        <form>
          <h2>Register</h2>
          <div className="form-grid">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="password" name="confirm" placeholder="Confirm Password" required />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </section>
    </>
  );
};

export default Register;


