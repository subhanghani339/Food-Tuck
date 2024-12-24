import React from 'react'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'

const ProductDetails = () => {
    return (
        <div className='container py-12'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <ProductImages />
                </div>
                <div>
                    <ProductInfo />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails