import React from "react";

export interface Data {
  id: number;
  date: string;
  type: string;
  description: string;
  amount: string;
  balance: string;
}

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

function SearchInput({ query, setQuery }: SearchProps) {
  return (
    <div className="px-4 py-2 bg-gray-100 border-b-1 border-gray-300">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        value={query}
        id="table-search"
        className="block p-1 tex-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search for items"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchInput;
