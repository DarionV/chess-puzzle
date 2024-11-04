import React from "react";
import Board from "../components/Board/Board";
import styles from "./Game.module.css";
import Pieces from "../components/Pieces/Pieces";

const Game = () => {
  const TILE_SIZE_IN_PX = 160;

  const board = [
    ["-", "-", "-", "P"],
    ["-", "-", "-", null],
    ["-", "-", "-", null],
    ["-", "-", "-", "- red"],
  ];
  return (
    <div className={styles.boardContainer}>
      <h1>Pawn = Queen</h1>
      <Board boardArray={board} size={TILE_SIZE_IN_PX} />
      <Pieces boardArray={board} size={TILE_SIZE_IN_PX} />
    </div>
  );
};

export default Game;
