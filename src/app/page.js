import Image from "next/image";
import Navbar from "../../components/Navbar";
import Profile from "../../components/profil";
import Footer from "../../components/Footer";
import Weather from "../../components/Weather";
import Recommendations from "../../components/Recommendations";
import WeatherTitle from "../../components/WeatherTitle";
import Benefits from "../../components/Benefits";
import WeatherMobile from "../../components/WeatherMobile";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <Navbar />
      <Profile />
      <Recommendations />
      <WeatherTitle />
      <WeatherMobile />
      <Weather />
      <Benefits />
      <Footer />
    </div>
  );
}
