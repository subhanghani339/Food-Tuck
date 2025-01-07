import Image from "next/image";
import React from "react";
import QualityCard from "./QualityCard";
import { qualities } from "@/app/data/dummyData";

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

      <div className="container flex gap-5 mt-8 flex-col md:flex-row">
        {qualities.map((quality, index) => (
          <QualityCard
            key={index}
            image={quality.icon}
            title={quality.name}
            para={quality.decription}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
