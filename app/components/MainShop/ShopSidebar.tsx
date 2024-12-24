import { category } from '@/app/data/dummyData';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import PriceRangeFilter from './PriceRangeFilter';

const ShopSidebar = () => {
    return (
        <div className='border border-1 p-3 border-[#f2f2f2] rounded-md'>
            {/* Search Input */}
            <div className='flex'>
                <input
                    type='text'
                    placeholder='Search Product'
                    className='w-36 bg-brand-500 bg-opacity-10 placeholder:text-grey-300 text-sm focus-visible:outline-none p-2'
                />
                <button className='bg-brand-500 px-2'>
                    <CiSearch fill='white' />
                </button>
            </div>

            {/* Category Listing */}
            <div className='my-4'>
                <h3 className='text-grey-100 font-bold text-md mb-3'>Category</h3>
                {category.map((cat, index) => (
                    <div key={index} className='flex items-center gap-1'>
                        <input type="checkbox" name={cat.label} id={cat.label} className='checkbox' />
                        <label htmlFor={cat.label}>{cat.label}</label>
                    </div>
                ))}
            </div>

            {/* banner */}
            <div className='bg-[url("/images/banner/banner-2.svg")] bg-cover bg-center text-white py-6 px-4'>
                <p className='font-bold'>Perfect Taste</p>
                <h5 className='font-bold'>Classic Restaurant</h5>
                <div className='min-h-32' />
                <p className='text-brand-500 font-bold'>45.00$</p>
                <button className='flex gap-2 items-center'>
                    Shop Now
                    <FaRegArrowAltCircleRight />
                </button>
            </div>

            {/* Filter By Price */}
            <div>
                <h2 className="text-grey-100 text-lg font-bold mt-6 mb-4">Filter by Price</h2>
                <PriceRangeFilter />
            </div>
        </div>
    )
}

export default ShopSidebar