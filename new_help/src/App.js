import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './styles.css';
import Sigin from './pages/Signin';
import Homepage from './pages/Homepage'; 
import Footer from './components/Footer';
import toggle from './assets/toggle-svgrepo-com.svg';

function App() {

  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const isAuthenticated = true; 
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <nav className="grid grid-cols-2 w-full place-content-between items-center">
            <h4>Rev 1.0</h4>
            <img src={toggle} className="w-8 h-8 text-yellow" alt="Toggle Icon"/>
        </nav>
      <div className="min-h-screen flex flex-col items-center justify-center">
      <Sigin />
      </div>
      <Footer />
    </div>
  );
}

export default App;
