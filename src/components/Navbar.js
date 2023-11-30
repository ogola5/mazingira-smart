import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // This line imports the styles for the navbar

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/vision-mission" className="nav-link">Vision & Mission</Link></li>
        <li><Link to="/goals" className="nav-link">Goals</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

