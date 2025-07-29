import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import * as motion from "motion/react-client";

export default function Profile() {
  return (
    <div className="py-8 md:py-20" style={{ backgroundColor: "#EEEEEE" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false }}
        className="flex justify-center"
      >
        <h1 className="max-w-xl mx-auto px-2 text-4xl md:text-7xl text-center text-gray-800 py-10">
          Don't{" "}
          <motion.span
            whileHover={{ backgroundColor: "#f0f0f0", scale: 1.5 }}
            transition={{ duration: 0.2 }}
            className="bg-white/90 pt-2 pb-3 px-3 rounded-4xl shadow-2xl"
          >
            guess
            <TiWeatherPartlySunny className="inline-flex text-" />
          </motion.span>{" "}
          the weather!
        </h1>
      </motion.div>
      <div className="flex justify-center">
        <div className="max-w-2xs">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            className="text-center text-xl text-black"
          >
            Rely on Clime for year-round weather forecast for your location and{" "}
            <span className="font-semibold">accross the world</span>{" "}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
