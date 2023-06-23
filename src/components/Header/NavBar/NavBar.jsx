import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return <nav >
    <ul className="nav-bar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/staff">Staff</Link></li>
      <li><Link to="/destinations">Destinations</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/rating">Rating</Link></li>
    </ul>
  </nav>;
};

export default NavBar;
