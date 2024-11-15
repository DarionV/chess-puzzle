import { useContext } from "react";
import styles from "./Header.module.css";
import BoardContext from "../../context/BoardContext";
import { Tooltip } from "@mantine/core";

export default function Header({ toggleAbout }) {
  const { getBuyLink, resetBoard } = useContext(BoardContext);

  return (
    <header className={styles.header}>
      <button onClick={resetBoard}>RESET</button>
      <Tooltip label="Affiliate link" withArrow>
        <a href={getBuyLink()} target="blank">
          BUY THIS PUZZLE
        </a>
      </Tooltip>
      <button onClick={toggleAbout}>ABOUT</button>
    </header>
  );
}
