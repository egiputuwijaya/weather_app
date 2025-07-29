import { TiWeatherSunny } from "react-icons/ti";
import * as motion from "motion/react-client";

export default function WeatherMobile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="p-4 text-gray-800 block md:hidden"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Bengkulu, Indonesia</h2>
        <p className="text-sm text-gray-500">Selasa, 29 Juli 2025</p>
      </div>

      <div className="flex flex-col items-center mb-4">
        <TiWeatherSunny className="text-yellow-400 text-6xl" />
        <h1 className="text-5xl font-bold">32°C</h1>
        <p className="text-md text-gray-600">Cerah Berawan</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center text-sm">
        <div>
          <p className="font-semibold">Kelembapan</p>
          <p>65%</p>
        </div>
        <div>
          <p className="font-semibold">Angin</p>
          <p>15 km/jam</p>
        </div>
        <div>
          <p className="font-semibold">UV Index</p>
          <p>Tinggi</p>
        </div>
        <div>
          <p className="font-semibold">Tekanan</p>
          <p>1012 hPa</p>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-4 px-2">
          {["10:00", "13:00", "16:00", "19:00", "22:00"].map((jam, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-2 w-24 text-center"
            >
              <p className="text-sm">{jam}</p>
              <TiWeatherSunny className="text-yellow-400 text-2xl mx-auto" />
              <p className="text-lg font-semibold">30°C</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
