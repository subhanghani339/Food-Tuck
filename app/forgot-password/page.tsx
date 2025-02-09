import React from "react";
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";
import ForgotPasswordForm from "@/app/components/ForgotPasswordForm/ForgotPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Forgot Password" breadcrumb="Forgot Password" />
      <ForgotPasswordForm />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
