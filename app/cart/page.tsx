import React from 'react'
import HeaderDark from '@/app/components/Header/HeaderDark'
import HeroSection from '@/app/components/HeroSection/HeroSection'
import Footer from '@/app/components/Footer/Footer'
import { Metadata } from "next";
import CartDisplay from '@/app/components/CartDisplay/CartDisplay';

export const metadata: Metadata = {
  title: "Cart - Foodtuck",
};

const page = () => {
  return (
    <div>
        <HeaderDark />
        <HeroSection heading="Shopping Cart" breadcrumb="Shopping Cart" />
        <CartDisplay />
        <Footer classes='bg-black-500 text-white' />
    </div>
  )
}

export default page