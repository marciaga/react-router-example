import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthProvider } from "./hooks/useAuth";
import NotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Cat from "./components/Cat";
import ErrorMessage from "./components/Error";
import Layout from "./components/Layout";

const AuthLayout = () => (
  <AuthProvider>
    <Layout>
      <Outlet />
    </Layout>
  </AuthProvider>
);

export const routes = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorMessage />,
        children: [
          {
            path: ":catName",
            element: <Cat />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
];
