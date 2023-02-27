import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";
import { globalStyle } from "./assets/styles/global";
import Template from "./components/Template";

globalStyle();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Template>
      <RouterProvider router={routes} />
    </Template>
  </React.StrictMode>
);
