// src/pages/Home.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="home">
      <h1>Welcome to the World of Tic Tac Toe</h1>
      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default Home;
