import React,{ useContext } from 'react';
import NavBar from './NavBar/NavBar';
// import './Header.css'
import { ThemeContext } from '../../context/themeContext'
import { UserContext } from '../../context/userContext'

import { Button, Switch } from '@mui/material'

function Header() {

  // Consumir datos de contexto
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { username,updateUsername } = useContext(UserContext);


  return (
    <header className={`header-${theme}`} >
      <NavBar />
      <Switch  sx={{
        marginTop:0.8,
        marginRight: 1
      }}
      defaultChecked onClick={toggleTheme}/>           

      {/* <Button size="small" onClick={toggleTheme}> &#127749;&#127747; </Button> */}
      {username ?
        <>
          <p className={'pUser-'+theme}>Hola, {username}</p>
          <Button sx={{
            margin: 1
          }} className='logoutButton' onClick={() => updateUsername("")}>Logout</Button>
        </>
        : ""}

    </header>
  )
}

export default Header