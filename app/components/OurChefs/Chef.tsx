import Image from "next/image";
import React from "react";

interface ChefProps {
  url: string;
  name: string;
  designation: string;
  format?: 1 | 2;
}

const Chef: React.FC<ChefProps> = ({ url, name, designation, format = 1 }) => {
  return (
    <div className="relative">
      <Image src={url} alt={name} width={712} height={791} priority />
      <div
        className={`
      ${
        format === 1
          ? "max-w-44 absolute bottom-0 rounded-bl-lg"
          : "text-center"
      }
      bg-white 
      px-5 
      py-2 
      text-grey-100
      w-full 
      `}
      >
        <h6 className="font-bold">{name}</h6>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Chef;
