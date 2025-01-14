import Dashboard from "@/app/components/Dashboard/Dashboard";
import Footer from "@/app/components/Footer/Footer";
import HeaderDark from "@/app/components/Header/HeaderDark";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <Dashboard />
      <Footer classes="bg-black-500 text-white" />
    </div>
  );
};

export default page;
