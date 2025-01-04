import Link from "next/link";
import React from "react";

const BrandName = () => {
  return (
    <Link href={"/"} className="text-center text-brand-500 text-2xl">
      Food
      <span className="text-white">tuck</span>
    </Link>
  );
};

export default BrandName;
