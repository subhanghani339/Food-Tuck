import React from 'react'
import Image from 'next/image'
import { allBlogs } from '@/app/data/dummyData'
import { FaRegCalendarAlt, FaRegCommentDots, FaUserAlt } from 'react-icons/fa';

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
                            <div className="flex items-center text-sm text-gray-500 space-x-4 my-2">
                                    <div className="flex items-center">
                                        <FaRegCalendarAlt className="mr-1" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaRegCommentDots className="mr-1" />
                                        <span>{blog.comments} Comments</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaUserAlt className="mr-1" />
                                        <span>{blog.user}</span>
                                    </div>
                                </div>
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