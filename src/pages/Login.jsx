import React from "react";
import "../assets/css/Home.css";

const Login = () => {
  return (
    <>
      <header className="hero">
        <h1>Welcome back</h1>
        <p>Log in to manage your projects and requests.</p>
      </header>

      <section className="container">
        <form>
          <h2>Login</h2>
          <div className="form-grid">
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </section>
    </>
  );
};

export default Login;


