import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  image: string;
  name: string;
  designation: string;
  feedback: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  designation,
  feedback,
}) => {
  return (
    <div className="p-6">
      <div className="half-white-transparent-bg">
        <Image
          src={image}
          alt="client face"
          width={130}
          height={130}
          priority
          className="mx-auto"
        />
      </div>
      <div className="bg-white py-8 px-16">
        <Image
          src={"/images/home/quotes.svg"}
          alt="quotation mark"
          width={48}
          height={48}
          priority
          className="mx-auto"
        />

        <h6 className="text-center text-grey-200">{feedback}</h6>

        <div className="flex gap-2 justify-center mt-6">
          {Array(5)
            .fill(null)
            .map((__, index) => (
              <FaStar
                key={index}
                fill={index < 4 ? "orange" : "#E0E0E0"}
                size="20"
              />
            ))}
        </div>

        <h3 className="text-center text-xl text-grey-200 font-bold my-1">
          {name}
        </h3>

        <h6 className="text-center text-grey-200">{designation}</h6>
      </div>
    </div>
  );
};

export default TestimonialCard;
