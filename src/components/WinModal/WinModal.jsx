import React from "react";
import style from "./WinModal.module.css";
import { Link } from "react-router-dom";
import { useMoveCount } from "../../context/MoveCountContext";

const WinModal = ({ setIsPuzzleCompleted, resetPuzzle, puzzleLink = null }) => {
  const handlePlayAgain = () => {
    setIsPuzzleCompleted(false);
    resetPuzzle();
  };

  const { moveCount } = useMoveCount();

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <h2>Well done</h2>
        <h3>Solved in {moveCount} moves</h3>
      </div>
      <button className={style.button} onClick={handlePlayAgain}>
        Play again
      </button>
      <Link className={style.button}>Try another puzzle</Link>
      {puzzleLink ? (
        <a href={puzzleLink} target="blank" className={style.button}>
          Buy this puzzle
        </a>
      ) : null}
    </div>
  );
};

export default WinModal;
