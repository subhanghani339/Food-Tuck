import React from "react";
import { PiCoffeeBold } from "react-icons/pi";

interface SingleMenu {
  name: string;
  description: string;
  price: number;
  caloriesCount: number;
}

interface MenusProps {
  name: string;
  imageUrl: string;
  order: number;
  menus: SingleMenu[];
}

const Menus: React.FC<MenusProps> = ({ name, imageUrl, order, menus }) => {
  return (
    <div className="container grid grid-cols-12 gap-0 md:gap-6 lg:gap-18 py-10">
      <div
        className={`col-span-12 md:col-span-6 lg:col-span-4 min-h-[560px] md:min-h-72 bg-cover bg-bottom order-1 ${
          order === 1 ? "md:order-1" : "md:order-2"
        }`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div
        className={`col-span-12 md:col-span-6 lg:col-span-8 order-2 ${
          order === 1 ? "md:order-2" : "md:order-1"
        }`}
      >
        <PiCoffeeBold size={20} fill="#FF9F0D" className="mb-3 mt-2 md:mt-0" />
        <h2 className="text-3xl font-bold text-grey-100">{name}</h2>
        {menus.map((data, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row justify-between my-5">
              <div>
                <h3 className="text-xl text-grey-100 font-bold hover:text-brand-500 duration-300 transition-colors ">
                  {data.name}
                </h3>
                <h4 className="text-grey-200 my-1">{data.description}</h4>
                <p className="text-grey-300 text-sm">
                  {data.caloriesCount} CAL
                </p>
              </div>

              <h5 className="text-lg text-brand-500 font-bold">
                {data.price}$
              </h5>
            </div>
            {index < menus.length - 1 && (
              <hr className="border-1 border-dashed border-grey-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
