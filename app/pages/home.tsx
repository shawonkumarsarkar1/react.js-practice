import React from "react";
import type { Route } from "../+types/root";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "React.js Practice | Home" },
    {
      name: "description",
      content: "This is the home page of react.js practice.",
    },
  ];
};

const Home = () => {
  return <div>Home</div>;
};

export default Home;
