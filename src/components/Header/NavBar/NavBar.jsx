import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

import { UserContext } from '../../../context/userContext'

const NavBar = () => {

    // Consumir datos de contexto
    const { username,updateUsername } = useContext(UserContext);
  
  return <nav >
    <ul className="nav-bar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/staff">Staff</Link></li>
      <li><Link to="/destinations">Destinations</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/rating">Rating</Link></li>
      <li><Link to="/summercourse">Summer Course</Link></li>
      <li><Link to="/topic">Top                         ic</Link></li>
      <li><Link to="/profile">Profile</Link></li>

    </ul>

    {username?
        <>
          <p>Hola, {username}</p>
          <button onClick={()=>updateUsername("")}>Logout</button>
        </>
      :""}
  </nav>;
};

export default NavBar;
