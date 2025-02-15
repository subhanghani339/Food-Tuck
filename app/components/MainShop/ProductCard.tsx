"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosGitCompare, IoIosCart } from "react-icons/io";
import { toast } from "react-toastify";
import { addToCart } from "@/app/lib/cart";

interface ProductCardProps {
  id: number;
  name: string;
  product?: any;
  originalPrice: number;
  discountedPrice: null | number;
  inStock: boolean;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  product,
  originalPrice,
  discountedPrice,
  inStock,
  imageUrl,
}) => {
  const [showIcon, setShowIcons] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await addToCart(product);
      toast.success("Item added to cart successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to add item to cart.", {
        toastId: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Link
      href={`/shop-details/${id}`}
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
            onClick={(e) => e.preventDefault()}
          />
          <CiShoppingCart
            fontSize={30}
            className={`bg-white hover:bg-brand-500 transition-colors duration-300 p-2 rounded-sm text-brand-500 hover:text-white 
              ${loading ? "opacity-50 pointer-events-none" : ""}`}
            onClick={(e) => handleAddToCart(e)}
          />
          <IoIosGitCompare
            fontSize={30}
            className="bg-white hover:bg-brand-500 transition-colors duration-300 p-2 rounded-sm text-brand-500 hover:text-white"
            onClick={(e) => e.preventDefault()}
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
