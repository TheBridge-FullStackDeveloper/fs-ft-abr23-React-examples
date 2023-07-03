import React,{ useContext } from 'react';
import NavBar from './NavBar/NavBar';
import './Header.css'
import { ThemeContext } from '../../context/themeContext'
import { UserContext } from '../../context/userContext'

function Header() {

  // Consumir datos de contexto
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { username,updateUsername } = useContext(UserContext);


  return (
    <header className={`header-${theme}`} >
      <NavBar/>
      <button onClick={toggleTheme}>Cambia tema</button>

      {username?
        <>
          <p>Hola, {username}</p>
          <button onClick={()=>updateUsername("")}>Logout</button>
        </>
      :""}

    </header>
  )
}

export default Header