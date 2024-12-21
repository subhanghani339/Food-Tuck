"use client";

import React from "react";
import SolidButton from "../Buttons/SolidButton";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const GoToHome = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/");
  };
  return (
    <div className="container py-20 text-center flex flex-col gap-2 items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-500">404</h1>
      <h2 className="text-xl font-bold text-grey-100">
        Oops! Look like something going wrong
      </h2>
      <p className="text-grey-200 max-w-sm text-sm mb-2">
        Page cannot be found! we’ll have it figured out in no time. Meanwhile,
        check out these fresh ideas:
      </p>
      <SolidButton
        text="Go To Home"
        className="text-white rounded-md"
        onClick={GoToHome}
      />
    </div>
  );
};

export default NotFound;
