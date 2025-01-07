import React from "react";
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";
import { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Contact Us" breadcrumb="Contact" />
      <ContactForm />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
