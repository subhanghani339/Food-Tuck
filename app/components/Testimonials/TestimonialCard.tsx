import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  image: string;
  name: string;
  designation: string;
  feedback: string;
  hasBoxShadow?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  designation,
  feedback,
  hasBoxShadow = false,
}) => {
  return (
    <div className="p-6 relative pt-16">
      <div className="absolute top-0 left-0 right-0">
        <Image
          src={image}
          alt="client face"
          width={130}
          height={130}
          priority
          className="mx-auto"
        />
      </div>
      <div
        className={`bg-white py-8 px-16 ${
          hasBoxShadow ? "shadow-testimonialShadow" : null
        } `}
      >
        <Image
          src={"/images/home/quotes.svg"}
          alt="quotation mark"
          width={48}
          height={48}
          priority
          className="mx-auto mt-16"
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
