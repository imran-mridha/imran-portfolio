import React from "react";
import Nav from "../Components/Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-[#000]">
      <div className="z-0">
        <Nav />
      </div>
      <div className="container mx-auto z-10">
        <Outlet />
      </div>
      <div className="bg-tertiary">
      <Footer />
      </div>
    </div>
  );
};

export default Main;
