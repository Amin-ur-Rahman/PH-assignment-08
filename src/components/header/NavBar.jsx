import React, { useState } from "react";
import { TextAlignJustify } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { X } from "lucide-react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import "./nav.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="flex items-center   justify-between   bg-base-100 py-3 px-[5dvw] shadow-md
      "
    >
      <div className="flex items-center gap-5 ">
        <button className="btn btn-square btn-ghost md:hidden">
          {toggle ? (
            <X size={36} onClick={() => setToggle(!toggle)}></X>
          ) : (
            <TextAlignJustify onClick={() => setToggle(!toggle)} />
          )}
        </button>
        <ul
          className={`bg-white  border-b-[.25px] shadow-sm shadow-gray-500 text-black font-semibold px-5 rounded-md py-4  absolute top-[8%]  ${
            toggle ? "left-0" : "-left-[100%]"
          } duration-300 flex flex-col gap-4 font-semibold`}
        >
          <X
            size={20}
            onClick={() => setToggle(!toggle)}
            className=" hover:bg-gray-300 self-end"
          ></X>
          <NavLink to="/">Home</NavLink>
          <NavLink to="allapps">Apps</NavLink>
          <NavLink to="/installation">Installation</NavLink>
        </ul>
        <div>
          <div className="flex gap-3 items-center" to="/">
            <img src={logo} alt="logo" className="w-10 h-10 object-cover" />
            <h2 className="text-[clamp(1.5rem,2dvw,2.5rem)] font-bold hover:cursor-pointer  duration-200 ">
              <span className="text-[#4b99e7]">SU.</span>
              <span className="text-indigo-500">apk</span>
            </h2>
          </div>
        </div>
      </div>

      <ul className={`hidden lg:mx-10 lg:gap-5  lg:flex font-semibold`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allapps">Apps</NavLink>
        <NavLink to="/installation">Installation</NavLink>
      </ul>

      <div className="flex-none">
        <a
          href="https://github.com/Amin-ur-Rahman?tab=repositories"
          target="_blank"
        >
          <button className="py-2 px-5 bg-gradient-to-r from-purple-700 to-purple-500 font-bold text-white rounded-sm flex items-center gap-3 hover:cursor-pointer hover:translate-y-[-2px] duration-200 ">
            {" "}
            <FaGithub />
            Contribute
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
