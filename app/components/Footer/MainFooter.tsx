import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainFooter = () => {

    const usefulLinks = [
        {
            name: 'About',
            src: '/',
        },
        {
            name: 'News',
            src: '/',
        },
        {
            name: 'Partners',
            src: '/',
        },
        {
            name: 'Team',
            src: '/',
        },
        {
            name: 'Menu',
            src: '/',
        },
        {
            name: 'Contacts',
            src: '/',
        },
    ]

    const helpLinks = [
        {
            name: 'FAQ',
            src: '/',
        },
        {
            name: 'Term & Conditions',
            src: '/',
        },
        {
            name: 'Reporting',
            src: '/',
        },
        {
            name: 'Documentation',
            src: '/',
        },
        {
            name: 'Support Policy',
            src: '/',
        },
        {
            name: 'Privacy',
            src: '/',
        },
    ]

    const posts = [
        {
            date: '20 Feb 2022',
            name: 'Keep Your Business ',
            image: '/images/home/post-1.svg',
        },
        {
            date: '20 Feb 2022',
            name: 'Keep Your Business ',
            image: '/images/home/post-2.svg',
        },
        {
            date: '20 Feb 2022',
            name: 'Keep Your Business ',
            image: '/images/home/post-3.svg',
        },
    ]

    return (
        <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10'>
            <div>
                <h5 className='font-bold mb-4 text-2xl'>About Us</h5>

                <p>
                    Corporate clients and leisure travelers has
                    been relying on Groundlink for dependab
                    safe, and professional chauffeured car
                    service in major cities across World.
                </p>

                <div className='flex gap-4 mt-6'>
                    <Image
                        src={"/images/home/opening-hours.svg"}
                        alt="Opening Hours"
                        width={78}
                        height={72}
                    />

                    <div>
                        <p>Opening Hours</p>
                        <p>Mon - Sat(8.00 - 6.00)</p>
                        <p>Sunday - Closed</p>
                    </div>
                </div>
            </div>

            <div>
                <h5 className='font-bold mb-4 text-2xl'>Useful Links</h5>
                <div className='flex flex-col gap-6'>
                    {usefulLinks.map((link, index) => (
                        <Link key={index} href={link.src} className='w-max'>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <h5 className='font-bold mb-4 text-2xl'>Help?</h5>
                <div className='flex flex-col gap-6'>
                    {helpLinks.map((link, index) => (
                        <Link key={index} href={link.src} className='w-max'>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <h5 className='font-bold mb-4 text-2xl'>Recent Post</h5>

                {posts.map((post, index) => (
                    <div key={index} className='flex gap-4 mt-6'>
                        <Image
                            src={post.image}
                            alt="Opening Hours"
                            width={59}
                            height={48}
                            style={{ width: 'auto', height: 'auto' }}
                        />

                        <div>
                            <p className='opacity-50'>{post.date}</p>
                            <p>{post.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainFooter