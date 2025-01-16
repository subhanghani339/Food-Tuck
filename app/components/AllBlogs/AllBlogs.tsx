import { allBlogs } from '@/app/data/dummyData'
import Image from 'next/image'
import React from 'react'

const AllBlogs = () => {
    return (
        <div className="container py-10 md:py-16">
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-12 lg:col-span-9">
                    {allBlogs.map((blog, index) => (
                        <div key={index} className='mb-10'>
                            <Image
                                src={blog.featuredImage}
                                alt={blog.title}
                                width={1000}
                                height={500}
                                priority
                            />
                            <div className='max-w-3xl'>
                                <h3 className='text-grey-100 text-xl font-bold'>{blog.title}</h3>
                                <hr className='my-6' />
                                <p>{blog.shortDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-span-12 lg:col-span-3">
                    Sidebar
                </div>
            </div>
        </div>
    )
}

export default AllBlogs