import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex items-center gap-3">
      <input
        className="bg-transparent border-white border-2 p-2 rounded-md focus:outline-none"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button
        className="bg-[#3f65e5] text-white py-2 px-5 rounded-md hover:bg-[#3f65e5]/80 duration-300 ease-in-out"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
