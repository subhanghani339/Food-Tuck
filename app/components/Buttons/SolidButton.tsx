import React from "react";

interface SolidButtonProps {
  text: string;
}

const SolidButton: React.FC<SolidButtonProps> = ({ text }) => {
  return (
    <button className="bg-brand-500 text-[#e0dfdf] py-3 px-8 rounded-3xl">
      {text}
    </button>
  );
};

export default SolidButton;
