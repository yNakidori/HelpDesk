import React from 'react';
import './styles.css';
import Sigin from './pages/Signin';
import Footer from './components/Footer'

function App() {

  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <nav className="grid grid-cols-2 w-full place-content-between items-center">
            <h4>Rev 1.0</h4>
            <img src="./assets/toggle-icon-dark.svg" />
        </nav>
      <div className="min-h-screen flex flex-col items-center justify-center">
      <Sigin />
      </div>
      <Footer />
    </div>
  );
}

export default App;
