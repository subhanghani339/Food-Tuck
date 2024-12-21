import React from "react";

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
        className={`col-span-12 md:col-span-6 lg:col-span-4 min-h-[560px] md:min-h-80 bg-cover bg-bottom ${order === 1 ? "order-1": "order-2"}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className={`col-span-12 md:col-span-6 lg:col-span-8 py-6 ${order === 1 ? "order-2": "order-1"}`}>
        <h2 className="text-3xl font-bold text-grey-100">{name}</h2>

        {menus.map((data, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between mt-8"
          >
            <div>
              <h3 className="text-xl text-grey-100 font-bold hover:text-brand-500 duration-300 transition-colors ">
                {data.name}
              </h3>
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
