import React from "react";
const Login = React.lazy(() => import("../containers/Login"));
const Home = React.lazy(() => import("../containers/Home"));
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
{
  path: "/",
  element: (
    <>

      <Login />

    </>
  )
},
{
  path: "/home",
  element: (
    <>

      <Home />
        </>
  )
}

]);

