import React from "react";

interface FTInputProps {
  Icon: React.ComponentType<{ fontSize: number }>;
  type: string;
  name: string;
  placeholder: string;
  classes?: string;
}

const FTInput: React.FC<FTInputProps> = ({
  Icon,
  type,
  name,
  placeholder,
  classes,
}) => {
  return (
    <div className="flex items-center gap-2 border border-grey-500 p-2">
      <Icon fontSize={20} />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full focus-visible:outline-none placeholder:text-grey-200 ${classes}`}
      />
    </div>
  );
};

export default FTInput;
