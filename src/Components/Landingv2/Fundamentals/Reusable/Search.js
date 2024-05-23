import React from "react";
import navsearch from "../../../../images/svg/navsearch.svg";

const Search = ({ searchText, setSearchText, handleSearch }) => {
  return (
    <div className="max-w-[486px] w-full bg-[#ffffff] border focus-within:border-2 border-[#E5E5E5] focus-within:hover:border-[#9c0e43] hover:border-[#E1B7C7] focus-within:border-[#9c0e43] rounded-[20px] relative pl-3 h-[35px] pt-[5px] pb-2 pr-8 md:hidden">
      <img className="absolute top-[35%]" src={navsearch} alt="" />
      <input
        className="focus:outline-none ml-5 products_page_nav_input w-full"
        placeholder="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="absolute top-[3px] right-[2px] w-[72px] h-[27px] rounded-[20px] bg-[#9C0E43] active:bg-[#C4C4C4] search_button_text"
        onClick={handleSearch}
      >
        search
      </button>
    </div>
  );
};

export default Search;
