import React from 'react'
import HeaderDark from '@/app/components/Header/HeaderDark'
import HeroSection from '@/app/components/HeroSection/HeroSection'
import Footer from '@/app/components/Footer/Footer'
import Menus from '@/app/components/Menus/Menus'
import { StarterMenu, MainCourse, Dessert, Drinks } from '@/app/data/dummyData'
import Summary from '@/app/components/Summary/Summary'
import Partners from '@/app/components/Partners/Partners'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu - Foodtuck",
};

const page = () => {
  return (
    <div>
        <HeaderDark />
        <HeroSection heading="Our Menu" breadcrumb="Menu" />
        <Menus
          name={StarterMenu.name}
          imageUrl={StarterMenu.imageUrl}
          order={StarterMenu.order}
          menus={StarterMenu.menus}
        />
        <Menus
          name={MainCourse.name}
          imageUrl={MainCourse.imageUrl}
          order={MainCourse.order}
          menus={MainCourse.menus}
        />
        <Summary />
        <Menus
          name={Dessert.name}
          imageUrl={Dessert.imageUrl}
          order={Dessert.order}
          menus={Dessert.menus}
        />
        <Menus
          name={Drinks.name}
          imageUrl={Drinks.imageUrl}
          order={Drinks.order}
          menus={Drinks.menus}
        />
        <Partners />
        <Footer classes='bg-black-500 text-white' />
    </div>
  )
}

export default page