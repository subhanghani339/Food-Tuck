import React from "react";
import Chef from "../OurChefs/Chef";
import { ourAllChef } from "@/app/data/dummyData";

const AllChef = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
      {ourAllChef.map((chef, index) => (
        <Chef
          key={index}
          url={chef.src}
          name={chef.name}
          designation={chef.designation}
          format={2}
        />
      ))}
    </div>
  );
};

export default AllChef;
