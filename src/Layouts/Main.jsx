import React from "react";
import Nav from "../Components/Nav/Nav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-[#000]">
      <div className="">
        <Nav />
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
