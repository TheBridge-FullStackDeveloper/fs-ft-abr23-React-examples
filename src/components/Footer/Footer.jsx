import React,{ useContext } from 'react'
// import './Footer.css'

import { ThemeContext } from '../../context/themeContext'

function Footer() {
  // Consumir datos de contexto
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <footer className={`footer-${theme}`}>
      <p className={'footer-'+theme}>Powered with 💙 by Javier Espinosa</p>
      </footer>
  )
}

export default Footer