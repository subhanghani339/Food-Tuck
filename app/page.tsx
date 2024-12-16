import AboutUs from "./components/AboutUs/AboutUs";
import Blogs from "./components/Blogs/Blogs";
import FoodCategory from "./components/FoodCategory/FoodCategory";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import OurChefs from "./components/OurChefs/OurChefs";
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
      <OurChefs />
      <Blogs />
      <Footer />
    </div>
  );
}
