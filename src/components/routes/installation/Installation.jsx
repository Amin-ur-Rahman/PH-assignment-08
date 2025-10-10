import React, { useContext, useEffect, useState } from "react";
import { getAppData } from "./installationFunction";
import DataContext from "../../../DataContext";
import Installed from "./Installed";

function Installation() {
  const allApps = useContext(DataContext);
  const [installedIds, setInstalledIds] = useState(getAppData());
  const [filteredArray, setFilteredArray] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const filteredApps = allApps.filter((app) =>
      installedIds.includes(String(app.id))
    );
    setFilteredArray(filteredApps);
  }, [installedIds, allApps]);

  const handleUninstall = (idToRemove) => {
    const updatedIds = installedIds.filter((id) => id !== String(idToRemove));
    localStorage.setItem("installed", JSON.stringify(updatedIds));
    setInstalledIds(updatedIds);
  };
  const sortedArray = [...filteredArray].sort((a, b) => {
    if (sort === "Low-High") return a.size - b.size;
    if (sort === "High-Low") return b.size - a.size;
    return 0;
  });

  console.log(sortedArray);

  return (
    <div className="py-10 bg-[#f5f5f5] px-[5dvw] w-full mx-auto">
      <div className="pb-10 ">
        <h1 className="text-4xl text-center my-3 font-bold">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-center line-clamp-1 text-sm md:text-[1rem]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">
            ({installedIds.length}) Apps Installed
          </p>
          <select
            className="p-2 text-center border-2 border-gray-300 rounded-md text-gray-600 text-sm"
            name="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="size" disabled>
              Sort by size
            </option>
            <option value="Low-High">Low - High</option>
            <option value="High-Low">High - Low</option>
          </select>
        </div>
        {installedIds.length > 0 ? (
          sortedArray.map((app) => (
            <Installed app={app} key={app.id} onUninstall={handleUninstall} />
          ))
        ) : (
          <h1 className="text-4xl text-center my-3 font-bold">
            No Apps Installed
          </h1>
        )}
      </div>
    </div>
  );
}

export default Installation;
