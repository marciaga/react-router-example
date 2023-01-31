import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default Login;
