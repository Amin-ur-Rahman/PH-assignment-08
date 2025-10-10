import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { NavLink } from "react-router";

function DefaultAppsCard({ app }) {
  return (
    <NavLink to={`appdetails/${app.id}`}>
      <div className="p-4 rounded-2xl bg-white flex flex-col gap-3 hover:cursor-pointer hover:translate-y-[-2px] duration-200 hover:shadow-md md:h-[435px]">
        <img
          src={app.image}
          className="w-[300px] h-[300px] object-cover rounded-2xl"
          alt="app logo"
        />
        <h2 className="font-semibold">
          {app.title}{" "}
          <small className="line-clamp-1 text-gray-600">
            {app.description}
          </small>
        </h2>
        <div className="flex justify-between">
          <span className="flex items-center justify-between gap-2 text-green-600 font-semibold">
            <FiDownload />
            {app.downloads}
          </span>
          <span className="flex items-center justify-between gap-2 text-orange-600 font-semibold">
            <FaRegStarHalfStroke />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </NavLink>
  );
}

export default DefaultAppsCard;
