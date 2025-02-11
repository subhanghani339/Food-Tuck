'use client';

import React, { useState } from 'react'
import FTInput from '../FTInput/FTInput'
import FTLabel from '../FTLabel/FTLabel';
import "react-country-state-city/dist/react-country-state-city.css";
import {
    CitySelect,
    CountrySelect,
    StateSelect
} from "react-country-state-city";
import { placeOrder } from '@/app/actions/checkoutActions';
import SolidButton from '../Buttons/SolidButton';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface City {
    name: string;
}

function isCity(val: any): val is City {
    return val && typeof val === "object" && "name" in val;
}

const CheckoutForm = () => {

    const router = useRouter()
    const [countryId, setCountryId] = useState<number>(0);
    const [stateId, setStateId] = useState<number>(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        state: '',
        city: '',
        zipCode: '',
        address: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await placeOrder(formData);
        if (!response.success) {
            toast.error(response?.error,
                {
                    toastId: response?.error,
                });
        } else {
            toast.success(response?.success);
        }
    };

    return (
        <div>
            <h2 className='mb-4 text-lg'>Shipping Address</h2>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <FTLabel id='firstName' label='First Name' />
                        <FTInput
                            name='firstName'
                            id='firstName'
                            type='text'
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <FTLabel id='lastName' label='Last Name' />
                        <FTInput
                            name='lastName'
                            id='lastName'
                            type='text'
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <FTLabel id='email' label='Email Address' />
                        <FTInput
                            name='email'
                            id='email'
                            type='text'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <FTLabel id='phone' label='Phone Number' />
                        <FTInput
                            name='phone'
                            id='phone'
                            type='text'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <FTLabel id='company' label='Company' />
                        <FTInput
                            name='company'
                            id='company'
                            type='text'
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <FTLabel id='country' label='Country' />
                        <CountrySelect
                            value={formData.country}
                            name="country"
                            id="country"
                            inputClassName="!p-1 !border-0"
                            onChange={(val) => {
                                if (val && typeof val === "object" && "id" in val) {
                                    const country = val as { id: number; name: string };
                                    setFormData((prev) => ({ ...prev, country: country.name }));
                                    setCountryId(country.id);
                                }
                            }}
                        />

                    </div>

                    <div>
                        <FTLabel id='state' label='State' />
                        <StateSelect
                            countryid={countryId}
                            value={formData.state}
                            inputClassName="!p-1 !border-0"
                            onChange={(val) => {
                                if (isCity(val)) {
                                    setFormData((prev) => ({ ...prev, state: val.name }));
                                    setStateId(val.id)
                                }
                            }}
                        />
                    </div>

                    <div>
                        <FTLabel id='city' label='City' />
                        <CitySelect
                            countryid={countryId}
                            stateid={stateId}
                            value={formData.city}
                            inputClassName="!p-1 !border-0"
                            onChange={(val) => {
                                if (isCity(val)) {
                                    setFormData((prev) => ({ ...prev, city: val.name }));
                                }
                            }}
                        />
                    </div>

                    <div>
                        <FTLabel id='zipCode' label='Zip Code' />
                        <FTInput
                            name='zipCode'
                            id='zipCode'
                            type='text'
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <FTLabel id='address1' label='Address' />
                        <FTInput
                            name='address'
                            id='address'
                            type='text'
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='mt-4'>
                        <SolidButton
                            text="Back To Cart"
                            className='w-full rounded-0 bg-white border border-[#e0e0e0] text-grey-200'
                            onClick={() => router.push('/cart')}
                        />
                    </div>

                    <div className='mt-4'>
                        <SolidButton
                            text="Place An Order"
                            type="submit"
                            className='w-full rounded-0 text-white'
                        />
                    </div>
                </div>

            </form>
        </div>
    )
}

export default CheckoutForm