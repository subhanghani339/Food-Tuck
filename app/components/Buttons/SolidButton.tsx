import React from "react";

interface SolidButtonProps {
  text: string;
  className?: string;
  onClick ?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SolidButton: React.FC<SolidButtonProps> = ({ text, className = 'text-[#e0dfdf] rounded-3xl', onClick }) => {
  return (
    <button className={`bg-brand-500 py-3 px-8 ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default SolidButton;
