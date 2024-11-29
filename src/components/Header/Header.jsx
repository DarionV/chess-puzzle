import { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import BoardContext from "../../context/BoardContext";
import {
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export default function Header({ toggleAbout }) {
  const { resetBoard } = useContext(BoardContext);
  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  };

  const [isDark, setIsDark] = useState(colorScheme);

  useEffect(() => {
    setIsDark(computedColorScheme === "light");
  }, [computedColorScheme]);

  const moonIcon = <IconMoonFilled style={{ width: 20, height: 20 }} />;
  const sunIcon = <IconSunFilled style={{ width: 20, height: 20 }} />;

  return (
    <header className={styles.header}>
      <button onClick={resetBoard}>RESET</button>
      <button onClick={toggleAbout}>ABOUT</button>
      <Switch
        color="gray"
        onLabel={moonIcon}
        offLabel={sunIcon}
        size="lg"
        checked={isDark}
        onClick={toggleColorScheme}
      ></Switch>
    </header>
  );
}
