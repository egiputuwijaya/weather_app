"use client";
import React from "react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";
import { useState } from "react";
import * as motion from "motion/react-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: false }}
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
            <h1 className="text-lg font-semibold bg-white text-black py-1 px-5 md:rounded-4xl">
              METEOROGICAL INSTITUTE
            </h1>
          </div>
          {/* tampilan desktop */}
          <div className="bg-white/20 py-4 px-6 rounded-4xl hidden md:block">
            <div className="bg-white rounded-2xl px-10 py-1">
              <div className="flex flex-row gap-3 items-center">
                <FiMapPin className="text-black" />
                <h2 className="text-lg hidden md:block rounded-2xl text-black">
                  Bengkulu, Indonesia
                </h2>
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <motion.div
              className="bg-white py-1 px-4 rounded-2xl "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.a href="#" className="text-black font-medium ">
                About
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white flex flex-row gap-2 items-center rounded-2xl py-1 px-4"
            >
              <a href="#" className=" text-black">
                Services
              </a>
              <IoArrowDownCircleOutline className="text-black text-2xl" />
            </motion.div>
          </div>

          {/* tampilan mobile */}
          <button
            className="text-black text-3xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center">
            <a
              href="#"
              className="bg-white px-4 py-2  text-black w-full text-center hover:bg-gray-600 hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="bg-white px-4 py-2  text-black w-full text-center hover:bg-gray-600 hover:text-white"
            >
              Services
            </a>
          </div>
        )}
        <div className=" flex items-center pt-30 md:pt-44 justify-center  md:px-60">
          <h1 className="text-5xl md:text-8xl text-center">
            Precise{" "}
            <span>
              <TiWeatherSunny className="text-white md:text-9xl inline-flex items-center" />{" "}
            </span>{" "}
            weather, precise for you.
          </h1>
        </div>

        <div className="fixed top-80 right-2 z-20">
          <div className="flex flex-col items-center gap-3 max-w-14 rounded-3xl bg-white/80 mix-blend-difference py-4 px-6 hover:bg-white ">
            <a href="">
              {" "}
              <FaInstagram className="text-3xl  rounded-3xl hover:text-pink-700" />
            </a>
            <a href="">
              <FaFacebook className="text-3xl rounded-3xl hover:text-blue-500" />
            </a>
            <a href="">
              <FaTiktok className="text-3xl rounded-3xl hover:text-black" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
