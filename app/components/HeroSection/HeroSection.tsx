import React, { memo } from "react";

interface HeroSectionProps {
  heading: string;
  breadcrumb: string;
}

const HeroSection: React.FC<HeroSectionProps> = memo(
  ({ heading, breadcrumb }) => {
    return (
      <div
        className="min-h-72 bg-cover bg-center flex flex-col gap-5 justify-center items-center text-white"
        style={{ backgroundImage: "url('/images/banner/main_banner.svg')" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold"> {heading} </h1>
        <div className="flex">
          <p>Home &gt;</p>
          <p className="text-brand-500">&nbsp;{breadcrumb} </p>
        </div>
      </div>
    );
  }
);

export default HeroSection;
