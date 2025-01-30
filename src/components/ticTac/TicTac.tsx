import React, { useState } from "react";
import "./TicTac.css"; // Import the CSS file for styling
import { useTicTacToe } from "./useTicTacToe";

// Custom Hook for Tic-Tac-Toe Logic

// TicTacToe Component
const TicTacToe = () => {
  const { board, handleClick, winner, resetGame, isXNext } = useTicTacToe();

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className={`square ${value ? "filled" : ""}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="status">
        {winner
          ? winner === "draw"
            ? "It's a draw!"
            : `Winner: ${winner}`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
