import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function Recommendations() {
  return (
    <div
      className="flex flex-col md:flex-row gap-10 px-10"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false }}
        className="flex flex-col md:flex-row gap-10 "
      >
        <Image
          src="/recommendations.jpeg"
          width={1000}
          height={700}
          className="object-cover rounded-4xl md:w-1/2"
        />
        <div className="md:w-1/2 flex items-center ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className=" flex flex-col md:gap-20"
          >
            <h1 className="text-black text-4xl text-center">
              {" "}
              Your Weather, Daily Refreshed
            </h1>
            <p className="text-black text-center text-2xl">
              Stay informed with accurate daily forecasts temperature highs and
              lows, humidity, UV index, and sunrise/sunset times,{" "}
              <span className="font-semibold">
                all updated in real-time for your location.
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
