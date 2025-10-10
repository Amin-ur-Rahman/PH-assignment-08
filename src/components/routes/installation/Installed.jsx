import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { toast } from "react-toastify";
import { number } from "../../../NumberFunction";

function Installed({ app, onUninstall }) {
  const handleClick = () => {
    onUninstall(app.id);
  };

  return (
    <div className="bg-white shadow-sm p-3 my-3 rounded-md flex items-center gap-5">
      <img src={app.image} alt="app logo" className="w-12 h-12 rounded-lg" />

      <div className="flex justify-between w-full">
        <div>
          <div className="md:flex items-center justify-center gap-2">
            <p className="text-xl font-semibold text-gray-500 ">{app.title}</p>{" "}
            <p className="hidden md:block">- {app.description}</p>
          </div>
          <div className="flex gap-5">
            <span className="flex items-center gap-1 text-green-500 font-semibold">
              <FiDownload />
              {number(app.downloads)}
            </span>
            <span className="flex items-center gap-1 text-orange-500 font-semibold">
              <FaRegStarHalfStroke />
              {app.ratingAvg}
            </span>
          </div>
        </div>
        <button
          className="px-4 py-2 h-max self-center md:py-3 text-white bg-[#d30000] rounded-md font-semibold hover:cursor-pointer hover:translate-y-[-2px] duration-200"
          onClick={() => {
            handleClick();
            toast(`${app.title} has uninstalled from device`);
          }}
        >
          Uninstall
        </button>
      </div>
    </div>
  );
}

export default Installed;
