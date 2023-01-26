import { Outlet, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import FourOhFour from "./pages/404";
import Cat from "./components/Cat";

const MainLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <Dashboard />,
        path: "/dashboard",
        children: [
          {
            element: <Cat />,
            path: ":catName",
          },
        ]
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        path: "/404",
        element: <FourOhFour />,
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
    ],
  },
];
