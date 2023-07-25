import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import FourOhFour from "./pages/404";
import Cat from "./pages/Cat";
import AuthProvider from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import { mockCats } from "./data";

import "./App.css";

const loadCats = () =>
  new Promise((resolve) => {
    return setTimeout(() => resolve(mockCats), 250);
  });

const Layout = () => (
  <AuthProvider>
    <Navbar />
    <h1>React Router Example</h1>
    <Outlet />
  </AuthProvider>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "home",
      },
      {
        element: <FourOhFour />,
        path: "*",
      },
      {
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        path: "dashboard",
      },
      {
        element: (
          <ProtectedRoute>
            <Cat />
          </ProtectedRoute>
        ),
        path: "dashboard/:catName",
        loader: loadCats,
      },
      {
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        path: "admin",
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
