import React from "react";
import Board from "../components/Board/Board";
import styles from "./Game.module.css";
import Pieces from "../components/Pieces/Pieces";
import TouchTargets from "../components/TouchTargets/TouchTargets";
import useTileSize from "../hooks/useTileSize";

const Game = () => {
  const tileSize = useTileSize();

  const board = [
    ["P", "P", "P", "P"],
    ["-", "B", "-", null],
    ["R", "B", "-", null],
    ["-", "P", "-", "- red"],
  ];

  return (
    <div className={styles.boardContainer}>
      <h1>Pawn = Queen</h1>
      <Board board={board} size={tileSize} />
      <Pieces board={board} size={tileSize} />
      <TouchTargets board={board} size={tileSize}></TouchTargets>
    </div>
  );
};

export default Game;
