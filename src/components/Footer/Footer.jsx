import React,{ useContext } from 'react'
// import './Footer.css'

import { ThemeContext } from '../../context/themeContext'

function Footer() {
  // Consumir datos de contexto
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <footer className={`footer-${theme}`}>
      <p className={'footer-'+theme}>Esto es mi Footer!!!</p>
      <button onClick={toggleTheme}>Cambia tema</button>
      </footer>
  )
}

export default Footer