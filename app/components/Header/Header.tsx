import React from "react";
import Image from "next/image";
import MainMenu from "../MainMenu/MainMenu";
import Link from "next/link";
import BrandName from "./BrandName";

const Header = () => {
  return (
    <div className="container">
      {/* brand name */}
      <div className="mb-4 md:mb-2 w-full text-center">
        <BrandName />
      </div>

      <div className="flex justify-between items-center">
        {/* Menu  */}
        <MainMenu />

        {/* Search bar */}
        <div className="flex gap-2">
          <div className="flex gap-2 border w-max py-2 px-4 rounded-3xl text-white border-brand-500">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              id="search"
              className="bg-transparent focus-visible:border-none outline-none placeholder:text-white"
            />
            <Image
              src="/icons/Search.svg"
              alt="search icon"
              height={24}
              width={24}
              priority
              style={{ cursor: "pointer" }}
            />
          </div>
          <Link href={"/cart"}>
            <Image
              src="/icons/Handbag.svg"
              alt="cart icon"
              width={24}
              height={42}
              className="mt-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
