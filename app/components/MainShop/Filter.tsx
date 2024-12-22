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
}

const Filter: React.FC<FilterProps> = ({ name, filterOptions }) => {
  const options = filterOptions.map((option) => ({
    label: option.name,
    value: option.value,
  }));

  return (
    <div className="flex items-center gap-3">
      <span className="text-grey-100"> {name} </span>
      <Select
        options={options}
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
