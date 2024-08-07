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
        <li><Link to="/whattosee" className="navbar-link">What to See</Link></li>
        <li><Link to="/whattodo" className="navbar-link">What to Do</Link></li>
        <li><Link to="/exploremore" className="navbar-link">Explore More</Link></li>
        <li><Link to="/essentials" className="navbar-link">Essentials</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
