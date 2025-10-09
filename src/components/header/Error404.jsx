import React from "react";
import errorNotFound from "../../assets/error-404.png";
import { NavLink } from "react-router";

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center py-10">
      <div>
        <img src={errorNotFound} alt="error image" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-4xl font-bold ">Oops, page not found!</h2>
        <p>The page you are looking for is not available.</p>
        <NavLink to="/">
          <button className="py-2 px-5 bg-gradient-to-r from-purple-700 to-purple-500 font-bold text-white rounded-sm flex items-center gap-3 mx-auto">
            Go Back!
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Error404;
