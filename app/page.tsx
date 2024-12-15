import AboutUs from "./components/AboutUs/AboutUs";
import FoodCategory from "./components/FoodCategory/FoodCategory";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <div className="bg-black-500 text-white">
      <HeroBanner />
      <AboutUs />
      <FoodCategory />
      <Footer />
    </div>
  );
}
