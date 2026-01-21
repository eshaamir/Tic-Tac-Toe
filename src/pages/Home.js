import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home ${theme}`}>
      <h2>Welcome to Tic Tac Toe</h2>
      <p className="home-text">
        Play a quick minimalist game of Tic Tac Toe. Use the toggle in the header to switch
        between light and dark modes.
      </p>
    </div>
  );
};

export default Home;
