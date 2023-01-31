import { useAuth } from "../hooks/useAuth";

import "./Navbar.css";

const Navbar = () => {
  // if useAuth is called outside of the AuthProvider, set a default
  const { logout, user } = useAuth() ?? { user: null };

  return (
    <div className="navbar">
      <span>Example App</span>
      <span>{user ? `Hello ${user.name}` : ""}</span>
      {user && <button onClick={logout}>Log Out</button>}
    </div>
  );
};

export default Navbar;
