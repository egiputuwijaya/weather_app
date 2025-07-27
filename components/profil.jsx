import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

export default function Profile() {
  return (
    <div className="py-20" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="flex justify-center">
        <h1 className="max-w-xl text-7xl text-center text-gray-800 py-10">
          Don't{" "}
          <span className="bg-white/90 pt-2 pb-3 px-3 rounded-4xl shadow-2xl">
            guess
            <TiWeatherPartlySunny className="inline-flex text-" />
          </span>{" "}
          the weather!
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="max-w-2xs">
          <p className="text-center text-xl text-black">
            Rely on Clime for year-round weather forecast for your location and{" "}
            <span className="font-semibold">accross the world</span>{" "}
          </p>
        </div>
      </div>
      
    </div>
  );
}
