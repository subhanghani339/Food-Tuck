import AboutUs from "./components/AboutUs/AboutUs";
import FoodCategory from "./components/FoodCategory/FoodCategory";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Summary from "./components/Summary/Summary";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-black-500 text-white">
      <HeroBanner />
      <AboutUs />
      <FoodCategory />
      <WhyChooseUs />
      <Summary />
      <Footer />
    </div>
  );
}
