import React from "react";
import hero from "../../../../../assets/hero.png";

function Banner2() {
  return (
    <section className="  ">
      <img src={hero} className="object-cover  mx-auto" alt="hero image" />

      <div className=" text-white py-15 bg-gradient-to-br from-[#632ee3] to-[#985cf0]">
        <h2 className="text-center text-[clamp(1.6rem,3.6dvw,3rem)] font-bold">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex justify-center gap-10 items-center flex-wrap w-[80dvw] mx-auto mt-10">
          <div className="flex flex-col justify-center items-center border p-3 rounded-md ">
            <h3 className="text-sm">Total Downloads:</h3>
            <p className="text-[clamp(1.8rem,3.8dvw,3.4rem)] font-bold">
              29.6M
            </p>
            <h3>21% more than last month</h3>
          </div>
          <div className="flex flex-col justify-center items-center border p-3 rounded-md ">
            <h3 className="text-sm">Total Downloads:</h3>
            <p className="text-[clamp(1.8rem,3.8dvw,3.4rem)] font-bold">
              29.6M
            </p>
            <h3>21% more than last month</h3>
          </div>
          <div className="flex flex-col justify-center items-center border p-3 rounded-md ">
            <h3 className="text-sm">Total Downloads:</h3>
            <p className="text-[clamp(1.8rem,3.8dvw,3.4rem)] font-bold">
              29.6M
            </p>
            <h3>21% more than last month</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner2;
