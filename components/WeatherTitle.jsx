import React from "react";
import * as motion from "motion/react-client";

export default function WeatherTitle() {
  return (
    <div className="w-full pt-25 pb-10" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="max-w-4xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          {" "}
          <h1 className="text-gray-800 text-4xl md:text-7xl text-center px-5">
            Stay One Step Ahead of the Weather
          </h1>
          <p className="text-gray-700 text-xl text-center pt-5 px-5 md:px-0">
            Knowing the weather isn't just a convenience it's a necessity. Our
            advanced weather forecast platform empowers you with{" "}
            <span className="text-gray-800 font-semibold">
              real-time updates, accurate predictions, and smart alerts{" "}
            </span>
            to help you plan your day with confidence.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
