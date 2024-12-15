import React from "react";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import MultiHeading from "@/app/components/MultiHeading/MultiHeading";
import SolidButton from "@/app/components/Buttons/SolidButton";

const HeroBanner = () => {
  return (
    <div className='bg-[url("/images/home/background-banner.svg")] bg-cover bg-center py-10'>
      <Header />

      <div className="container max-w-[1532px] grid grid-cols-12 gap-4 py-8">
        <div className="col-span-5 flex flex-col items-start gap-4">
          <div className="min-h-12"></div>
          <MultiHeading
            heading="The Art of speed food Quality"
            subheading="Its Quick & Amusing!"
          />

          <p className="text-white max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>

          <SolidButton text={"See Menu"} />
        </div>

        <div className="col-span-7">
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
