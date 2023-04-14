import React from "react";

import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import { mockCats } from "../data";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Hello {user?.name}</h1>
      <ul>
        {mockCats.map((cat) => (
          <li key={cat.id}>
            <Link to={cat.name.toLowerCase()}>{cat.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet context={[mockCats]} />
    </div>
  );
};

export default Dashboard;
