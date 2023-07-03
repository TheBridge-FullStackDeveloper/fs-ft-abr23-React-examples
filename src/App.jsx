import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HooksUseState from './components/HooksUseState';
import ShowText from './components/ShowText';
import HooksUseStateObject from './components/HooksUseStateObject';
import DestinationList from './components/DestinationList/DestinationList';
import { BrowserRouter } from 'react-router-dom';

import { useContext, useState } from 'react'

// Contextos
import { ThemeContext } from './context/themeContext'
import { UserContext } from './context/userContext'

function App() {

//State
const [theme, setTheme] = useState("night");
const [username, setUsername] = useState('javy');

// Actualizar tema
const toggleTheme = ()=> theme=="day"? setTheme("night"):setTheme("day");

// Actualizar nombre de usuario
const updateUsername = (newUsername) =>setUsername(newUsername);

const themeData = {
  theme,
  toggleTheme
}

const userData = {
  username,
  updateUsername
}

  return (
    <>
      <ThemeContext.Provider value={themeData}> 
        <BrowserRouter>
          <UserContext.Provider value={userData}>
            <Header />
            <Main />
          </UserContext.Provider>
        </BrowserRouter>
        <Footer />
      </ThemeContext.Provider> 
    </>
  )
}

export default App
