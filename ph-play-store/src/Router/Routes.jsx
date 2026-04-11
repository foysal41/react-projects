import { createBrowserRouter } from "react-router";
import Apps from "../pages/Apps/Apps";
import InstalledApps from "../pages/InstalledApps/InstalledApps";
import Homepage from "../pages/Homepage/Homepage";
import RootLayout from "../Layout/RootLayout";
import NotFound from "../pages/NotFoundPage/NotFound";
import AppDetails from "../pages/appDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>

      },
      {
        path: '/app',
        Component: Apps
      },
      {
        path: "app/:id",
        Component: AppDetails
      },
      {
        path: '/installedApp',
        Component: InstalledApps
      }
    ], 
    errorElement: <NotFound></NotFound>
  },
]);