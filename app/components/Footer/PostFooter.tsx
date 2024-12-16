import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const PostFooter = () => {

    const socialMediaIcons = [
        FaFacebookF,
        FaTwitter,
        FaInstagram,
        FaYoutube,
        FaPinterest,
    ]

    return (
        <div className="bg-grey-200">
            <div className="container py-6 flex flex-col md:flex-row items-center gap-4 justify-between">
                <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>

                <div className='flex gap-4'>
                    {socialMediaIcons.map((Icons, index) => (
                        <Link href={''} key={index} className='bg-white text-grey-200 hover:text-brand-500 transition-colors duration-300 rounded-sm p-2'>
                            <Icons className='fill-current' />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostFooter