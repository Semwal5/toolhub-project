"use client";

import "./signup.css";

export default function Signup() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup form submitted!");
  };

  return (
    <div className="wrapper">

      {/* SIGNUP */}
      <div className="signup">
        <h2>Create your account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <div className="text">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </div>
      </div>

      {/* INFO */}
      <div className="info">
        <h1>Why ToolHub?</h1>
        <p>
          Join thousands of users who trust ToolHub to manage documents quickly and securely.
        </p>

        <p>
          Start free and upgrade anytime to unlock premium features.
        </p>
      </div>

    </div>
  );
}
