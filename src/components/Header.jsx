import React from "react";
import Ratings from "./Ratings";
import Users from "./Users";
const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row w-full">
      <Users />
      <Ratings />
    </header>
  );
};

export default Header;
