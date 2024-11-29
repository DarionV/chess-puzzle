import { useContext } from "react";
import styles from "./Header.module.css";
import BoardContext from "../../context/BoardContext";
import {
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

export default function Header({ toggleAbout }) {
  const { getBuyLink, resetBoard } = useContext(BoardContext);
  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const computedColorScheme = useComputedColorScheme("dark");

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.header}>
      <button onClick={resetBoard}>RESET</button>
      <button onClick={toggleAbout}>ABOUT</button>
      <Switch
        onLabel="Light"
        offLabel="Dark"
        size="lg"
        onClick={toggleColorScheme}
      ></Switch>
    </header>
  );
}
