import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import lightStyle from "./AppLight.module.css";
import darkStyle from "./AppDark.module.css";
import { useTheme } from "./context/ThemeContext";

function App() {
  const theme = useTheme();
  const themeStyling = theme === "light" ? lightStyle : darkStyle;
  return (
    <>
      <Header />
      <main className={themeStyling.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
