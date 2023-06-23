import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <nav >
    <ul className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/staff">Staff</Link>
      <Link to="/destinations">Destinations</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/rating">Rating</Link>
    </ul>
  </nav>;
};

export default NavBar;
