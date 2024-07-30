import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Play from './pages/Play';
import './theme.css';

const App = () => (
  <ThemeProvider>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
