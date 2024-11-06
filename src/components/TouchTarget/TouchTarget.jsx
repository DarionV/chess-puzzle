import { useContext } from "react";
import style from "./TouchTarget.module.css";
import BoardContext from "../../context/BoardContext";

const TouchTarget = ({
  size,
  yPos,
  xPos,
  pieces,
  setHighlightedPieceId,
  setShowPromoteModal,
}) => {
  //To center piece in tile properly
  const topOffset = 100;
  const leftOffset = size * 0.2;

  const { board, setBoard } = useContext(BoardContext);

  const getTile = (board, yPos, xPos) => {
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

  const getEmptyTile = () => {
    let position = [];
    board.forEach((row, yPos) => {
      row.forEach((tile, xPos) => {
        if (tile === "-") {
          position = [yPos, xPos];
        }
      });
    });
    return position;
  };

  const checkValidMove = (piece) => {
    if (piece.includes("-")) return;
    switch (piece) {
      case "P":
        return getTile(board, yPos, xPos - 1).includes("-");
      case "B":
        return (
          getTile(board, yPos + 1, xPos - 1).includes("-") ||
          getTile(board, yPos - 1, xPos + 1).includes("-") ||
          getTile(board, yPos - 1, xPos - 1).includes("-") ||
          getTile(board, yPos + 1, xPos + 1).includes("-")
        );
      case "N":
        return (
          getTile(board, yPos - 2, xPos - 1).includes("-") ||
          getTile(board, yPos - 2, xPos + 1).includes("-") ||
          getTile(board, yPos + 2, xPos - 1).includes("-") ||
          getTile(board, yPos + 2, xPos + 1).includes("-") ||
          getTile(board, yPos - 1, xPos - 2).includes("-") ||
          getTile(board, yPos - 1, xPos + 2).includes("-") ||
          getTile(board, yPos + 1, xPos - 2).includes("-") ||
          getTile(board, yPos + 1, xPos + 2).includes("-")
        );
      case "R":
        return (
          getTile(board, yPos - 1, xPos).includes("-") ||
          getTile(board, yPos + 1, xPos).includes("-") ||
          getTile(board, yPos, xPos - 1).includes("-") ||
          getTile(board, yPos, xPos + 1).includes("-")
        );
      case "Q":
        return (
          getTile(board, yPos - 1, xPos).includes("-") ||
          getTile(board, yPos + 1, xPos).includes("-") ||
          getTile(board, yPos, xPos - 1).includes("-") ||
          getTile(board, yPos, xPos + 1).includes("-") ||
          getTile(board, yPos + 1, xPos - 1).includes("-") ||
          getTile(board, yPos - 1, xPos + 1).includes("-") ||
          getTile(board, yPos - 1, xPos - 1).includes("-") ||
          getTile(board, yPos + 1, xPos + 1).includes("-")
        );

      default:
        console.log("Couldn't evaluate valid move");
        break;
    }
  };

  const makeMove = (piece) => {
    let newBoard = board.map((row) => [...row]);
    const emptyTilePosition = getEmptyTile();
    newBoard[emptyTilePosition[0]][emptyTilePosition[1]] = piece;
    newBoard[yPos][xPos] = "-";
    setBoard(newBoard);
  };

  const handleClick = () => {
    const piece = getTile(board, yPos, xPos);
    if (checkValidMove(piece)) makeMove(piece);
  };

  return (
    <button
      onClick={handleClick}
      className={style.touchTarget} //remove this later
      style={{
        width: size * 0.6,
        height: size * 0.6,
        position: "absolute",
        top: `${xPos * 0.25 * size + yPos * 0.25 * size + topOffset}px`,
        left: `${
          xPos * 0.43 * size + yPos * -0.43 * size - size / 2 + leftOffset
        }px`,
      }}
      onMouseEnter={() => {
        const targetedPiece = pieces.filter(
          (piece) => piece.xpos === xPos && piece.ypos === yPos
        );
        if (targetedPiece[0] === undefined) return;
        setHighlightedPieceId(targetedPiece[0].id);
      }}
      onMouseLeave={() => {
        setHighlightedPieceId("");
      }}
    ></button>
  );
};

export default TouchTarget;
