import { useContext } from "react";
import style from "./TouchTarget.module.css";
import BoardContext from "../../context/BoardContext";

const TouchTarget = ({ size, yPos, xPos }) => {
  //To center piece in tile properly
  const topOffset = 87;
  const leftOffset = size * 0.15;

  const { board } = useContext(BoardContext);

  const searchBoard = (board, yPos, xPos) => {
    if (
      xPos < 0 ||
      yPos < 0 ||
      xPos > board[0].length - 1 || //array is even in size. 5x5, 7x7 etc. So checking length of 1st row is sufficient.
      yPos > board.length - 1 ||
      board[yPos][xPos] == null // check for "holes" in the board
    )
      return "X"; //Prevent moves outside of board
    return board[yPos][xPos];
  };

  const checkValidMove = (piece) => {
    if (piece.includes("-")) return;
    switch (piece) {
      case "P":
        return searchBoard(board, yPos, xPos - 1).includes("-");
      case "B":
        return (
          searchBoard(board, yPos + 1, xPos - 1).includes("-") ||
          searchBoard(board, yPos - 1, xPos + 1).includes("-") ||
          searchBoard(board, yPos - 1, xPos - 1).includes("-") ||
          searchBoard(board, yPos + 1, xPos + 1).includes("-")
        );
      case "N":
        return (
          searchBoard(board, yPos - 2, xPos - 1).includes("-") ||
          searchBoard(board, yPos - 2, xPos + 1).includes("-") ||
          searchBoard(board, yPos + 2, xPos - 1).includes("-") ||
          searchBoard(board, yPos + 2, xPos + 1).includes("-") ||
          searchBoard(board, yPos - 1, xPos - 2).includes("-") ||
          searchBoard(board, yPos - 1, xPos + 2).includes("-") ||
          searchBoard(board, yPos + 1, xPos - 2).includes("-") ||
          searchBoard(board, yPos + 1, xPos + 2).includes("-")
        );
      case "R":
        return (
          searchBoard(board, yPos - 1, xPos).includes("-") ||
          searchBoard(board, yPos + 1, xPos).includes("-") ||
          searchBoard(board, yPos, xPos - 1).includes("-") ||
          searchBoard(board, yPos, xPos + 1).includes("-")
        );
      case "Q":
        return (
          searchBoard(board, yPos - 1, xPos).includes("-") ||
          searchBoard(board, yPos + 1, xPos).includes("-") ||
          searchBoard(board, yPos, xPos - 1).includes("-") ||
          searchBoard(board, yPos, xPos + 1).includes("-") ||
          searchBoard(board, yPos + 1, xPos - 1).includes("-") ||
          searchBoard(board, yPos - 1, xPos + 1).includes("-") ||
          searchBoard(board, yPos - 1, xPos - 1).includes("-") ||
          searchBoard(board, yPos + 1, xPos + 1).includes("-")
        );

      default:
        console.log("Couldn't evaluate valid move");
        break;
    }
  };

  const handleClick = () => {
    const piece = searchBoard(board, yPos, xPos);
    console.log("--------------");
    console.log("xPos:" + xPos + " yPos:" + yPos);
    console.log("Piece found:" + piece);
    console.log("Is the move valid?: " + checkValidMove(piece));
  };

  return (
    <button
      onClick={handleClick}
      className={style.touchTarget} //remove this later
      style={{
        width: size * 0.7,
        height: size * 0.7,
        position: "absolute",
        top: `${xPos * 0.29 * size + yPos * 0.29 * size + topOffset}px`,
        left: `${
          xPos * 0.5 * size + yPos * -0.5 * size - size / 2 + leftOffset
        }px`,
      }}
    ></button>
  );
};

export default TouchTarget;
