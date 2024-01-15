// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import toggle from "./assets/toggle-svgrepo-com.svg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "dark" : ""
      }`}
    >
      <nav className="grid grid-cols-2 w-full place-content-between items-center">
        <h4 className="text-1xl font-light font-poppins">Rev 1.0</h4>
        <img
          src={toggle}
          className="w-8 h-8 text-yellow cursor-pointer"
          alt="Toggle Icon"
          onClick={toggleDarkMode}
        />
      </nav>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
