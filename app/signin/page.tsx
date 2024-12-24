import React from "react";
import HeaderDark from "../components/Header/HeaderDark";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import { Metadata } from "next";
import LoginForm from "../components/LoginForm/LoginForm";

export const metadata: Metadata = {
  title: "About Us - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Sign In Page" breadcrumb="Sign In" />
      <LoginForm />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
