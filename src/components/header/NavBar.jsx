import React, { useState } from "react";
import { TextAlignJustify } from "lucide-react";
import { X } from "lucide-react";
import { NavLink } from "react-router";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="flex items-center justify-between lg:justify-around px-[10dvw]  bg-base-100 p-6 shadow-md
     shadow-gray-500 border-b"
    >
      <div className="flex items-center justify-between ">
        <button className="btn btn-square btn-ghost lg:hidden">
          {toggle ? (
            <X size={36} onClick={() => setToggle(!toggle)}></X>
          ) : (
            <TextAlignJustify onClick={() => setToggle(!toggle)} />
          )}
        </button>
        <ul
          className={`bg-transparent border-b-[.25px] shadow-sm shadow-gray-500 text-white font-semibold px-10 rounded-md py-4  md:hidden absolute top-[10%]  ${
            toggle ? "left-0" : "-left-[100%]"
          } duration-300 flex flex-col gap-4`}
        >
          <li>Home</li>
          <li>Apps</li>
          <li>Installation</li>
        </ul>
      </div>
      <div className="flex-1">
        <NavLink to="/">
          <h2 className="w-max border">SU Apps</h2>
        </NavLink>
      </div>

      <ul className={`hidden lg:mx-10 lg:gap-5  lg:flex`}>
        <li>Home</li>
        <li>Apps</li>
        <li>Installation</li>
      </ul>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost">Contribute</button>
      </div>
    </div>
  );
};

export default NavBar;
