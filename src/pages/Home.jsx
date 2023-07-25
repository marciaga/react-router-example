import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { token, login } = useAuth();

  return (
    <>
      <h2>Home (public)</h2>
      <button onClick={login} type="button">Log In</button>
    </>
  );
};

export default Home;
