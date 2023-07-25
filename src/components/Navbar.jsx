import { NavLink } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import "./Navbar.css";

const Navbar = () => {
  const { token, logout } = useAuth();

  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      {token && (
        <button type="button" onClick={logout}>Log Out</button>
      )}
    </nav>
  );
};

export default Navbar;
