import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css' ; // Make sure you have a CSS file for your styles
import logo from '../assets/images/logo with no bg.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="FarmSync Logo" style={{ height: '50px', width: '50px' }} />
        <h3>FarmSync</h3>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div className="dropdown">
          <Link to="#">Services</Link>
          <div className="dropdown-content">
            <a href="http://127.0.0.1:5000">CropCare AI</a>
            <Link to="/governmentscheme">AgricSchemes</Link>
            <Link to="/marketplace">FarmersFirst Market</Link>
            <a href="http://127.0.0.1:5001">Crop Recommendation Tool</a>
            <a href="http://localhost:8501">Kisan Mitra</a>
            <Link to="/framerworker">The Khet Crew</Link>
            <Link to="/cp">Kisan Samvad</Link>
          </div>
        </div>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
