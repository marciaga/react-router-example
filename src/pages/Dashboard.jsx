import { Link } from "react-router-dom";

import { mockCats } from "../data";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { token } = useAuth();
  return (
    <>
      <h2>Dashboard (Protected)</h2>
      <ul>
        {mockCats.map((cat) => (
          <li key={cat.id}>
            <Link to={cat.name.toLowerCase()}>{cat.name}</Link>
          </li>
        ))}
      </ul>
      <p>Token is: {token}</p>
    </>
  );
};

export default Dashboard;
