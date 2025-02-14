import React from "react";

interface FTInputProps {
  Icon?: React.ComponentType<{ fontSize: number }>;
  type: string;
  name: string;
  id?: string;
  disabled?:boolean;
  placeholder?: string;
  classes?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FTInput: React.FC<FTInputProps> = ({
  Icon,
  type,
  name,
  id,
  disabled,
  placeholder,
  classes,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-2 border border-grey-500 p-2">
      {Icon && <Icon fontSize={20} />}
      <input
        type={type}
        name={name}
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full focus-visible:outline-none placeholder:text-grey-200 ${classes}`}
      />
    </div>
  );
};

export default FTInput;
