"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
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
import {
  getConditionLabel,
  getHumadity,
  getRainfall,
  getUVLevel,
  getUVSuggest,
  getVisibility,
  getWind,
  getWindSuggest,
} from "@/utils/weatherLabel";

export default function Weather() {
  // logika mengambil API
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [city, setCity] = useState("Jakarta");
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
        );
        const data = await res.json();
        setWeather(data);
        setForecast(data.forecast.forecastday[0].hour.slice(10, 17));
        setWeeklyForecast(data.forecast.forecastday);
      } catch (error) {
        console.log("Gagal fetch cuaca", error);
      }
    };
    fetchWeather();
  }, [city]);

  const handleSubmit = (e) => {
    if (searchCity.trim() !== "") {
      setCity(searchCity);
    }
  };

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
                <form action={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Location"
                    value={searchCity}
                    onChange={(e) => {
                      setSearchCity(e.target.value);
                    }}
                    className=" py-2 w-full focus:outline-none"
                  />
                </form>
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
                    <h3 className="text-7xl font-semibold">
                      {" "}
                      {weather ? `${weather.current.temp_c}°` : "Memuat..."}
                    </h3>
                    <p className="text-3xl">
                      {weather ? weather.current.condition.text : ""}
                    </p>
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
                      <h4 className="text-3xl font-bold">
                        {weather ? `${weather.current.feelslike_c}°` : ""}
                      </h4>
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
                      <div className="flex flex-col">
                        {weather ? (
                          <>
                            <h4 className="text-3xl font-bold">
                              {" "}
                              {
                                weather.forecast.forecastday[0].day
                                  .totalprecip_mm
                              }
                            </h4>
                            <p className="text-xs">
                              {getRainfall(
                                weather.forecast.forecastday[0].day
                                  .totalprecip_mm
                              )}
                            </p>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
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
                      <div className="">
                        {weather ? (
                          <>
                            {" "}
                            <h4 className="text-3xl font-bold">
                              {weather.current.vis_km}KM
                            </h4>
                            <p className="text-xs text-gray-300">
                              {getVisibility(weather.current.vis_km)}
                            </p>
                          </>
                        ) : (
                          <>
                            <p>Memuat Data...</p>
                          </>
                        )}
                      </div>
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

                      <div className="">
                        {weather ? (
                          <>
                            {" "}
                            <h4 className="text-3xl font-bold">
                              {weather ? `${weather.current.humidity}%` : ""}
                            </h4>
                            <p className="text-xs text-gray-300">
                              {getHumadity(weather.current.getHumadity)}
                            </p>
                          </>
                        ) : (
                          <>
                            <p>Memuat Data...</p>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3 flex flex-col gap-8">
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
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row gap-5 "
                  >
                    {forecast.map((hour, index) => {
                      const time = new Date(hour.time).getHours();
                      const temperature = Math.round(hour.temp_c);
                      const condition = hour.condition.text;
                      const icon = hour.condition.icon;

                      return (
                        <div
                          className="flex flex-col items-center min-w-[80px]"
                          key={index}
                        >
                          <h2 className="text-white">
                            {time === new Date().getHours()
                              ? "Sekarang"
                              : `${time}.00`}
                          </h2>
                          <h1 className="text-4xl">{temperature}°</h1>
                          <img src={icon} className="w-12 h-12" />
                          <h2 className="text-white text-center">
                            {getConditionLabel(condition)}
                          </h2>
                        </div>
                      );
                    })}
                  </motion.div>
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
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row gap-5 items-center"
                  >
                    {weeklyForecast.map((day, index) => {
                      const date = day.date;
                      const formatDate = new Date(day.date).toLocaleDateString(
                        "id-ID",
                        { day: "numeric", month: "long" }
                      );
                      const temperature = Math.round(day.day.avgtemp_c);
                      const condition = day.day.condition.text;
                      const icon = day.day.condition.icon;

                      return (
                        <div
                          className="flex flex-col items-center  min-w-[80px]"
                          key={index}
                        >
                          <h2 className="text-white">{formatDate}</h2>
                          <h1 className="text-4xl">{temperature}</h1>
                          <img src={icon} className="w-12 h-12" />
                          <h2>
                            {getConditionLabel(condition)}
                            {console.log(condition)}
                          </h2>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
              <div className="flex flex-row gap-8 justify-around">
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
                      {weather ? (
                        <>
                          <h2 className="text-5xl">{weather.current.uv}</h2>
                          <p>{getUVLevel(weather.current.uv)}</p>
                          <p className="text-xs text-gray-500">
                            {getUVSuggest(weather.current.uv)}
                          </p>
                        </>
                      ) : (
                        <p>memuat Data UV</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* kecepatan angin */}
                <div className=" flex flex-col bg-black/60 py-3 pl-10 pr-20 rounded-2xl gap-3">
                  <div className="flex flex-row gap-2 items-center">
                    <TiWeatherWindy className="text-4xl" />
                    <motion.h2
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                    >
                      KECEPATAN ANGIN
                    </motion.h2>
                  </div>
                  <div className="">
                    {weather ? (
                      <>
                        <div className="flex flex-row gap-2 ">
                          <h2 className="text-5xl">
                            {weather ? weather.current.wind_kph : ""}
                          </h2>
                          <p>KM/H</p>
                        </div>
                        <p>{getWind(weather.current.wind_kph)}</p>
                        <p className="text-xs text-gray-500">
                          {getWindSuggest(weather.current.wind_kph)}
                        </p>
                      </>
                    ) : (
                      <p>Memuat Data Angin</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
