import React from 'react'
import HeaderDark from '../components/Header/HeaderDark'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import Menus from '../components/Menus/Menus'

const page = () => {
  return (
    <div>
        <HeaderDark />
        <HeroSection heading="Our Menu" breadcrumb="Menu" />
        <Menus />
        <Footer classes='bg-black-500 text-white' />
    </div>
  )
}

export default page