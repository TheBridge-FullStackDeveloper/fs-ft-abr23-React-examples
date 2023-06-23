import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HooksUseState from './components/HooksUseState';
import ShowText from './components/ShowText';
import HooksUseStateObject from './components/HooksUseStateObject';
import DestinationList from './components/DestinationList/DestinationList';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
