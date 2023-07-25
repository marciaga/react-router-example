import { Outlet, Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

const mockCats = [
  {
    id: "14eelakklsjdfkjasdl",
    name: "Pepper",
    personality: "likes mischief",
  },
  {
    id: "1a234lkjsdlkj2234k",
    name: "Tron",
    personality: "extra spicy",
  },
];

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
      <Outlet context={[mockCats]} />
    </>
  );
};

export default Dashboard;
