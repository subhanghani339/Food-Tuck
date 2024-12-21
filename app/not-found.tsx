import React from "react";
import HeaderDark from "./components/Header/HeaderDark";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="404 Page" breadcrumb="404" />
      <NotFound />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
