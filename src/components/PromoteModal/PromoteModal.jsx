import React, { useEffect } from "react";
import style from "./PromoteModal.module.css";
import rookIcon from "../../assets/icons/rook-black.png";
import knightIcon from "../../assets/icons/knight-black.png";
import bishopIcon from "../../assets/icons/bishop-black.png";
import queenIcon from "../../assets/icons/queen-black.png";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useContext } from "react";
import BoardContext from "../../context/BoardContext";

const PromoteModal = ({ promotePawn }) => {
  const { setBoard, board } = useContext(BoardContext);
  const [opened, { toggle }] = useDisclosure(false);

  useEffect(() => {
    board.forEach((row) => {
      if (row[0] && row[0].includes("P")) toggle();
    });
  }, [board]);

  function promotePawn(piece) {
    let rowIndex; //Row that the pawn is located at
    board.forEach((row, index) => {
      if (!row[0]) return;
      if (row[0].includes("P")) {
        rowIndex = index;
      }
    });
    let newBoard = [...board];
    let piecePosition = newBoard[rowIndex][0];

    switch (piece) {
      case "R":
        newBoard[rowIndex][0] = piecePosition.replace("P", "R");
        break;
      case "N":
        newBoard[rowIndex][0] = piecePosition.replace("P", "N");
        break;
      case "B":
        newBoard[rowIndex][0] = piecePosition.replace("P", "B");
        break;
      case "Q":
        newBoard[rowIndex][0] = piecePosition.replace("P", "Q");
        break;

      default:
        console.log("Could not promote to " + piece);
        break;
    }
    setBoard(newBoard);
    toggle();
  }

  return (
    <Modal
      className={style.modal}
      withCloseButton={false}
      centered
      opened={opened}
      styles={{
        body: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          textAlign: "center",
          gap: "12px",
          fontFamily: `"Open Sans", sans-serif`,
        },
      }}
    >
      <button
        aria-label="promote to rook"
        onClick={() => {
          promotePawn("R");
        }}
      >
        <img src={rookIcon} alt="rook" />
      </button>
      <button
        aria-label="promote to knight"
        onClick={() => {
          promotePawn("N");
        }}
      >
        <img src={knightIcon} alt="knight" />
      </button>
      <button
        aria-label="promote to bishop"
        onClick={() => {
          promotePawn("B");
        }}
      >
        <img src={bishopIcon} alt="bishop" />
      </button>
      <button
        aria-label="promote to queen"
        onClick={() => {
          promotePawn("Q");
        }}
      >
        <img src={queenIcon} alt="queen" />
      </button>
    </Modal>
  );
};

export default PromoteModal;
