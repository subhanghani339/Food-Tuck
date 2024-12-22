"use client";

import React from "react";
import Select from "react-select";

interface FilterOptionsProps {
  name: string | number;
  value: string | number;
}

interface FilterProps {
  name: string;
  filterOptions: FilterOptionsProps[];
  value: string | number; // value passed down from the parent
  onChange: (selectedOption: FilterOptionsProps) => void; // onChange callback
}

const Filter: React.FC<FilterProps> = ({ name, filterOptions, value, onChange }) => {
  
  const options = filterOptions.map((option) => ({
    label: option.name,
    value: option.value,
  }));

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3">
      <span className="text-grey-100"> {name} </span>
      <Select
        options={options}
        value={options.find(option => option.value === value)} // Controlled value
        onChange={(selectedOption) => {
          if (selectedOption) {
            onChange({ name: selectedOption.label, value: selectedOption.value });
          }
        }}
        defaultValue={options[0]}
        components={{
          IndicatorSeparator: null,
        }}
        styles={{
          menuList: (provided) => ({
            ...provided,
            padding: 0,
            backgroundColor: "transparent",
          }),
          control: (provided) => ({
            ...provided,
            width: 120,
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#FFBE5a' : provided.backgroundColor,
            ":hover": {
              background: "orange",
              color: "white",
            },
          }),
        }}
      />
    </div>
  );
};

export default Filter;
