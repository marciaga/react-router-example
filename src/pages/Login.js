import React from "react";

import { useAuth } from "../hooks/useAuth";

const Login = (props) => {
  const { login } = useAuth();

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
