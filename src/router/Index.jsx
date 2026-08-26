import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import CookieCounter from "../components/Cookie-clicker/Counter";
import CatFact from "../components/CatAPI/RandomCat";
import UserManager from "../components/UserManager/UserManager";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <CookieCounter />,
      },
      {
        path: "cat",
        element: <CatFact />,
      },
      {
        path: "user",
        element: <UserManager />,
      },
    ],
  },
]);
