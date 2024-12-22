import React from "react";
import Image from "next/image";
import { Partners as FoodPartners } from "@/app/data/dummyData";

const Partners = () => {
  return (
    <div className="container text-grey-100 text-center py-12">
      <p>Partners & Clients</p>
      <h2 className="font-bold text-2xl md:text-3xl">We work with the best people</h2>
      <div className="grid grid-cols-12 gap-4 mt-8">
        {FoodPartners.map((partner, index) => (
          <div
            key={index}
            className="relative col-span-6 md:col-span-4 lg:col-span-2 w-40 h-28"
          >
            <Image
              alt="partners logo"
              src={partner}
              layout="fill"
              objectFit="contain"
              priority
              className="opacity-30 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
