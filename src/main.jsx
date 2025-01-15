import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Game from "./pages/Game";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/the-bishop" replace />,
    errorElement: <Error />,
  },
  {
    path: "/:puzzleId",
    element: <Game />,
    errorElement: <Error />,
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
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      defaultColorScheme="auto"
      theme={{ cursorType: "pointer" }}
    >
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </MantineProvider>
  </StrictMode>
);
