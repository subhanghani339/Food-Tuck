import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex border">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Your Keyword..."
        className="w-full placeholder:text-grey-300 text-sm focus-visible:outline-none p-2"
        aria-label="Search Blog Posts"
      />
      <button type="submit" className="bg-brand-500 px-2" aria-label="Search">
        <CiSearch fill="white" />
      </button>
    </form>
  );
};

export default SearchInput;
