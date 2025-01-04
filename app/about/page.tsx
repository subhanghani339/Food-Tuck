import React from "react";
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";
import { Metadata } from "next";
import MainAbout from "@/app/components/MainAbout/MainAbout";

export const metadata: Metadata = {
  title: "About Us - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="About Us" breadcrumb="About" />
      <MainAbout />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
