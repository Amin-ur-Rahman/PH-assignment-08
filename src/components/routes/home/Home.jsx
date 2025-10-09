import React, { Suspense, useContext } from "react";
import Hero from "./hero/Hero";
import DefaultAppsCard from "./defaultApps/DefaultAppsCard";
import DataContext from "../../../DataContext";
import { NavLink } from "react-router";

function Home() {
  const appData = useContext(DataContext);
  console.log(appData.length);

  const defaultApps = appData.slice(0, 8);
  console.log(defaultApps);

  return (
    <div className="bg-[#f5f5f5]">
      <Hero></Hero>
      <div className=" w-[90dvw] mx-auto flex flex-col items-center py-20 gap-3">
        <h2 className="text-[#001931] text-[clamp(1.5rem,3dvw,3rem)] font-bold text-center">
          Trending Apps
        </h2>
        <p className="text-center">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5  pb-10">
          <Suspense fallback={<div>Loading...</div>}>
            {defaultApps.map((app) => (
              <DefaultAppsCard key={app.id} app={app}></DefaultAppsCard>
            ))}
          </Suspense>
        </div>

        <NavLink className="mx-auto " to="/allapps">
          <button className="py-2 px-5 bg-gradient-to-r from-purple-700 to-purple-500 font-bold text-white rounded-sm flex items-center gap-3 mx-auto hover:cursor-pointer hover:translate-y-[-2px] duration-200">
            All Apps
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
