import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo with no bg.png';


const Nav1 = () => {
  return (
    <div className="navbar">
      <div className="logo">
       <img src={logo} alt="Kissan Samvaad Logo" style={{ height: 50, width: 50 }} />
        <h3>Kissan Samvaad</h3>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Nav1;
