import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import downloadLogo from "../../../../assets/icon-downloads.png";
import ratingLogo from "../../../../assets/icon-ratings.png";
import reviewLogo from "../../../../assets/icon-review.png";
import DataContext from "../../../../DataContext";
import AppChart from "./AppChart";
import { toast } from "react-toastify";

function AppInfo() {
  const appData = useContext(DataContext);

  const { appId } = useParams();
  //   console.log(appId);
  const [isInstalled, setInstalled] = useState(false);
  useEffect(() => {
    const installedApps = getAppData();
    setInstalled(installedApps.includes(appId));
  }, [appId]);

  const handleInstallation = (id) => {
    const installedApps = setAppData(id);
    const justInstalled = installedApps.includes(id);
    setInstalled(installedApps.includes(id));
    console.log(justInstalled);

    return justInstalled;
  };

  let selectedApp = appData.find((app) => app.id == appId);
  if (!selectedApp) return <ErrorMessage></ErrorMessage>;
  const {
    title,
    image,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    details,
  } = selectedApp;

  // const localAppSTR = localStorage.getItem("installed");
  // const localAppData = JSON.parse(localAppSTR);
  // console.log("line 26", localAppData);

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
            <h2 className="text-lg font-bold text-center md:text-start">
              {title}: {description}
            </h2>
            <p className="pb-6 border-b-2 border-gray-200 text-gray-400 text-center md:text-start">
              Developed by{" "}
              <span className="text-violet-500 font-semibold">companyName</span>
            </p>
            <div className="pt-6 flex justify-center md:justify-between mx-auto md:mx-0 w-max gap-10 md:gap-20">
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
            <button
              onClick={() => {
                !isInstalled
                  ? toast(`congrats! ${title} has been installed successfully`)
                  : "";
                handleInstallation(appId);
              }}
              disabled={isInstalled}
              className="px-4 py-2 text-white bg-[#00d390] rounded-md font-semibold block mx-auto md:mx-0 mt-10  hover:cursor-pointer hover:translate-y-[-2px] duration-200 "
            >
              {/* {`Install Now (${size}MB) `} */}
              {isInstalled ? "installed" : `Install Now (${size}MB) `}
            </button>
          </div>
        </div>
        <div id="rechart">
          <AppChart app={selectedApp}></AppChart>
        </div>
        <div id="description-box" className="my-10">
          <h2 className="my-5 text-xl font-semibold">Description</h2>
          {details}
        </div>
      </div>
    </div>
  );
}
import {
  getAppData,
  setAppData,
} from "../../installation/installationFunction";
import ErrorMessage from "../../../../ErrorMessage";

export default AppInfo;
