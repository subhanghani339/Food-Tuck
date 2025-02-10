'use client';

import React, { useState } from 'react'
import FTInput from '../FTInput/FTInput'
import Email from 'next-auth/providers/email';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <h2 className='mb-4'>Shipping Address</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="firstName" className='text-grey-100'> First Name </label>
                    <FTInput
                        name='firstName'
                        id='firstName'
                        type='text'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className='text-grey-100'> Last Name </label>
                    <FTInput
                        name='lastName'
                        id='lastName'
                        type='text'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email" className='text-grey-100'> Email Address </label>
                    <FTInput
                        name='email'
                        id='email'
                        type='text'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className='text-grey-100'> Phone Number </label>
                    <FTInput
                        name='phone'
                        id='phone'
                        type='text'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="company" className='text-grey-100'> Company </label>
                    <FTInput
                        name='company'
                        id='company'
                        type='text'
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm