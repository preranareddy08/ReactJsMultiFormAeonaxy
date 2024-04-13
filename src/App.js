import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body.js";
import Interested from "./components/Interested.js";
import RightPlace from "./components/RightPlace.js";
import Math from "./components/Math.js";
import Onway from "./components/Onway.js";
import FinalPage from "./components/FinalPage.js";
import Last from "./components/Last.js";
const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/interested",
        element: <Interested />,
      },
      {
        path: "/rightplace",
        element: <RightPlace />,
      },
      {
        path: "/math",
        element: <Math />,
      },
      {
        path: "/onway",
        element: <Onway />,
      },
      {
        path: "/final",
        element: <FinalPage />,
      },
      {
        path: "/last",
        element: <Last />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
