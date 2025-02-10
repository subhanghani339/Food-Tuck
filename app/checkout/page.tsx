import React from 'react'
import HeaderDark from '@/app/components/Header/HeaderDark'
import HeroSection from '@/app/components/HeroSection/HeroSection'
import Footer from '@/app/components/Footer/Footer'
import Checkout from '@/app/components/Checkout/Checkout';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout - Foodtuck",
};

const page = () => {
  return (
    <div>
      <HeaderDark />
      <HeroSection heading="Checkout Page" breadcrumb="Checkout" />
      <Checkout />
      <Footer classes='bg-black-500 text-white' />
    </div>
  )
}

export default page