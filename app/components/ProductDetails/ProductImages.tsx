"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const ProductImages = () => {
    const productImages = [
        "/images/shop/shop-details/product-1.jpg",
        "/images/shop/shop-details/product-2.jpg",
        "/images/shop/shop-details/product-3.jpg",
        "/images/shop/shop-details/product-4.jpg",
        "/images/shop/shop-details/product-5.jpg",
    ]

    const [selectedImage, setSelectedImage] = useState<string>(productImages[0])

    return (
        <div className='flex flex-col-reverse md:flex-row gap-5'>
            <div className='flex flex-row md:flex-col gap-2'>
                {productImages.filter((img) => img !== selectedImage).map((image, index) => (
                    <div key={index} className='relative w-[132] h-[132]'>
                        <Image
                            src={image}
                            alt='product images'
                            sizes="500px"
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                            priority
                            className='rounded-lg cursor-pointer'
                            onClick={() => setSelectedImage(image)}
                        />
                    </div>
                ))}
            </div>

            <div className='relative w-[100%] h-[400] md:h-[553]'>
                <Image
                    src={selectedImage}
                    alt='product images'
                    sizes="500px"
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                    priority
                    className='rounded-lg'
                />
            </div>
        </div>
    )
}

export default ProductImages