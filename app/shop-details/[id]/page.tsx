import React from 'react'
import HeaderDark from '@/app/components/Header/HeaderDark'
import HeroSection from '@/app/components/HeroSection/HeroSection'
import Footer from '@/app/components/Footer/Footer'
import ProductDetails from '@/app/components/ProductDetails/ProductDetails'
import SimilarProducts from '@/app/components/ProductDetails/SimilarProducts'

const page = () => {
  return (
    <div>
        <HeaderDark />
        <HeroSection heading="Shop Details" breadcrumb="Shop Details" />
        <ProductDetails />
        <SimilarProducts />
        <Footer classes='bg-black-500 text-white' />
    </div>
  )
}

export default page