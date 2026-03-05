import React from "react";

export default function Footer() {
  return (
    <div className="">
      <div
        className="flex flex-col md:flex-row justify-center md:justify-between px-5 md:px-80 py-5"
        style={{ backgroundColor: "#EAC8A6" }}
      >
        <div className="text-center md:text-left">
          <h1 className="text-gray-800 font-semibold">
            METEOROGICAL INSTITUTE OF BENGKULU
          </h1>
          <p className="text-gray-700 ">Forecast built for your life.</p>
          <hr className="border-gray-500" />
          <p className="text-sm text-gray-700 text-center">
            © 2025 METEOROGICAL INSTITUTE. All rights reserved.
          </p>
        </div>
        <div className="text-gray-700 font-bold">
          <a href="">About</a>
        </div>
        <div className="text-gray-700 font-bold">
          <a href="">Service</a>
        </div>
      </div>
    </div>
  );
}
