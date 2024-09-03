import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="leftnav">
          <a href="#about-section" className="poppins">About</a>
          <a href="#contact-section" className="poppins">Contact</a>
          <a href="#helpdesk-section" className="poppins">Helpdesk</a>
        </div>
        <div className="rightnav">
          <Link to="/login">
            <button className="cleanButton">Get Started</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
