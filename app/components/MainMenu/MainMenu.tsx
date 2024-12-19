'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    name: "Pages",
    url: "/pages",
  },
  {
    id: 5,
    name: "About",
    url: "/about",
  },
  {
    id: 6,
    name: "Shop",
    url: "/shop",
  },
  {
    id: 7,
    name: "Contact",
    url: "/contact",
  },
];

const MainMenu = () => {

  const pathname = usePathname();
  console.log("The pathname are", pathname)

  return (
    <div className="hidden md:flex text-white gap-5">
      {menus.map((menu, index) => (
        <Link
          key={index}
          href={menu.url}
          className={`transition-all duration-520 hover:text-brand-500 ${pathname.endsWith(menu.url) ? 'text-brand-500' : 'text-white' }`}
        >
          {menu?.name}
        </Link>
      ))}
    </div>
  );
};

export default MainMenu;
