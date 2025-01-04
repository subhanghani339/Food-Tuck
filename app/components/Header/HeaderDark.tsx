import React from "react";
import Image from "next/image";
import MainMenu from "../MainMenu/MainMenu";
import Link from "next/link";
import BrandName from "./BrandName";

const HeaderDark = () => {
  return (
    <div className="bg-black-500 py-8">
      <div className="container flex justify-between items-center">
        {/* brand name */}
        <BrandName />

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
          <Link href={"/signin"}>
            <Image
              src="/icons/User.svg"
              alt="user icon"
              width={24}
              height={42}
            />
          </Link>
          <Link href={"/cart"}>
            <Image
              src="/icons/Handbag.svg"
              alt="cart icon"
              width={24}
              height={42}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderDark;
