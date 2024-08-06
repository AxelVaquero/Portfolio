import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeComponent from "./components/home/HomeComponent.jsx";
import Periodismo from "./pages/Periodismo.jsx";
import Historia from "./pages/Historia.jsx";
import Fotografia from "./pages/Fotografia.jsx";
import Audiovisual from "./pages/Audiovisual.jsx";

const router = createBrowserRouter([
  {
    path: "/Portfolio/",
    element: <HomeComponent />,
  },
  {
    path: "/Portfolio/periodismo",
    element: <Periodismo />,
  },
  {
    path: "/Portfolio/historia",
    element: <Historia />,
  },
  {
    path: "/Portfolio/fotografia",
    element: <Fotografia />,
  },
  {
    path: "/Portfolio/audiovisual",
    element: <Audiovisual />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
