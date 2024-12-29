import React from "react";
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";
import { Metadata } from "next";
import LoginRegister from "@/app/components/LoginRegister/LoginRegister";

export const metadata: Metadata = {
  title: "Sign In - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Sign In Page" breadcrumb="Sign In" />
      <LoginRegister />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
