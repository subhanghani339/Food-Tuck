import React from 'react'
import MultiHeading from '../MultiHeading/MultiHeading'
import Image from 'next/image'

const WhyChooseUs = () => {
    const whyChooseUs = [
        { url: 'images/home/fastfood.svg', text: 'Fast Food' },
        { url: 'images/home/lunch.svg', text: 'Lunch' },
        { url: 'images/home/dinner.svg', text: 'Dinner' },
    ]
    return (
        <div className="container grid gap-4 grid-cols-12 py-16">
            <div className="col-span-12 md:col-span-7 me-auto">
                <Image
                    src={"/images/home/why-choose-us.svg"}
                    alt="multiple food items"
                    width={660}
                    height={540}
                    priority
                />
            </div>

            <div className="col-span-12 md:col-span-5 flex flex-col items-start gap-8">

                <div className='min-h-8' />
                <MultiHeading
                    heading="Extra ordinary taste And Experienced"
                    subheading="Why Choose us"
                />

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>


                <div className='grid grid-cols-4 gap-8'>
                    {whyChooseUs.map((cat, index) => (
                        <div key={index}>
                        <Image
                            src={cat.url}
                            alt={cat.text}
                            width={102}
                            height={100}
                            priority
                        />
                        <p className='text-center mt-1'>{cat.text}</p>
                        </div>
                    ))}
                </div>

                <div className='
                bg-white
                max-w-[236] 
                rounded-sm 
                w-full 
                border-l-8 
                border-l-brand-500
                flex
                gap-4
                py-3
                '>
                    <h3 className='text-brand-500 font-bold text-3xl px-4 my-auto'> 30+ </h3>
                    <h3 className='text-black-200 text-sm font-normal'>Years of <b>Experienced</b></h3>
                </div>

            </div>

        </div>
    )
}

export default WhyChooseUs