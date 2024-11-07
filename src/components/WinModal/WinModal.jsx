import React from "react";
import style from "./WinModal.module.css";
import { Link } from "react-router-dom";

const WinModal = ({
  nrOfMoves,
  setIsPuzzleCompleted,
  resetPuzzle,
  puzzleLink = null,
}) => {
  const handlePlayAgain = () => {
    setIsPuzzleCompleted(false);
    resetPuzzle();
  };

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <h2>Well done!</h2>
        <h3>Completed in {nrOfMoves} moves</h3>
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
