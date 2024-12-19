import Image from "next/image";
import React from "react";

const Menus = () => {
  const StarterMenu = {
    name: "Starter Menu",
    menus: [
      {
        name: "Alder Grilled Chinook Salmon",
        description: "Toasted French bread topped with romano, cheddar",
        price: 32,
        caloriesCount: 560,
      },
      {
        name: "Alder Grilled Chinook Salmon",
        description: "Toasted French bread topped with romano, cheddar",
        price: 32,
        caloriesCount: 560,
      },
      {
        name: "Alder Grilled Chinook Salmon",
        description: "Toasted French bread topped with romano, cheddar",
        price: 32,
        caloriesCount: 560,
      },
      {
        name: "Alder Grilled Chinook Salmon",
        description: "Toasted French bread topped with romano, cheddar",
        price: 32,
        caloriesCount: 560,
      },
    ],
  };

  return (
    <div className="container grid grid-cols-12 py-10">
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <Image
          alt="starter menu"
          src={"/images/menu/starter-menu.svg"}
          width={800}
          height={1000}
          priority
        />
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-8 ps-0 md:ps-6 lg:ps-18 pt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-grey-100">
          {StarterMenu.name}
        </h2>

        {StarterMenu.menus.map((data, index) => (
          <div key={index} className="flex flex-col sm:flex-row justify-between mt-12">
            <div>
              <h3 className="text-xl lg:text-2xl text-grey-100 font-bold">{data.name}</h3>
              <h4 className="text-grey-200">{data.description}</h4>
              <p className="text-grey-300">{data.caloriesCount} CAL</p>
            </div>

            <h5 className="text-lg text-brand-500 font-bold">{data.price}$</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
