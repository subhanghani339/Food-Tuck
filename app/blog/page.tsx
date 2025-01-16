import React from "react";
import HeaderDark from "@/app/components/Header/HeaderDark";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Footer from "@/app/components/Footer/Footer";
import { Metadata } from "next";
import AllBlogs from "@/app/components/AllBlogs/AllBlogs";

export const metadata: Metadata = {
  title: "Our Blogs - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Blog List" breadcrumb="Blog" />
      <AllBlogs />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
