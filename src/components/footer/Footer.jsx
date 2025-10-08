import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-[#001931] py-10">
      <div className="flex justify-between w-[90dvw] mx-auto border-b border-amber-200">
        <div>
          <div className="flex gap-3 items-center" to="/">
            <img src={logo} alt="logo" className="w-10 h-10 object-cover" />
            <h2 className="text-[clamp(1.5rem,2dvw,2.5rem)] font-bold">
              <span className="text-[#4b99e7]">SU.</span>
              <span className="text-indigo-500">apk</span>
            </h2>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">social links</h2>
          <div className="flex items-center justify-between text-white gap-3 my-3">
            <FaFacebook />
            <RiTwitterXLine />
            <BsLinkedin />
          </div>
        </div>
      </div>
      <div className="w-[90dvw] text-white mx-auto">
        <p className="text-center pt-6">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
