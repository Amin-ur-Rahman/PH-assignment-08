import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { toast } from "react-toastify";

function Installed({ app, onUninstall }) {
  const handleClick = () => {
    onUninstall(app.id);
  };

  return (
    <div className="bg-white shadow-sm p-3 my-3 rounded-md flex items-center gap-5">
      <div>
        <img src={app.image} alt="app logo" className="w-12 h-12" />
      </div>
      <div className="flex justify-between w-full">
        <div>
          <h2>
            {app.title} - {app.description}
          </h2>
          <div className="flex gap-5">
            <span className="flex items-center gap-1 text-green-500 font-semibold">
              <FiDownload />
              {app.downloads}
            </span>
            <span className="flex items-center gap-1 text-orange-500 font-semibold">
              <FaRegStarHalfStroke />
              {app.ratingAvg}
            </span>
          </div>
        </div>
        <button
          className="px-4 py-2 text-white bg-[#d30000] rounded-md font-semibold hover:cursor-pointer hover:translate-y-[-2px] duration-200"
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
