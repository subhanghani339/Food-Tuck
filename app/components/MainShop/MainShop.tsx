import React from "react";
import Filter from "./Filter";
import { AllProducts, SortByFilter, ShowFilter } from "@/app/data/dummyData";
import ProductCard from "./ProductCard";

const MainShop = () => {
  return (
    <div className="container py-16">
      <div className="flex gap-5">
        <Filter
          name={SortByFilter.name}
          filterOptions={SortByFilter.filterOptions}
        />
        <Filter
          name={ShowFilter.name}
          filterOptions={ShowFilter.filterOptions}
        />
      </div>

      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-10">
          <div className="grid grid-cols-12 gap-5">
            {AllProducts.map((product, index) => (
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

        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default MainShop;
