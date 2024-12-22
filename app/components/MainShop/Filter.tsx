import React from "react";

interface FilterOptionsProps {
  name: string | number;
  value: string | number;
}

interface FilterProps {
  name: string;
  filterOptions: FilterOptionsProps[];
}

const Filter: React.FC<FilterProps> = ({ name, filterOptions }) => {
  return (
    <div className="flex gap-3">
      <span className="text-grey-100"> {name} </span>
      <select>
        {filterOptions.map((option, index) => (
          <option key={index} value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
