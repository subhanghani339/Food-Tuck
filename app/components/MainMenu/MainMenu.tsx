'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menus } from "@/app/navigation/link";

const MainMenu = () => {

  const pathname = usePathname();

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
