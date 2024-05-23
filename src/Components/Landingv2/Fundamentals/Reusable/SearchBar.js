import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ search, handleChange, width, height }) => {
  return (
    <div className="relative mb-4">
      <div
        className={`absolute text-gray-500 top-[30%] ${
          width ? "left-[2%]" : "left-[4%]"
        }`}
      >
        <BiSearch />
      </div>
      <input
        type="text"
        onChange={handleChange}
        value={search}
        className={`pl-[32px]  pr-1 w-full ${
          width ? `w-[${width}px]` : "w-[358px]"
        } ${height ? `h-[${height}px]` : "h-[35px]"} border border-[#E5E5E5]
          rounded-[20px] focus:outline-none`}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
