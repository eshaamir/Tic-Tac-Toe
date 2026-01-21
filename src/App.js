import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import Home from './pages/Home';
import Play from './pages/Play';
import './theme.css';

const AppLayout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-root ${theme}`}>
      <header className="app-header">
        <div className="brand">Tic Tac Toe</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/play">Play</Link>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} mode
        </button>
      </header>
      <main className="app-main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <Router>
      <AppLayout />
    </Router>
  </ThemeProvider>
);

export default App;
