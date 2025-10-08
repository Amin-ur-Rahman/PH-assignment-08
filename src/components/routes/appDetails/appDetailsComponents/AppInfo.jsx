import React, { useContext } from "react";
import { useParams } from "react-router";
import downloadLogo from "../../../../assets/icon-downloads.png";
import ratingLogo from "../../../../assets/icon-ratings.png";
import reviewLogo from "../../../../assets/icon-review.png";
import DataContext from "../../../../DataContext";
import AppChart from "./AppChart";

function AppInfo() {
  const appData = useContext(DataContext);

  const { appId } = useParams();
  //   console.log(appId);

  let selectedApp = appData.find((app) => app.id == appId);
  if (!selectedApp) return;
  const { title, image, description, downloads, ratingAvg, reviews, size } =
    selectedApp;

  //   console.log(selectedApp);

  return (
    <div id="main-layer" className="bg-[#f5f5f5]">
      <div id="second-layer" className="w-[90dvw] mx-auto py-20">
        <div
          id="app-details"
          className="flex flex-col items-center justify-center  md:flex-row md:gap-10 pb-5 border-b-2 border-gray-200 "
        >
          <div
            id="app-img"
            className="bg-white shadow-sm shadow-gray-500 w-max "
          >
            <img
              src={image}
              alt="app image"
              className="max-w-[300px] max-h-[300px]  object-cover"
            />
          </div>
          <div id="app-info" className=" py-3 px-5  w-full">
            <h2 className="text-lg font-bold">
              {title}: {description}
            </h2>
            <p className="pb-6 border-b-2 border-gray-200 text-gray-400">
              Developed by{" "}
              <span className="text-violet-500 font-semibold">companyName</span>
            </p>
            <div className="pt-6 flex justify-between w-max md:gap-20">
              <div className="flex flex-col gap-1 justify-center items-center">
                <img src={downloadLogo} alt="downloadLogo" /> <p>downloads</p>{" "}
                <p className="font-bold text-2xl">{downloads}</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <img src={ratingLogo} alt="ratingLogo" /> <p>ratings</p>{" "}
                <p className="font-bold text-2xl">{ratingAvg}</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <img src={reviewLogo} alt="reviewLogo" /> <p>reviews</p>{" "}
                <p className="font-bold text-2xl">{reviews}</p>
              </div>
            </div>
            <button className="px-4 py-2 text-white bg-[#00d390] rounded-md font-semibold block mt-10">
              Install Now ({size}MB)
            </button>
          </div>
        </div>
        <div id="rechart">
          <AppChart app={selectedApp}></AppChart>
        </div>
        <p id="description-box"></p>
      </div>
    </div>
  );
}

export default AppInfo;
