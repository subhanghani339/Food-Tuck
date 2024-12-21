import Image from 'next/image'
import React from 'react'

const Summary = () => {
    const summary = [
        { src: '/images/home/professional-chefs.svg', heading: 'Professionals Chefs', count: '420' },
        { src: '/images/home/items-of-food.svg', heading: 'Items of Food', count: '320' },
        { src: '/images/home/years-of-experience.svg', heading: 'Year of Experience', count: '30 +' },
        { src: '/images/home/happy-customer.svg', heading: 'Happy Customers', count: '220' },
    ]
    return (
        <div className="bg-[url('/images/home/summary.svg')] bg-cover bg-center min-h-40">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
                {summary.map((sum, index) => (
                    <div key={index} className='flex flex-col items-center py-16'>
                        <Image
                            src={sum.src}
                            alt={sum.heading}
                            width={80}
                            height={80}
                            className="mb-1"
                        />
                        <h4 className='text-center mt-3 mb-2 font-bold'>{sum.heading}</h4>
                        <h5 className='font-bold text-3xl'>{sum.count}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Summary