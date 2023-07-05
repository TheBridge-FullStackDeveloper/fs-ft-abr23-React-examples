import { useContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HooksUseState from './components/HooksUseState';
import ShowText from './components/ShowText';
import HooksUseStateObject from './components/HooksUseStateObject';
import DestinationList from './components/DestinationList/DestinationList';


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
      <Provider store={store}>
          <ThemeContext.Provider value={themeData}> 
            <BrowserRouter>
              <UserContext.Provider value={userData}>
                <Header />
                <Main />
              </UserContext.Provider>
            </BrowserRouter>
            <Footer />
          </ThemeContext.Provider> 
        </Provider>
    </>
  )
}

export default App
