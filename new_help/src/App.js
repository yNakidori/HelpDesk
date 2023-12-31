
import React from 'react';
import './styles.css';

import Sigin from './pages/Signin';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center">
      <Sigin />
      <Footer />
    </div>
  );
}

export default App;
