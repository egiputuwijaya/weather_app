import React from "react";
import * as motion from "motion/react-client";

export default function Benefits() {
  const benefits = [
    {
      judul: "Accurate & Real-Time Data",
      isi: "Get precise weather updates down to the hour, powered by the latest meteorological technology.",
    },
    {
      judul: "Smart Weather Alerts",
      isi: "Receive instant notifications about extreme weather conditions like thunderstorms, heavy rain, or high UV index — before it affects you.",
    },
    {
      judul: "Location-Based Forecasts",
      isi: "Whether you're traveling or staying local, our system delivers tailored weather insights wherever you are.",
    },
    {
      judul: "Health & Safety Recommendations",
      isi: "Stay protected with automatic suggestions like “Wear sunscreen” or “Bring an umbrella” based on current conditions.",
    },
    {
      judul: "Simple, Intuitive Interface",
      isi: "Designed for everyone  clear visuals, color-coded warnings, and minimal distractions. ",
    },
    {
      judul: "Plan Ahead, Live Better",
      isi: "From morning commutes to weekend getaways, make better decisions by understanding tomorrow’s weather today.",
    },
  ];
  return (
    <div className="" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="py-5 md:py-20">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          className="text-gray-800 text-3xl md:text-6xl text-center "
        >
          Why Use Our Weather Forecast App?
        </motion.h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 px-3 md:px-30 py-10">
          {benefits.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              key={index}
              className="px-3 py-5 rounded-3xl"
              style={{ backgroundColor: "#DCCFC0" }}
            >
              <h3 className="text-gray-800 text-xl font-semibold">
                {item.judul}
              </h3>
              <hr className="border border-gray-900" />
              <p className="text-gray-800 py-5">{item.isi}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
