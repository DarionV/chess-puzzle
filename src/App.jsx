import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./context/ThemeContext";

function App() {
  const theme = useTheme();
  const themeStyling = theme === "light" ? "light" : "dark";
  return (
    <>
      <Header />
      <main className={themeStyling}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
