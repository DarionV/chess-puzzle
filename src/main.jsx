import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Game from "./pages/Game";
import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/pawn-queen-puzzle" replace />,
  },
  {
    path: "/:puzzleId",
    element: <App />,
    children: [
      {
        path: "/:puzzleId",
        element: <Game />,
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
