import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomepageCocktail from "./pages/Homepage/HomepageCocktail";
import HomepageMocktail from "./pages/Homepage/HomepageMocktail";
import RecipePage from "./pages/RecipePage/RecipePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageCocktail />,
  },
  {
    path: "/mocktail",
    element: <HomepageMocktail />,
  },
  {
    path: "/:id",
    element: <RecipePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
