import React from "react";
import MultiHeading from "../MultiHeading/MultiHeading";
import Image from "next/image";

const OurChefs = () => {
  const ourChef = [
    {
      src: "/images/home/chef-1.svg",
      name: "D.Estwood",
      designation: "Chief Chef",
    },
    {
      src: "/images/home/chef-2.svg",
      name: "D.Scoriesh",
      designation: "Assistant Chef",
    },
    {
      src: "/images/home/chef-3.svg",
      name: "M. William",
      designation: "Advertising Chef",
    },
    {
      src: "/images/home/chef-4.svg",
      name: "W.Readfroad",
      designation: "Chef",
    },
  ];
  return (
    <div className="container py-16">
      <MultiHeading
        heading="Meet Our Chef"
        subheading="Chefs"
        textAlignment={"text-center"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {ourChef.map((chef, index) => (
          <div key={index} className="relative">
            <Image src={chef.src} alt={chef.name} width={712} height={791} />
            <div className="max-w-44 bg-white text-grey-100 px-5 py-2 absolute bottom-0 w-full rounded-bl-lg">
              <h6 className="font-bold">{chef.name}</h6>
              <p>{chef.designation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-transparent border border-brand-500 rounded-full px-6 py-2">See More</button>
      </div>
    </div>
  );
};

export default OurChefs;
