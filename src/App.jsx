import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
