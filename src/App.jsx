import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import FourOhFour from "./pages/404";
import Cat from "./pages/Cat";
import AuthProvider from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <h1>React Router Example</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Home />} path="home" />
        <Route
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          path="dashboard"
        >
          <Route element={<Cat />} path=":catName" />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
          path="admin"
        />
        <Route element={<FourOhFour />} path="*" />
      </Routes>
    </AuthProvider>
  );
}

export default App;
