"use client";

import { AllProducts } from "@/app/data/dummyData";
import { useParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import StarRatings from "../StarRatings/StarRatings";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import QuantityInput from "../QuantityInput/QuantityInput";
import SolidButton from "../Buttons/SolidButton";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineFacebook, MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";
import { addToCart } from "@/app/lib/cart";
import { toast } from "react-toastify";

const ProductInfo = () => {
  const params = useParams();

  // Find the current product
  const currentProduct = AllProducts.find(
    (prod) => prod.id === Number(params.id)
  );

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
    averageRatings,
    totalRatings,
  } = currentProduct;

  const socialSharesIcons = [
    "/icons/product-youtube.svg",
    "/icons/product-facebook.svg",
    "/icons/product-twitter.svg",
    "/icons/product-vk.svg",
    "/icons/product-instagram.svg",
  ];

  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  console.log(currentProduct, "currentProduct");

  const handleAddToCart = async () => {
    setLoading(true);

    try {
      const result = await addToCart(currentProduct, quantity);
      toast.success("Item added to cart successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to add item to cart.", {
        toastId: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  // for quantity input
  const increment = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setQuantity((prev) => prev - 1);
  }, []);

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
          <span className="font-bold text-2xl text-brand-500 helvetica">
            ${discountedPrice.toFixed(2)}
          </span>
        )}
        <span
          className={`font-bold text-2xl helvetica text-grey-100
                        ${discountedPrice ? "line-through" : ""}`}
        >
          ${originalPrice.toFixed(2)}
        </span>
      </div>

      {/* Ratings */}
      <div className="mt-4 flex gap-3 items-center text-grey-300">
        <StarRatings ratings={averageRatings} /> |
        <p>{averageRatings.toFixed(1)} Rating</p> |<p>{totalRatings} Reviews</p>
      </div>

      <p className="text-grey-100 my-4">Dictum/cursus/Risus</p>

      {/* quantity input */}
      <div className="flex gap-3">
        <QuantityInput
          increment={increment}
          decrement={decrement}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <SolidButton
          text="Add to cart"
          Icon={HiOutlineShoppingBag}
          className="flex gap-2 items-center text-white hover:opacity-85 transition-opacity duration-300"
          onClick={handleAddToCart}
        />
      </div>

      {/* Divider */}
      <hr className="border border-1 border-grey-500 my-6" />

      {/* Add To Wishlist and Compare Button */}
      <div className="flex gap-4">
        <SolidButton
          text="Add to Wishlist"
          Icon={CiHeart}
          className="flex gap-2 items-center bg-transparent px-0 py-0 text-grey-200"
        />
        <SolidButton
          text="Compare"
          Icon={IoIosGitCompare}
          className="flex gap-2 items-center bg-transparent px-0 py-0 text-grey-200"
        />
      </div>

      <p>
        <span className="text-grey-100">Category: </span>
        <span className="text-grey-200">Pizza </span>
      </p>
      <p>
        <span className="text-grey-100">Tag: </span>
        <span className="text-grey-200">Our Shop </span>
      </p>

      {/* Social Media Share Button */}
      <div className="flex gap-2 mt-6">
        <span className="text-grey-100">Share: </span>
        {socialSharesIcons.map((icons, index) => (
          <Image
            key={index}
            alt="social media icons"
            src={icons}
            width={24}
            height={24}
            priority
            className="cursor-pointer"
          />
        ))}
      </div>

      <hr className="border border-1 border-grey-500 my-6" />
    </div>
  );
};

export default ProductInfo;
