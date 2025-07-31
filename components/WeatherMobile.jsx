"use client";
import { TiWeatherSunny } from "react-icons/ti";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { LuMapPin } from "react-icons/lu";
import {
  getConditionLabel,
  getHumadity,
  getUVSuggest,
  getWindSuggest,
} from "@/utils/weatherLabel";

export default function WeatherMobile() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
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
        setForecast(data.forecast.forecastday[0].hour.slice(12, 17));
      } catch (error) {
        console.log("Gagal fetch cuaca", error);
      }
    };
    fetchWeather();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchCity.trim() !== "") {
      setCity(searchCity);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="p-4 text-gray-800 block md:hidden"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <div className="flex flex-row items-center gap-2 justify-center text-center mb-4 py-1 border border-gray-800 rounded-2xl">
        <LuMapPin className="text-xl text-gray-800" />
        <form onChange={handleSubmit}>
          <input
            type="text"
            value={searchCity}
            placeholder="Location"
            onChange={(e) => {
              setSearchCity(e.target.value);
            }}
            className="text-black text-2xl font-medium focus:outline-none"
          />
        </form>
      </div>

      <div className="flex flex-col items-center mb-4">
        {weather && (
          <img
            src={`https:${weather.current.condition.icon}`}
            className="w-20 h-20"
          ></img>
        )}
        <h1 className="text-5xl font-bold">
          {" "}
          {weather ? `${weather.current.temp_c}°` : "Memuat..."}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center text-sm">
        <div>
          {weather ? (
            <>
              {" "}
              <p className="font-semibold text-xl">Kelembapan</p>
              <p className="text-2xl font-bold">{weather.current.humidity}</p>
              <p className="text-xs">{getHumadity(weather.current.humidity)}</p>
            </>
          ) : (
            <>
              <p>Memuat Data...</p>
            </>
          )}
        </div>
        <div>
          {weather ? (
            <>
              <p className="font-semibold text-xl">Angin</p>
              <p className="text-2xl font-bold">
                {weather.current.wind_kph} KM/H
              </p>
              <p className="text-xs">
                {getWindSuggest(weather.current.wind_kph)}
              </p>
            </>
          ) : (
            <>
              <p>Memuat Data</p>
            </>
          )}
        </div>
        <div>
          {weather ? (
            <>
              <p className="font-semibold text-xl">UV Index</p>
              <p className="text-2xl font-bold">{weather.current.uv}</p>
              <p className="text-xs">{getUVSuggest(weather.current.uv)}</p>
            </>
          ) : (
            <>
              <p>Memuat Data...</p>
            </>
          )}
        </div>
        <div>
          {weather ? (
            <>
              {" "}
              <p className="font-semibold text-xl">Jarak Pandang</p>
              <p className="text-2xl font-bold">{weather.current.vis_km} KM</p>
            </>
          ) : (
            <>
              <p>Memuat Data</p>
            </>
          )}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto whitespace-nowrap">
        <h1 className="text-center text-2xl pt-8 pb-5 font-semibold">Cuaca hari ini </h1>
        <div className="flex flex-row gap-2 px-2">
          {forecast.map((hour, index) => {
            const time = new Date(hour.time).getHours();
            const temperature = Math.round(hour.temp_c);
            const condition = hour.condition.text;
            const icon = hour.condition.icon;

            return (
              <div className="bg-white shadow rounded-xl p-2 w-24 text-center">
                <p>{time}.00</p>
                <p className="text-lg font-semibold">{temperature}°</p>
                <div className="flex justify-center">
                  <img src={icon} alt="" className="w-10 h-10 items-center" />
                </div>
                <p className="text-xs">{getConditionLabel(condition)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
