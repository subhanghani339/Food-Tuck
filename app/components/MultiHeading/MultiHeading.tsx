import React from "react";

interface MultiHeadingProps {
  subheading: string;
  heading: string;
  textAlignment?: string;
}

const MultiHeading: React.FC<MultiHeadingProps> = ({
  subheading,
  heading,
  textAlignment,
}) => {
  return (
    <div>
      <h2
        className={`special-text text-3xl mb-3 text-brand-500 ${
          textAlignment ? textAlignment : "text-left"
        }`}
      >
        {subheading}
      </h2>
      <h3
        className={`text-5xl text-white font-bold ${
          textAlignment ? textAlignment : "text-left"
        }`}
      >
        <span className="text-brand-500">{heading.slice(0, 2)}</span>
        {heading.slice(2)}
      </h3>
    </div>
  );
};

export default MultiHeading;
