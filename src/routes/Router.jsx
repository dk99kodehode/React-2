import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import CatFact from "../components/CatAPI/RandomCat";
import UserManager from "../components/UserManager/UserManager";
import CookieClicker from "../components/Cookie-clicker/CookieClicker";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <CookieClicker />,
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
