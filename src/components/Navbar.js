import { useAuth } from "../hooks/useAuth";

import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <span>Example App</span>
      {user && <button onClick={logout}>Log out</button>}
    </div>
  );
};

export default Navbar;
