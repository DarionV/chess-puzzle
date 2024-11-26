import React, { useContext } from "react";
import BoardContext from "../context/BoardContext";
import { getEmptyTile } from "../utilities/getEmptyTile";

const useMakeMove = () => {
  const { board, setBoard } = useContext(BoardContext);
  const makeMove = (piece) => {
    const yPos = piece.yPos;
    const xPos = piece.xPos;
    // Check if hero piece
    let isHero = piece.name.includes("H");

    //Check if dark piece
    let isDark = piece.name.includes("D");

    // Sometimes a tile can have extra info, eg. "RG" (Rook on a Goal tile)
    // We only want the abbreviation, in this case R. (Rook)
    let name = piece.name;

    let newBoard = board.map((row) => [...row]);
    const emptyTilePosition = getEmptyTile(board);

    //Sometimes the target square can have extra info, eg. "-G". (Empty Goal tile)
    // We want to replace only "-", and not "G".
    // If Hero piece, make sure to keep the "H"
    const newTileString = newBoard[emptyTilePosition[0]][
      emptyTilePosition[1]
    ].replace("-", isDark ? name + "D" : name);

    newBoard[emptyTilePosition[0]][emptyTilePosition[1]] = isHero
      ? newTileString + "H"
      : newTileString;

    // The same thing applies to the old tile.

    let oldTileString = newBoard[yPos][xPos].replace(name, "-");
    if (isHero) oldTileString = oldTileString.replace("H", "");
    if (isDark) oldTileString = oldTileString.replace("D", "");
    newBoard[yPos][xPos] = oldTileString;

    setBoard(newBoard);
  };

  return makeMove;
};

export default useMakeMove;
