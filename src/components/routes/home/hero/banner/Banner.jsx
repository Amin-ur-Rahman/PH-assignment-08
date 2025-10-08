import React from "react";
import playstore from "../../../../../assets/playstore.png";
import appstore from "../../../../../assets/appstore.png";

function Banner() {
  return (
    <div className="text-center pt-20 pb-10 ">
      <h1 className="text-[clamp(3rem,4.8dvw,5rem)] font-bold">
        We Build <br /> <span className="text-[#804ee8]">Productive</span> Apps
      </h1>
      <p className="text-lg text-gray-500 max-w-[90dvw] md:max-w-[70%] p-3 mx-auto">
        At SU.apk (su stands for Super User), we craft innovative apps designed
        to make everyday life simpler, smarter, and more exciting.Our goal is to
        turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-3 items-center py-6">
        <button
          type="button "
          className="py-2 px-4 border-2 rounded-sm font-bold text-gray-600 text-lg border-gray-200 flex items-center justify-between gap-2"
        >
          {" "}
          <img
            src={playstore}
            alt="playstore logo"
            className="w-8 h-8 object-cover"
          />
          Google Play
        </button>
        <button
          type="button"
          className="py-2 px-4 border-2 rounded-sm font-bold text-gray-600 text-lg border-gray-200 flex items-center justify-between gap-2"
        >
          <img
            src={appstore}
            alt="app store logo"
            className="w-8 h-8 object-cover"
          />
          App Store
        </button>
      </div>
    </div>
  );
}

export default Banner;
