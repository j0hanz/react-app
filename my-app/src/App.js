// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import Counter from './components/State';
import Greeting from './components/Greeting';
import MyNav from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedMode) {
      setDarkMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <MyNav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <header className="App-header">
        <Greeting name="Linus" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
