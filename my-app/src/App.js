import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/State';
import Greeting from './components/Greeting';
import MyNav from './components/Navbar';
import Clock from './components/Clock';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';

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
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <MyNav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Greeting name="Linus" />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/cycle" element={<LifeCyclesCDM />} />
            <Route path="/update" element={<LifeCyclesCDU />} />
            <Route path="/tracker" element={<LifeCyclesCWU />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
