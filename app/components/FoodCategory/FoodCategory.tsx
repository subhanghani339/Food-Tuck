import React from "react";
import MultiHeading from "../MultiHeading/MultiHeading";
import Image from "next/image";

const FoodCategory = () => {
  const foodCategory = [
    {
      src: "/images/home/category-1.svg",
      alt: "breakfast",
    },
    {
      src: "/images/home/category-2.svg",
      alt: "burgers",
    },
    {
      src: "/images/home/category-3.svg",
      alt: "pasta",
    },
    {
      src: "/images/home/category-4.svg",
      alt: "donuts",
    },
  ];

  return (
    <div className="container py-10">
      <MultiHeading
        heading="Choose Food Items"
        subheading="Food Category"
        textAlignment={"text-center"}
      />

      <div className="grid md:grid-cols-2 mt-10 lg:grid-cols-4 gap-8">
        {foodCategory.map((category, index) => (
          <Image
            key={index}
            src={category.src}
            alt={category.alt}
            width={480}
            height={400}
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
