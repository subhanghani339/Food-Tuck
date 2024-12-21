"use client";

import React from "react";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import MultiHeading from "@/app/components/MultiHeading/MultiHeading";
import SolidButton from "@/app/components/Buttons/SolidButton";
import { useRouter } from "next/navigation";

const HeroBanner = () => {
  const router = useRouter();
  const GoToMenu = () => {
    router.push("/menu");
  };

  return (
    <div className='bg-[url("/images/home/background-banner.svg")] bg-cover bg-center py-10'>
      <Header />

      <div className="container max-w-[1532px] grid grid-cols-12 gap-4 py-8">
        <div className="col-span-12 md:col-span-5 flex gap-14">
          {/* Social Media Icons */}
          <div className="hidden md:flex flex-col items-center gap-8">
            <div className="min-h-28 border-l-white border-s" />

            <Image
              src={"/icons/Facebook.svg"}
              alt="Food Banner Image"
              width={12}
              height={12}
              priority
            />
            <Image
              src={"/icons/Instagram.svg"}
              alt="Food Banner Image"
              width={24}
              height={24}
              priority
            />
            <Image
              src={"/icons/Pinterest.svg"}
              alt="Food Banner Image"
              width={15}
              height={15}
              priority
            />

            <div className="min-h-28 border-l-white border-s" />
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="min-h-12"></div>

            <MultiHeading
              heading="The Art of speed food Quality"
              subheading="Its Quick & Amusing!"
            />

            <p className="text-white max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>

            <SolidButton text={"See Menu"} onClick={GoToMenu} />
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <Image
            src={"/images/home/hero-banner.svg"}
            alt="Food Banner Image"
            width={870}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
