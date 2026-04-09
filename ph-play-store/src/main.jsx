import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout';
import Apps from './pages/Apps/Apps';
import InstalledApps from './pages/InstalledApps/InstalledApps';
import NotFound from './pages/NotFoundPage/NotFound';
import Homepage from './pages/Homepage/Homepage';



const router = createBrowserRouter([
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
        path: '/installedApp',
        Component: InstalledApps
      }
    ], 
    errorElement: <NotFound></NotFound>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
