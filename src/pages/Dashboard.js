import { Outlet, Link } from "react-router-dom";

import { mockCats } from "../data";

const Dashboard = () => {
  return (
    <div>
      Hello from Dashboard
      <ul>
        {mockCats.map((cat) => (
          <li key={cat.id}>
            <Link to={cat.name.toLowerCase()}>{cat.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet context={[mockCats]}/>
    </div>
  );
};

export default Dashboard;
