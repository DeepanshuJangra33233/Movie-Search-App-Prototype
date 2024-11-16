import React from "react";
import SearchBar from "../SearchInput";

const NavBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between max-w-[1440px] mx-auto px-3 py-4">
      <div>
        <button className="uppercase text-2xl sm:text-3xl font-extrabold">
          MOVIE SEARCH <span className="text-[#3f65e5]">WEB</span>
        </button>
      </div>
      <div className="mt-3 sm:mt-0">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default NavBar;
