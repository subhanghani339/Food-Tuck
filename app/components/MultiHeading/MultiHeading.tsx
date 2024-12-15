import React from "react";

interface MultiHeadingProps {
  subheading: string;
  heading: string;
}

const MultiHeading: React.FC<MultiHeadingProps> = ({ subheading, heading }) => {
  return (
    <div>
      <h2 className="special-text text-3xl mb-3 text-brand-500">{subheading}</h2>
      <h3 className="text-6xl text-white">
        <span className="text-brand-500">{heading.slice(0, 2)}</span>
        {heading.slice(2)}
      </h3>
    </div>
  );
};

export default MultiHeading;
