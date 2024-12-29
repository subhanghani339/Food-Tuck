"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosGitCompare, IoIosCart } from "react-icons/io";

interface ProductCardProps {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: null | number;
  inStock: boolean;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  originalPrice,
  discountedPrice,
  inStock,
  imageUrl,
}) => {
  const [showIcon, setShowIcons] = useState(false);
  return (
    <Link
      href={`shop-details/${id}`}
      className="col-span-12 md:col-span-6 lg:col-span-4"
    >
      <div
        className="relative"
        onMouseEnter={() => setShowIcons(true)}
        onMouseLeave={() => setShowIcons(false)}
      >
        <Image src={imageUrl} alt={name} width={800} height={800} priority />
        <div
          className={`absolute bottom-16 left-0 right-0 w-fit m-auto gap-2 flex transition-all duration-500 ${
            showIcon ? "md:flex" : "md:hidden"
          }`}
        >
          <CiHeart
            fontSize={30}
            className="bg-white hover:bg-brand-500 transition-colors duration-300 p-2 rounded-sm text-brand-500 hover:text-white"
          />
          <CiShoppingCart
            fontSize={30}
            className="bg-white hover:bg-brand-500 transition-colors duration-300 p-2 rounded-sm text-brand-500 hover:text-white"
          />
          <IoIosGitCompare
            fontSize={30}
            className="bg-white hover:bg-brand-500 transition-colors duration-300 p-2 rounded-sm text-brand-500 hover:text-white"
          />
        </div>
      </div>
      <div className="mt-2 text-lg">
        <h2 className="font-bold text-grey-100 text-lg">{name}</h2>
        {discountedPrice && (
          <span className="text-brand-500">${discountedPrice.toFixed(2)}</span>
        )}
        <span
          className={`${
            !discountedPrice
              ? "text-brand-500"
              : "text-grey-300 line-through ml-2"
          }`}
        >
          ${originalPrice.toFixed(2)}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
