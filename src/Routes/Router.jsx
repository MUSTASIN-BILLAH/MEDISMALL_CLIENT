import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Home/Home";
import About from "../Page/About";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
