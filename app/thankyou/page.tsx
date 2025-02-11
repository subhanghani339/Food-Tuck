import React from "react";
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You Page - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Thank You Page" breadcrumb="Thank You" />
      <div className="container my-36 p-5">
        <h2
          className="text-5xl font-bold text-center text-brand-500 special"
          style={{ lineHeight: "66px" }}
        >
          Thank You for placing an Order at Foodtuck!
        </h2>
      </div>
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
