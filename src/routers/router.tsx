import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import HomePage from "../pages/home/HomePage";
import AppLayout from "../layouts/appLayout/AppLayout";

export const Router = createBrowserRouter(
  [
    {
      path: ROUTES.HOME,
      element: <AppLayout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTES.NOTFOUND,
          element: <div>404 Not Found</div>,
        },
      ],
    },
  ],
  {
    basename: "/my_profile",
  }
);
