import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";
function Body() {
  return (
    <>
      <div className="flex mt-20 w-100vw">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default Body;
