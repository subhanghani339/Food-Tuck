import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const menus = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Menu",
    },
    {
      id: 3,
      name: "Blog",
    },
    {
      id: 4,
      name: "Pages",
    },
    {
      id: 5,
      name: "About",
    },
    {
      id: 6,
      name: "Shop",
    },
    {
      id: 7,
      name: "Contact",
    },
  ];
  return (
    <div className="container">
      {/* brand name */}
      <h1 className="text-center text-brand-500 text-2xl">
        Food
        <span className="text-white">tuck</span>
      </h1>

      <div className="flex justify-between items-center">
        {/* menu  */}
        <div className="flex text-white gap-5">
          {menus.map((menu, index) => (
            <Link key={index} href={"#"}>
              {menu?.name}
            </Link>
          ))}
        </div>

        {/* Search bar */}
        <div className="flex gap-2 border w-max py-2 px-4 rounded-3xl text-white border-brand-500">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            id="search"
            className="bg-transparent focus-visible:border-none outline-none"
          />
          <Image
            src="/icons/Search.svg"
            alt="search icon"
            height={24}
            width={24}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
