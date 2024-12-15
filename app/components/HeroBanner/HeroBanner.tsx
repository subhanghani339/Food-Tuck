import React from "react";
import Header from "@/app/components/Header/Header";

const HeroBanner = () => {
  
  return (
    <div className='h-screen py-10 bg-[url("/images/home/hero-banner.svg")] bg-cover bg-center'>
        <Header />
    </div>
  );
};

export default HeroBanner;
