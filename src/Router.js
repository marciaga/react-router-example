import { Outlet, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import FourOhFour from "./pages/404";
import Cat from "./components/Cat";
import { AuthProvider } from "./hooks/useAuth";

// Any routes here will be protected via the AuthProvider's useEffect logic
const AuthorizedLayout = () => (
  <AuthProvider>
    <Layout>
      <Outlet />
    </Layout>
  </AuthProvider>
);

export const routes = [
  {
    element: <AuthorizedLayout />,
    children: [
      {
        element: <Dashboard />,
        path: "/dashboard",
        children: [
          {
            element: <Cat />,
            path: ":catName",
          },
        ],
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
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
    ],
  },
  {
    path: "/about",
    element: (
      <Layout>
        <h1>Unprotected Route</h1>
      </Layout>
    ),
  },
];
