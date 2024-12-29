import React from "react";
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";
import { Metadata } from "next";
import LoginRegister from "@/app/components/LoginRegister/LoginRegister";

export const metadata: Metadata = {
  title: "Sign Up - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Sign Up Page" breadcrumb="Sign Up" />
      <LoginRegister heading={"Sign Up"} isSignUp />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
