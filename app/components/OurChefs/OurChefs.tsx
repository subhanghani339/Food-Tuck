"use client";

import React from "react";
import MultiHeading from "../MultiHeading/MultiHeading";
import Chef from "./Chef";
import { useRouter } from "next/navigation";
import { ourChef } from "@/app/data/dummyData";

const OurChefs = () => {
  const router = useRouter();
  const GoToChefPage = () => router.push("/chef");
  return (
    <div className="container py-16">
      <MultiHeading
        heading="Meet Our Chef"
        subheading="Chefs"
        textAlignment={"text-center"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {ourChef.map((chef, index) => (
          <Chef
            key={index}
            url={chef.src}
            name={chef.name}
            designation={chef.designation}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          className="bg-transparent border border-brand-500 rounded-full px-6 py-2"
          onClick={GoToChefPage}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default OurChefs;
