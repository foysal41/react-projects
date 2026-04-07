import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Routes";
import Bookprovider from "./context/Bookprovider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Bookprovider>
      <RouterProvider router={router} />
    </Bookprovider>
  </StrictMode>,
);
