import { useState, useEffect, useContext, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getValueFromLocalStorage, setValueInLocalStorage } from "../utils";

const TOKEN_KEY = 'token';

const fakeAuth = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("982342kjsdflks1234234"), 250)
  );

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const t = getValueFromLocalStorage(TOKEN_KEY);

    if (t) {
      setToken(t);
      navigate(location.pathname);
    }
  }, [])

  const handleLogin = async () => {
    const tkn = await fakeAuth();
    setToken(tkn);
    setValueInLocalStorage(TOKEN_KEY, tkn);
    navigate("/dashboard");
  };
  const handleLogout = () => {
    setToken(null);
    setValueInLocalStorage(TOKEN_KEY, null);
  };

  const value = { token, login: handleLogin, logout: handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
