import React from "react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <Image
        src="/navbar.jpg"
        alt="Background"
        fill
        className="object-cover z-0 rounded-b-4xl"
      />

      <div className="absolute top-0 left-0 w-full z-10 ">
        <div className="flex flex-row items-center justify-between px-8 py-4">
          <div className="">
            <h1 className="text-lg font-semibold bg-white text-black py-1 px-5 rounded-4xl">
              METEOROGICAL INSTITUTE
            </h1>
          </div>
          <div className="bg-white/20 py-4 px-6 rounded-4xl">
            <div className="bg-white rounded-2xl px-10 py-1">
              <div className="flex flex-row gap-3 items-center">
                <FiMapPin className="text-black" />
                <h2 className="text-lg hidden md:block rounded-2xl text-black">
                  Bengkulu, Indonesia
                </h2>
              </div>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="bg-white  py-1 px-4 rounded-2xl ">
              <a href="#" className="text-black">
                About
              </a>
            </div>
            <div className="bg-white flex flex-row gap-2 items-center rounded-2xl py-1 px-4">
              <a href="#" className=" text-black">
                Services
              </a>
              <IoArrowDownCircleOutline className="text-black text-2xl" />
            </div>
          </div>
        </div>
        <div className=" flex items-center pt-44 justify-center px-60">
          <h1 className="text-8xl text-center">
            Precise{" "}
            <span>
              <TiWeatherSunny className="text-white text-9xl inline-flex items-center" />{" "}
            </span>{" "}
            weather, precise for you.
          </h1>
        </div>

        <div className="fixed top-80 right-2 z-20">
          <div className="flex flex-col items-center gap-3 max-w-14 rounded-3xl bg-white/40 py-4 px-6 ">
            <a href="">
              {" "}
              <FaInstagram className="text-3xl rounded-3xl" />
            </a>
            <a href="">
              <FaFacebook className="text-3xl rounded-3xl " />
            </a>
            <a href="">
              <FaTiktok className="text-3xl rounded-3xl " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
