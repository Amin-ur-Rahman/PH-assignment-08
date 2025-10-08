import React from "react";
import errorimg from "./assets/App-Error.png";
import { NavLink } from "react-router";

function ErrorMessage() {
  return (
    <div className="flex flex-col items-center gap-4 my-20">
      <img src={errorimg} alt="error cat" />
      <h2 className="text-[clamp(1.5rem,3dvw,3rem)] text-center font-bold">
        OPPS!! APP NOT FOUND
      </h2>
      <p className="text-center text-gray-500 ">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <NavLink to="/">
        <button className="py-2 px-5 bg-gradient-to-r from-purple-700 to-purple-500 font-bold text-white rounded-sm flex items-center gap-3 ">
          Go Back!
        </button>
      </NavLink>
    </div>
  );
}

export default ErrorMessage;
