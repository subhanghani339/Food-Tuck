import React from "react";

interface MultiHeadingProps {
  subheading: string;
  heading: string;
  textAlignment?: string;
  singleColorHeading?: boolean;
}

const MultiHeading: React.FC<MultiHeadingProps> = ({
  subheading,
  heading,
  textAlignment,
  singleColorHeading,
}) => {
  return (
    <div>
      <h2
        className={`special-text text-2xl md:text-3xl mb-3 text-brand-500
        ${textAlignment ? textAlignment : "text-left"}`}
      >
        {subheading}
      </h2>
      <h3
        className={`  ${
          singleColorHeading ? "text-grey-100 text-3xl" : "text-white text-4xl md:text-5xl"
        } font-bold ${textAlignment ? textAlignment : "text-left"}`}
      >
        <span
          className={`${
            singleColorHeading ? "text-grey-100" : "text-brand-500"
          }`}
        >
          {heading.slice(0, 2)}
        </span>
        {heading.slice(2)}
      </h3>
    </div>
  );
};

export default MultiHeading;
