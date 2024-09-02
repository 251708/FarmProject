import React from 'react';
import logo from '../assets/images/logo with no bg.png';

const Nav1 = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" style={{ height: '50px', width: '50px' }} />
        <h3>FarmSync</h3>
      </div>
      <nav className="nav-links">
        <a href="../html/demo.html">Home</a>
       
      </nav>
    </div>
  );
};

export default Nav1;
