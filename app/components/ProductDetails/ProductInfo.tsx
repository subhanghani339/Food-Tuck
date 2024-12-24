"use client";

import { AllProducts } from '@/app/data/dummyData';
import { useParams } from 'next/navigation';
import React from 'react';

const ProductInfo = () => {
    const params = useParams();

    // Find the current product
    const currentProduct = AllProducts.find(prod => prod.id === Number(params.id));

    // Handle case where product is not found
    if (!currentProduct) {
        return <p className="text-error">Product not found.</p>;
    }

    // Destructure product properties for easier access
    const {
        inStock,
        name,
        shortDescription,
        discountedPrice,
        originalPrice,
    } = currentProduct;

    return (
        <div>
            {/* Stock Status */}
            <p
                className={`py-1 px-5 w-max rounded-lg text-white 
                    ${inStock ? "bg-brand-500" : "bg-error"}`}
            >
                {inStock ? "In stock" : "Out of stock"}
            </p>

            {/* Product Name */}
            <h2 className="text-4xl font-bold text-grey-100 mt-3 mb-6">{name}</h2>

            {/* Short Description */}
            <p className="text-grey-200">{shortDescription}</p>

            {/* Divider */}
            <hr className="border border-1 border-grey-500 my-6" />

            {/* Pricing */}
            <div className="flex items-center gap-2">
                {discountedPrice && (
                    <span className="font-bold text-3xl text-brand-500 helvetica">
                        ${discountedPrice.toFixed(2)}
                    </span>
                )}
                <span
                    className={`font-bold text-3xl helvetica text-grey-100
                        ${discountedPrice ? "line-through" : ""}`}
                >
                    ${originalPrice.toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default ProductInfo;
