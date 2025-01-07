import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="container mb-12">
      <h3 className="text-grey-100 font-bold text-3xl text-center">
        Why Choose Us
      </h3>
      <p className="text-grey-200 text-md mx-auto max-w-lg text-center my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
      </p>

      <Image
        src="/images/home/why-about.svg"
        alt="why choose us"
        width={1320}
        height={386}
        priority
        className="mt-10"
      />
    </div>
  );
};

export default WhyChoose;
