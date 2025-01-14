import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import "./login.css"; // Import the CSS file for styling

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill out both fields.");
      return;
    }
    // Handle login logic
    alert("Login successful!");
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <div className="create-account-link">
        <p>New to Mytalorzone? <Link to="/create-account">Create an account</Link></p>
      </div>
    </div>
  );
};

export default UserLogin;
