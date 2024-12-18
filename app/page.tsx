import AboutUs from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import FoodCategory from "./components/FoodCategory/FoodCategory";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import OurChefs from "./components/OurChefs/OurChefs";
import OurMenu from "./components/OurMenu/OurMenu";
import Summary from "./components/Summary/Summary";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-black-500 text-white">
      <HeroBanner />
      <AboutUs />
      <FoodCategory />
      <WhyChooseUs />
      <Summary />
      <OurMenu />
      <OurChefs />
      <Testimonials />
      <Banner />
      <Blogs />
      <Footer />
    </div>
  );
}
