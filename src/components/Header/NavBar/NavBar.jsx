import React,{ useContext } from "react";
import { Link } from "react-router-dom";
// import './NavBar.css';

import { UserContext } from '../../../context/userContext'
import { ThemeContext } from '../../../context/themeContext'

const NavBar = () => {

    // Consumir datos de contexto
    const { username,updateUsername } = useContext(UserContext);
    const { theme, toggleTheme } = useContext(ThemeContext)
  
  return <nav >
    <ul className="nav-bar">
      <li><Link className={'link-'+theme} to="/">Home</Link></li>
      <li><Link className={'link-'+theme} to="/about">About</Link></li>
      <li><Link className={'link-'+theme} to="/staff">Staff</Link></li>
      <li><Link className={'link-'+theme} to="/destinations">Destinations</Link></li>
      <li><Link className={'link-'+theme} to="/contact">Contact</Link></li>
      <li><Link className={'link-'+theme} to="/rating">Rating</Link></li>
      <li><Link className={'link-'+theme} to="/summercourse">Summer Course</Link></li>
      <li><Link className={'link-'+theme} to="/topic">Topic</Link></li>
      <li><Link className={'link-'+theme} to="/profile">Profile</Link></li>
    </ul>
  </nav>;
};

export default NavBar;
