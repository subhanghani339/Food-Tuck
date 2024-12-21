import React from 'react'
import HeaderDark from '../components/Header/HeaderDark'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import { Metadata } from 'next'
import FAQS from '../components/FAQS/FAQS'

export const metadata:Metadata = {
  title: 'Frequently Asked Questions - Foodtuck'
}

const page = () => {
  return (
    <div>
        <HeaderDark />
        <HeroSection heading="FAQ Page" breadcrumb="Faq" />
        <FAQS />
        <Footer classes='bg-black-500 text-white' />
    </div>
  )
}

export default page