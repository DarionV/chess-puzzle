import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
