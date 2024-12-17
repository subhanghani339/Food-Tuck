'use client'

import React, { useState } from 'react'
import MultiHeading from '../MultiHeading/MultiHeading'

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

            <div className="flex gap-16 mt-8 overflow-x-scroll">
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
        </div>
    )
}

export default OurMenu