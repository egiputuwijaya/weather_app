import Image from "next/image";
import Navbar from "../../components/Navbar";
import Profile from "../../components/profil";
import Footer from "../../components/Footer";
import Weather from "../../components/Weather";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Weather />
      <Footer />
    </div>
  );
}
