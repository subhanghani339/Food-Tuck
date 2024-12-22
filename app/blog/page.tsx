import React from "react";
import HeaderDark from "../components/Header/HeaderDark";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blogs - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Blog List" breadcrumb="Blog" />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
