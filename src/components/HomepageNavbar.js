import React from "react";
import { Link } from "react-router-dom";
import "./homepageNavbar.css";  // Add the CSS file for styling

const HomepageNavbar = () => {
  return (
    <div className="homepage-navbar">
      <Link to="/products/winter-wear" className="navbar-item">Winter wear</Link>
      <Link to="/products/ethnic-wear" className="navbar-item">Ethnic wear</Link>
      <Link to="/products/tops" className="navbar-item">Tops </Link>
      <Link to="/products/summer-dresses" className="navbar-item">Dresses</Link>
    </div>
  );
};

export default HomepageNavbar;
