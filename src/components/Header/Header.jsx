import { useContext } from "react";
import styles from "./header.module.css";
import BoardContext from "../../context/BoardContext";

export default function Header({ toggleAbout }) {
  const { getBuyLink, resetBoard } = useContext(BoardContext);

  return (
    <header className={styles.header}>
      <button onClick={resetBoard}>RESET</button>
      <a href={getBuyLink()} target="blank">
        BUY THIS PUZZLE
      </a>
      <button onClick={toggleAbout}>ABOUT</button>
    </header>
  );
}
