import React, { useContext } from "react";
import { useParams } from "react-router";
import DataContext from "../../../DataContext";
import downloadLogo from "../../../assets/icon-downloads.png";
import ratingLogo from "../../../assets/icon-ratings.png";
import reviewLogo from "../../../assets/icon-review.png";

function AppDetails() {
  const appData = useContext(DataContext);

  const { appId } = useParams();
  console.log(appId);

  let selectedApp = appData.find((app) => app.id == appId);
  if (!selectedApp) return;
  const { title, image, description, downloads, ratingAvg, reviews } =
    selectedApp;

  console.log(selectedApp);

  return (
    <div id="main-layer" className="bg-[#f5f5f5]">
      <div id="second-layer" className="w-[90dvw] mx-auto py-20">
        <div id="app-details" className="flex flex-col md:flex-row md:gap-10">
          <div id="app-img">
            <img
              src={image}
              alt="app image"
              className="max-w-sm max-h-sm rounded-sm"
            />
          </div>
          <div id="app-info">
            <h2>
              {title}: {description}
            </h2>
            <p className="pb-6 border-b-2 border-gray-200">
              Developed by <span className="text-violet-500">companyName</span>
            </p>
            <div className="pt-6">
              <div>
                <img src={downloadLogo} alt="downloadLogo" /> <p>downloads</p>{" "}
                <p>{downloads}</p>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div id="rechart"></div>
        <p id="description-box"></p>
      </div>
    </div>
  );
}

export default AppDetails;
