import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import HomePage from "../pages/home/HomePage";

export const Router = createBrowserRouter(
  [
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTES.NOTFOUND,
      element: <div>404 Not Found</div>,
    },
  ],
  {
    basename: "/my_profile",
  }
);
