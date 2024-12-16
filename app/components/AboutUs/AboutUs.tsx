import React from "react";
import MultiHeading from "../MultiHeading/MultiHeading";
import Image from "next/image";
import SolidButton from "../Buttons/SolidButton";

const AboutUs = () => {
  return (
    <div className="container grid gap-4 grid-cols-12 py-16">
      <div className="col-span-12 md:col-span-5 flex flex-col items-start gap-8">
        <MultiHeading
          heading="We Create the best foody product"
          subheading="About us"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        <ul className="space-y-2">
          <li className="before:content-['✓'] before:mr-2"> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
          <li className="before:content-['✓'] before:mr-2">
            {" "}
            Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
          </li>
          <li className="before:content-['✓'] before:mr-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
        </ul>

        <SolidButton text={"Read More"} />
      </div>

      <div className="col-span-12 md:col-span-7 ml-auto">
        <Image
          src={"/images/home/about.svg"}
          alt="about foods"
          width={660}
          height={540}
          priority
        />
      </div>
      
    </div>
  );
};

export default AboutUs;
