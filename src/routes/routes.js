import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import ProjectDetail from "../container/ProductDetail/ProjectDetail";
import AllProjects from "../container/AllProjects/AllProjects";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/productDetail/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/allProjects",
    element: <AllProjects />,
  },
]);

export default routes;
