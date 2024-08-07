import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1><Link to="/" className="logo-link">goBeyond</Link></h1>
      </div>
      <ul className="navbar-menu">
        <li><a href="#what-to-see">What to See</a></li>
        <li><a href="#what-to-do">What to Do</a></li>
        <li><a href="#explore-more">Explore More</a></li>
        <li><a href="#essentials">Essentials</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
