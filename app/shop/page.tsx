import React from 'react'
import HeaderDark from '../components/Header/HeaderDark'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import MainShop from '../components/MainShop/MainShop'

const page = () => {
  return (
    <div>
        <HeaderDark />
        <HeroSection heading="Our Shop" breadcrumb="Shop" />
        <MainShop />
        <Footer classes='bg-black-500 text-white' />
    </div>
  )
}

export default page