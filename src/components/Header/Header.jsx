import { useContext } from "react";
import styles from "./header.module.css";
import BoardContext from "../../context/BoardContext";

export default function Header() {
  const { getBuyLink, resetBoard } = useContext(BoardContext);

  return (
    <header className={styles.header}>
      <button onClick={resetBoard}>RESET PUZZLE</button>
      <a href={getBuyLink()} target="blank">
        BUY THIS PUZZLE
      </a>
    </header>
  );
}
