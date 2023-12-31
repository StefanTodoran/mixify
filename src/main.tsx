import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import LibraryPage from "./pages/LibraryPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import LogoutPage from "./pages/LogoutPage.tsx";
import HelpPage from "./pages/HelpPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import FriendsPage from "./pages/FriendsPage.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "search",
        element: <SearchPage/>,
      },
      {
        path: "library",
        element: <LibraryPage/>,
      },
      {
        path: "friends",
        element: <FriendsPage/>,
      },
      {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path: "logout",
        element: <LogoutPage/>,
      },
      {
        path: "help",
        element: <HelpPage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
