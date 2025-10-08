import React, { useContext } from "react";
import DataContext from "../../../DataContext";
import AllAppsCard from "./AllAppsCard";

function AllApps() {
  const allApps = useContext(DataContext);
  return (
    <div className="bg-[#f5f5f5]">
      <div className=" w-[90dvw] mx-auto flex flex-col items-center py-20 gap-3">
        <h2 className="text-[#001931] text-[clamp(1.5rem,3dvw,3rem)] font-bold text-center">
          Trending Apps
        </h2>
        <p className="text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between items-center  w-full">
          <h2 className="text-xl font-semibold">
            ({allApps.length}) apps found
          </h2>
          <input
            type="text"
            name="text"
            placeholder="search apps"
            className="border border-gray-400 rounded-sm px-2 py-1"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5  pb-10">
          {allApps.map((app) => (
            <AllAppsCard app={app} key={app.id}></AllAppsCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllApps;
