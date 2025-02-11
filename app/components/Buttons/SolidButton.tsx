import React, { ReactNode } from "react";

interface SolidButtonProps {
  Icon?: React.ComponentType;
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SolidButton: React.FC<SolidButtonProps> = ({
  Icon,
  type='button',
  text,
  className = "text-[#e0dfdf] rounded-3xl",
  onClick,
}) => {
  return (
    <button type={type} className={`bg-brand-500 py-3 px-8 ${className}`} onClick={onClick}>
      {Icon && <span>{<Icon />}</span>} {text}
    </button>
  );
};

export default SolidButton;
