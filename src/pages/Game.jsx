import React from "react";
import Board from "../components/Board/Board";
import styles from "./Game.module.css";
import Pieces from "../components/Pieces/Pieces";
import { useState, useEffect } from "react";

const Game = () => {
  const [tileSize, setTileSize] = useState(200);

  useEffect(() => {
    // The smallest of the two values will decide the size of the board
    const sizingFactor =
      window.innerWidth > window.innerHeight
        ? window.innerHeight
        : window.innerWidth;

    const handleResize = () => {
      if (
        window.innerWidth >= 1300 ||
        window.innerWidth <= 500
        // (window.innerWidth > 400 && window.innerWidth < 1000)
      ) {
        return;
      }
      setTileSize(window.innerWidth / 6);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const board = [
    ["B", "N", "R", "P"],
    ["B", "N", "R", null],
    ["B", "N", "R", null],
    ["B", "N", "R", "- red"],
  ];

  return (
    <div className={styles.boardContainer}>
      <h1>Pawn = Queen</h1>
      <Board board={board} size={tileSize} />
      <Pieces board={board} size={tileSize} />
    </div>
  );
};

export default Game;
