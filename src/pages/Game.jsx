import React from "react";
import Board from "../components/Board/Board";
import styles from "./Game.module.css";

const Game = () => {
  const board = [
    ["empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", null],
    ["empty", null, "empty", null],
    ["empty", "empty", "empty", "empty red"],
  ];
  return (
    <div className={styles.boardContainer}>
      <h1>Pawn = Queen</h1>
      <Board boardArray={board} />
    </div>
  );
};

export default Game;
