'use client'

import React, { useState } from 'react'
import MultiHeading from '../MultiHeading/MultiHeading'
import Image from 'next/image'

const OurMenu = () => {

    const tabs = [
        { id: 1, name: 'Breakfast' },
        { id: 2, name: 'Lunch' },
        { id: 3, name: 'Dinner' },
        { id: 4, name: 'Dessert' },
        { id: 5, name: 'Drink' },
        { id: 6, name: 'Snack' },
        { id: 7, name: 'Soups' },
    ]

    const [activeTab, setActiveTab] = useState(1)


    return (
        <div className='container py-12'>
            <MultiHeading
                subheading='Choose & pick'
                heading='From Our Menu'
                textAlignment='text-center'
            />

            <div className="flex gap-16 mt-8 overflow-x-scroll md:overflow-x-visible">
                {tabs.map((tab, index) => (
                    <p
                        key={index}
                        className={`cursor-pointer pb-2 hover:text-brand-200 transition-all duration-500 ${tab.id === activeTab ? 'text-brand-500' : 'text-white'}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.name}
                    </p>
                ))}
            </div>

            <div className="grid grid-cols-12 mt-8 gap-4">
                <div className="col-span-12 lg:col-span-5">
                    <Image
                        src={'/images/home/menu-1.svg'}
                        alt='menu image'
                        width={515}
                        height={406}
                    />
                </div>

                <div className="col-span-12 lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Array(8).fill(null).map((_, index) => (
                            <div key={index} className='flex gap-3'>
                                <Image
                                    src={'/images/home/menu-2.svg'}
                                    alt='menu image'
                                    width={80}
                                    height={79}
                                />

                                <div>
                                    <p className='font-bold'>Lettuce Leaf</p>
                                    <p className='text-sm'>Lacus nisi, et ac dapibus velit in consequat.</p>
                                    <p className='font-bold text-brand-500'>12.5$</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMenu