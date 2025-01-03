import React from "react";
import HeaderDark from "../components/Header/HeaderDark";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import AllChef from "../components/AllChef/AllChef";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Chefs - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Our Chef" breadcrumb="Chef" />
      <AllChef />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
