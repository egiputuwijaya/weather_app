import React from "react";
import Image from "next/image";
import { SiAccuweather } from "react-icons/si";
import {
  TiWeatherDownpour,
  TiWeatherCloudy,
  TiWeatherSunny,
  TiWeatherWindy,
} from "react-icons/ti";
import { FaRegClock } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import * as motion from "motion/react-client";

export default function Weather() {
  return (
    <div className="hidden md:block">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className=" relative flex justify-center py-10 px-20"
        style={{ backgroundColor: "#EEEEEE" }}
      >
        <div className="">
          <Image
            src="/background.jpg"
            width={1400}
            height={500}
            className="rounded-4xl object-cover z-0"
          />
        </div>
        <div className="absolute inset-24 bg-black/60 rounded-4xl z-10">
          <div className="flex flex-row gap-8 px-10 py-5">
            <div className="w-1/3 flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false }}
                className="flex flex-row items-center gap-1 px-10 rounded-3xl border border-white"
                style={{ backgroundColor: "#222831" }}
              >
                {" "}
                <LuMapPin className="text-xl text-gray-300" />
                <input
                  type="text"
                  placeholder="Location"
                  className=" py-2 w-full focus:outline-none"
                />
              </motion.div>
              <div className="relative w-full">
                <Image
                  src="/background.jpg"
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover"
                  alt="background"
                />
                <div className="absolute inset-10 z-10 text-white flex flex-col justify-between">
                  {/* Bagian Atas (Informasi Cuaca Utama) */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="text-center space-y-2"
                  >
                    <h3 className="text-7xl font-semibold">31°</h3>
                    <p className="text-3xl">Cerah</p>
                    <p className="text-sm">
                      Jangan remehkan matahari! Tabir surya bantu cegah kulit
                      terbakar
                    </p>
                  </motion.div>

                  {/* 4 Kotak Hitam Transparan */}
                  <div className="grid grid-cols-2 gap-4 mt-10">
                    {/* Kotak 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                      className="bg-black/50 backdrop-blur-md rounded-xl p-4"
                    >
                      <p>TERASA SEPERTI</p>
                      <h4 className="text-3xl font-bold">29°</h4>
                      <p className="text-xs text-gray-300">
                        Udara terasa lebih dingin
                      </p>
                    </motion.div>

                    {/* Kotak 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                      className="bg-black/50 backdrop-blur-md rounded-xl p-4"
                    >
                      <p className="text-sm text-gray-300">CURAH HUJAN</p>
                      <h4 className="text-3xl font-bold">2.4”</h4>
                      <p className="text-xs text-gray-300">
                        Naik 2” pada hari esok
                      </p>
                    </motion.div>

                    {/* Kotak 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                      className="bg-black/50 backdrop-blur-md rounded-xl p-4"
                    >
                      <p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="text-sm text-gray-300"
                      >
                        JARAK PANDANG
                      </p>
                      <h4 className="text-3xl font-bold">5 KM</h4>
                      <p className="text-xs text-gray-300">
                        Masih aman untuk berkendara
                      </p>
                    </motion.div>

                    {/* Kotak 4 */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                      className="bg-black/50 backdrop-blur-md rounded-xl p-4"
                    >
                      <p className="text-sm text-gray-300">KELEMBAPAN</p>
                      <h4 className="text-3xl font-bold">87%</h4>
                      <p className="text-xs text-gray-300">
                        Beberapa tempat lebih lembab
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3 flex flex-col gap-3">
              {/* perkiraan tiap jam  */}
              <div className="bg-black/60 py-4 px-8 rounded-2xl">
                <div className="flex flex-row gap-3 items-center">
                  <FaRegClock className="text-gray-200 text-xl" />
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="text-xl"
                  >
                    PERKIRAAN TIAP JAM
                  </motion.h2>
                </div>
                <hr className="border-gray-500 py-2" />
                <div className="flex flex-row gap-12 justify-around">
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">Sekarang</h2>
                    <h1 className="text-4xl">31°</h1>
                    <SiAccuweather className="text-yellow-400 text-5xl" />
                    <h2>Cerah</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">17.00</h2>
                    <h1 className="text-4xl">29°</h1>
                    <TiWeatherDownpour className="text-blue-400 text-5xl" />
                    <h2>Hujan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">18.00</h2>
                    <h1 className="text-4xl">29°</h1>
                    <TiWeatherDownpour className="text-blue-400 text-5xl" />
                    <h2>Hujan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">19.00</h2>
                    <h1 className="text-4xl">29°</h1>
                    <TiWeatherDownpour className="text-blue-400 text-5xl" />
                    <h2>Hujan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">20.00</h2>
                    <h1 className="text-4xl">27°</h1>
                    <TiWeatherCloudy className=" text-5xl" />
                    <h2>Berawan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">17.00</h2>
                    <h1 className="text-4xl">29°</h1>
                    <TiWeatherCloudy className=" text-5xl" />
                    <h2>Berawan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">17.00</h2>
                    <h1 className="text-4xl">29°</h1>
                    <TiWeatherDownpour className="text-blue-400 text-5xl" />
                    <h2>Hujan</h2>
                  </div>
                </div>
              </div>
              {/* perkiraan dalam minggu ini  */}
              <div className="bg-black/60 py-4 px-8 rounded-2xl">
                <div className="flex flex-row gap-3 items-center">
                  <CiCalendar className="text-gray-200 text-2xl" />
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="text-xl"
                  >
                    PERKIRAAN DALAM MINGGU INI
                  </motion.h2>
                </div>
                <hr className="border-gray-500 py-2" />
                <div className="flex flex-row gap-12 justify-around">
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">20/08</h2>
                    <h1 className="text-4xl">28°</h1>
                    <TiWeatherDownpour className="text-blue-400 text-5xl" />
                    <h2>Hujan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">21/08</h2>
                    <h1 className="text-4xl">29°</h1>
                    <TiWeatherDownpour className="text-blue-400 text-5xl" />
                    <h2>Hujan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">22/08</h2>
                    <h1 className="text-4xl">29°</h1>
                    <TiWeatherDownpour className="text-blue-400 text-5xl" />
                    <h2>Hujan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">23/08</h2>
                    <h1 className="text-4xl">29°</h1>
                    <TiWeatherDownpour className="text-blue-400 text-5xl" />
                    <h2>Hujan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">24/08</h2>
                    <h1 className="text-4xl">27°</h1>
                    <TiWeatherCloudy className=" text-5xl" />
                    <h2>Berawan</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">25/08</h2>
                    <h1 className="text-4xl">32°</h1>
                    <SiAccuweather className="text-yellow-400 text-5xl" />
                    <h2>Cerah</h2>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="">26/08</h2>
                    <h1 className="text-4xl">30°</h1>
                    <SiAccuweather className="text-yellow-400 text-5xl" />
                    <h2>Cerah</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-around">
                {/* UV index dan kecepatan angin */}
                {/* uv index  */}
                <div className="flex flex-row justify-around gap-8">
                  <div className=" flex flex-col bg-black/60 py-3 pl-10 pr-20 rounded-2xl gap-2">
                    <div className="flex flex-row gap-2 items-center">
                      <TiWeatherSunny className="text-4xl text-yellow-400" />
                      <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                      >
                        UV INDEX
                      </motion.h2>
                    </div>
                    <div className="">
                      <h2 className="text-5xl">5</h2>
                      <p>Sedang</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      Gunakan Tabir Surya Saat Bepergian
                    </p>
                  </div>
                </div>
                {/* kecepatan angin */}
                <div className=" flex flex-col bg-black/60 py-3 pl-10 pr-20 rounded-2xl gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <TiWeatherWindy className="text-4xl" />
                    <motion.h2
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                    >
                      UV INDEX
                    </motion.h2>
                  </div>
                  <div className="">
                    <div className="flex flex-row gap-2 ">
                      <h2 className="text-5xl">20</h2>
                      <p>KM/H</p>
                    </div>
                    <p>Kencang</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    Tetap di dalam ruangan dan hindari area berisiko tinggi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
