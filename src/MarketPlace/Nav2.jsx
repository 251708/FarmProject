import React from 'react';
import logo from '../assets/images/logo with no bg.png';

const Nav2 = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" style={{ height: '50px', width: '50px' }} />
        <h3>FarmSync</h3>
      </div>
      <nav className="nav-links">
        <a href="../html/demo.html">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
};

export default Nav2;
