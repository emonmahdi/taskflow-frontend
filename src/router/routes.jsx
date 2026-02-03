import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../components/Layout";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import ProtectedLayout from "./ProtectedLayout";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
            ],
          },
        ],
      },
      // {
      //   index: true,
      //   element: <Layout />,
      // },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
