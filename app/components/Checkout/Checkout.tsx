import React from 'react'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {
    return (
        <div className="container py-8 lg:py-16">
            <div className="grid grid-cols-12 gap-6 mt-0 lg:mt-5">
                <div className="col-span-12 lg:col-span-9 order-2 lg:order-1">
                    <CheckoutForm />
                </div>

                {/* Product Added in cart */}
                <div className="col-span-12 lg:col-span-3 order-1 lg:order-2">
                    <p>Product added in cart</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout