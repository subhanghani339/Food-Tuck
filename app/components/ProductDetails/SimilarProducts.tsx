"use client";

import React, { useRef } from "react";
import { AllProducts } from "@/app/data/dummyData";
import { useParams } from "next/navigation";
import ProductCard from "../MainShop/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const SimilarProducts = () => {
  const params = useParams();
  const sliderRef = useRef<Slider | null>(null);
  const currentProductId = params.id;
  const similarProd = AllProducts.filter(
    (prod) => prod.id !== Number(currentProductId)
  )?.slice(0, 8);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center">
        <h4 className="text-3xl font-bold mb-6">Similar Products</h4>

        <div className="flex gap-2">
          <button
            className="bg-brand-700 hover:bg-brand-500 hover:text-white p-2 rounded-full transition-all duration-200"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <GoArrowLeft />
          </button>
          <button
            className="bg-brand-700 hover:bg-brand-500 hover:text-white p-2 rounded-full transition-all duration-200"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {similarProd.map((product, index) => (
          <div key={index} className="px-2">
            <ProductCard
              id={product.id}
              name={product.name}
              originalPrice={product.originalPrice}
              discountedPrice={product.discountedPrice}
              inStock={product.inStock}
              imageUrl={product.featuredImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarProducts;
