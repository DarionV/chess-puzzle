import React, { useContext } from "react";
import style from "./WinModal.module.css";

import BoardContext from "../../context/BoardContext";
import { Tooltip } from "@mantine/core";
import { useRecoilState } from "recoil";
import { moveCountState } from "../../pages/Game";

const WinModal = ({ loadNextPuzzle }) => {
  const { resetBoard, getBuyLink } = useContext(BoardContext);

  const handlePlayAgain = () => {
    resetBoard();
  };

  const handleTryAnotherPuzzle = () => {
    loadNextPuzzle();
  };

  const buyLink = getBuyLink();

  const [moveCount] = useRecoilState(moveCountState);

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <h2>Well done</h2>
        <h3>Solved in {moveCount} moves</h3>
      </div>
      <button className={style.button} onClick={handlePlayAgain}>
        Play again
      </button>
      <button className={style.button} onClick={handleTryAnotherPuzzle}>
        Try another puzzle
      </button>
      {buyLink ? (
        //  <Tooltip label="Affiliate link" withArrow position="bottom">
        <a href={buyLink} target="blank" className={style.button}>
          Buy this puzzle
        </a>
      ) : // </Tooltip>
      null}
    </div>
  );
};

export default WinModal;
