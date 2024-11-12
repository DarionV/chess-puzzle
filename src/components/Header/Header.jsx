import { useContext } from "react";
import styles from "./header.module.css";
import BoardContext from "../../context/BoardContext";

export default function Header() {
  const { getBuyLink, resetBoard } = useContext(BoardContext);

  return (
    <header className={styles.header}>
      <a href={getBuyLink()} target="blank">
        BUY THIS PUZZLE
      </a>
      <div className={styles.container}>
        <button onClick={resetBoard}>RESET PUZZLE</button>
        <button onClick={resetBoard}>CREDITS</button>
      </div>
    </header>
  );
}
