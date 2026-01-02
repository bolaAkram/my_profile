import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import HomePage from "../pages/home/HomePage";
import AppLayout from "../layouts/appLayout/AppLayout";
import AboutPage from "../pages/about/AboutPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import ContactMePage from "../pages/contactMe/ContactMePage";

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
          path: ROUTES.ABOUT,
          element: <AboutPage />,
        },
        {
          path: ROUTES.PROJECTS,
          element: <ProjectsPage />,
        },
        {
          path: ROUTES.CONTACT_ME,
          element: <ContactMePage />,
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
