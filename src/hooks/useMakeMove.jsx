import React, { useContext } from "react";
import BoardContext from "../context/BoardContext";
import { getEmptyTile } from "../utilities/getEmptyTile";
import { useRecoilState } from "recoil";
import { moveCountState } from "../pages/Game";

const useMakeMove = () => {
  const { board, setBoard } = useContext(BoardContext);
  const [moveCount, setMoveCount] = useRecoilState(moveCountState);
  const makeMove = ({ yPos, xPos, name }) => {
    // Check if hero piece
    let isHero = name.includes("H");

    //Check if dark piece
    let isDark = name.includes("D");

    let newBoard = board.map((row) => [...row]);
    const emptyTilePosition = getEmptyTile(board);

    //Sometimes the target square can have extra info, eg. "-G". (Empty Goal tile)
    // We want to replace only "-", and not "G".
    const newTileString = newBoard[emptyTilePosition[0]][
      emptyTilePosition[1]
    ].replace("-", isDark ? name + "D" : name);

    newBoard[emptyTilePosition[0]][emptyTilePosition[1]] = newTileString;

    let oldTileString = newBoard[yPos][xPos].replace(name, "-");
    if (isHero) oldTileString = oldTileString.replace("H", "");
    if (isDark) oldTileString = oldTileString.replace("D", "");

    newBoard[yPos][xPos] = oldTileString;

    setBoard(newBoard);
    setMoveCount(moveCount + 1);
  };

  return makeMove;
};

export default useMakeMove;
