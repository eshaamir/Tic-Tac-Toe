// src/pages/Game.js
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playTurn, resetGame } from '../redux/gameSlice';
import { ThemeContext } from '../context/ThemeContext';
import Board from '../components/Panel';

const Game = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const { board, xIsNext, winner } = useSelector((state) => state.game);

  const handleSquareClick = (index) => {
    dispatch(playTurn({ index }));
  };

  const handleResetClick = () => {
    dispatch(resetGame());
  };

  return (
    <div className={`game ${theme}`}>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleSquareClick} />
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <button onClick={handleResetClick}>Reset Game</button>
    </div>
  );
};

export default Game;
