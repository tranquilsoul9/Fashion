import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import "./navbar.css"; // Import the CSS file for styling the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyTalorzone</Link> {/* Logo links to the homepage */}
      </div>
      <div className="navbar-links">
        <Link to="/cart">Cart</Link>
        <Link to="/complaint">Complaint</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
