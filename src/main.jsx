import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/routes/home/Home.jsx";
import AllApps from "./components/routes/allApps/AllApps.jsx";
import Installation from "./components/routes/installation/installation.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import AppDetails from "./components/routes/appDetails/AppDetails.jsx";
import Error404 from "./components/header/Error404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        errorElement: <Error404></Error404>,
      },
      {
        path: "allapps",
        element: <AllApps></AllApps>,
        errorElement: <Error404></Error404>,
      },
      {
        path: "installation",
        element: <Installation></Installation>,
        errorElement: <Error404></Error404>,
      },
      {
        path: "appdetails/:appId",
        element: <AppDetails></AppDetails>,
        errorElement: <Error404></Error404>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

