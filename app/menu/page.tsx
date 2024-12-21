import React from 'react'
import HeaderDark from '../components/Header/HeaderDark'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import Menus from '../components/Menus/Menus'
import { StarterMenu, MainCourse, Dessert, Drinks } from '../data/dummyData'
import Summary from '../components/Summary/Summary'

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

        <Footer classes='bg-black-500 text-white' />
    </div>
  )
}

export default page