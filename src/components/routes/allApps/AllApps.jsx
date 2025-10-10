import React, { useContext, useState } from "react";
import DataContext from "../../../DataContext";
import AllAppsCard from "./AllAppsCard";
import ErrorMessage from "../../../ErrorMessage";
import logo from "../../../assets/logo.png";

function AllApps() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const hadnleSearch = (e) => {
    setSearchValue(e.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 150);
  };
  console.log(searchValue);

  const allApps = useContext(DataContext);

  const filterApps = allApps.filter((app) => {
    return searchValue === ""
      ? true
      : app.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="bg-[#f5f5f5]">
      <div className=" w-[90dvw] mx-auto flex flex-col items-center py-20 gap-3">
        <h2 className="text-[#001931] text-[clamp(1.5rem,3dvw,3rem)] font-bold text-center">
          All Our Applications
        </h2>
        <p className="text-center mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between items-center  w-full">
          <h2 className="text-[clamp(1rem,2dvw,2.2rem)] font-semibold">
            ({allApps.length}) apps found
          </h2>
          <input
            onChange={hadnleSearch}
            type="text"
            name="text"
            placeholder="search apps"
            className="border border-gray-400 rounded-sm px-2 py-1 w-[150px] md:w-auto"
          />
        </div>
        {loading && (
          <div className="loading-overlay">
            <div className="loading-content">
              <img src={logo} alt="Loading" className="rotating-img" />
              <span className="loading-text">LOADING</span>
              <img src={logo} alt="Loading" className="rotating-img" />
            </div>
          </div>
        )}
        {filterApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5  pb-10">
            {filterApps.map((app) => (
              <AllAppsCard app={app} key={app.id}></AllAppsCard>
            ))}
          </div>
        ) : (
          <ErrorMessage></ErrorMessage>
        )}
      </div>
    </div>
  );
}

export default AllApps;
