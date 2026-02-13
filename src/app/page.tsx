"use client"
import StatRefLink from "../components/StatRefLink";
import { activeIds } from "../constants";

const page = () => {
  return (
    <div>
      <h1>Hello</h1>
      {activeIds.map((id) => (
        <StatRefLink name={id} key={id} />
      ))}
    </div>
  );
};

export default page;
