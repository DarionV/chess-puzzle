import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./pages/Game";
import Tutorial from "./pages/Tutorial";
import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // path: "/play",
        element: <Game />,
      },
      {
        path: "/:puzzleId",
        element: <Game />,
      },
      {
        path: "/how-to-play",
        element: <Tutorial />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>
);
