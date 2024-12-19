import React from "react";
import Image from "next/image";
import MainMenu from "../MainMenu/MainMenu";

const HeaderDark = () => {
  
  return (
    <div className="bg-black-500 py-8">
      <div className="container flex justify-between items-center">
        {/* brand name */}
        <h1 className="text-center text-brand-500 text-2xl">
          Food
          <span className="text-white">tuck</span>
        </h1>

        {/* Menu  */}
        <MainMenu />

        {/* Search bar */}
        <div className="flex gap-2">
          <Image
            src="/icons/Search.svg"
            alt="search icon"
            height={20}
            width={20}
            priority
            style={{ cursor: "pointer" }}
          />
          <Image
            src="/icons/User.svg"
            alt="user icon"
            width={24}
            height={42}
            style={{ cursor: "pointer" }}
          />
          <Image
            src="/icons/Handbag.svg"
            alt="handbag icon"
            width={24}
            height={42}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderDark;
