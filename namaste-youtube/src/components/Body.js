import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);

  return (
    <>
      <Head />
      <div className="flex">
        {isMenuOpen && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
};

export default Body;
