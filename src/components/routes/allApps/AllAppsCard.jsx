import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { NavLink } from "react-router";

function AllAppsCard({ app }) {
  return (
    <NavLink to={`/appdetails/${app.id}`}>
      <div className="p-4 rounded-md bg-white flex flex-col gap-3">
        <div className="">
          <img src={app.image} alt="app logo" />
        </div>
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

export default AllAppsCard;
