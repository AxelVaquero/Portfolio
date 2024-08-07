import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import HomeComponent from "./components/home/HomeComponent.jsx";
import Periodismo from "./pages/Periodismo.jsx";
import Historia from "./pages/Historia.jsx";
import Fotografia from "./pages/Fotografia.jsx";
import Audiovisual from "./pages/Audiovisual.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    path: "/periodismo",
    element: <Periodismo />,
  },
  {
    path: "/historia",
    element: <Historia />,
  },
  {
    path: "/fotografia",
    element: <Fotografia />,
  },
  {
    path: "/audiovisual",
    element: <Audiovisual />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} basename="Portfolio"/>
  </React.StrictMode>
);