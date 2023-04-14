import { useEffect, useState, useMemo, createContext, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { setValueInLocalStorage, getValueFromLocalStorage } from "../utils";
import { mockUser } from "../data";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // check local storage for user
    const lsUser = getValueFromLocalStorage("user");
    if (lsUser) {
      setUser(lsUser);
      navigate(location.pathname);
    } else {
      navigate("/login");
    }
  }, []);

  const login = () => {
    setUser(mockUser);
    setValueInLocalStorage("user", mockUser);
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    setValueInLocalStorage("user", null);
    navigate("/login");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
// export a hook that returns the AuthContext's value in any other component
export const useAuth = () => {
  return useContext(AuthContext);
};
