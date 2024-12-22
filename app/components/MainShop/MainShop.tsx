"use client";

import React, { useState } from "react";
import Filter from "./Filter";
import { AllProducts, SortByFilter, ShowFilter } from "@/app/data/dummyData";
import ProductCard from "./ProductCard";

const MainShop = () => {
  const [sortBy, setSortBy] = useState<string | number>("");
  const [show, setShow] = useState<string | number>("");

  const handleSortByFilterChange = (selectedOption: {
    name: string | number;
    value: string | number;
  }) => {
    setSortBy(selectedOption.value);
  };

  const handleShowFilterChange = (selectedOption: {
    name: string | number;
    value: string | number;
  }) => {
    setShow(selectedOption.value);
  };

  return (
    <div className="container py-10 md:py-16">
      <div className="flex gap-5">
        <Filter
          name={SortByFilter.name}
          filterOptions={SortByFilter.filterOptions}
          value={sortBy}
          onChange={handleSortByFilterChange}
        />
        <Filter
          name={ShowFilter.name}
          filterOptions={ShowFilter.filterOptions}
          value={show}
          onChange={handleShowFilterChange}
        />
      </div>

      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-12 lg:col-span-10">
          <div className="grid grid-cols-12 gap-5">
            {AllProducts.slice(0,Number(show) || 15).map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                inStock={product.inStock}
                imageUrl={product.featuredImage}
              />
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-2"></div>
      </div>
    </div>
  );
};

export default MainShop;
