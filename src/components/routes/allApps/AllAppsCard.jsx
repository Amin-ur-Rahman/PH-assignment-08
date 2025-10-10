import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { NavLink } from "react-router";
import Error404 from "../../header/Error404";
import { number } from "../../../NumberFunction";

function AllAppsCard({ app }) {
  const id = Number(app.id);

  return (
    <NavLink to={`/appdetails/${id}`}>
      <div className="p-4 rounded-2xl bg-white flex flex-col gap-3 hover:cursor-pointer hover:translate-y-[-2px] duration-200 hover:shadow-md h-max max-w-[350px] items-center md:items-">
        {/* <div className="flex"> */}
        <img
          src={app.image}
          className="w-[300px] h-[300px] object-cover rounded-2xl"
          alt="app logo"
        />
        {/* </div> */}
        <h2 className="font-semibold">
          {app.title}{" "}
          <small className="line-clamp-1 text-gray-600">
            {app.description}
          </small>
        </h2>
        <div className="flex justify-between w-full gap-3">
          <span className="flex items-center justify-between gap-1 text-green-600 font-semibold">
            <FiDownload />
            {number(app.downloads)}
          </span>
          <span className="flex items-center justify-between gap-1 text-orange-600 font-semibold">
            <FaRegStarHalfStroke />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </NavLink>
  );
}

export default AllAppsCard;
