import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { TbBrowserCheck } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 border-gray-300 ">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink to="/add" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
          <IoAddCircleOutline className="text-2xl"/>
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
          <CiBoxList className="text-2xl"/>
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink to="/orders" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
          <TbBrowserCheck className="text-2xl"/>
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
