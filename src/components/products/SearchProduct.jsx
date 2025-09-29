import React from "react";

const SearchProduct = ({ setSearchValue, searchValue }) => {
  return (
    <input
      type="search"
      placeholder="Search Product By Name"
      defaultValue={searchValue !== "all" ? searchValue : ""}
      className="border-1 bg-white border-light-gray rounded-lg px-5 py-1.5 outline-0 w-72 text-sm mr-3 focus:border-green"
      onChange={(e) => setSearchValue(e.target.value.trim())}
    />
  );
};

export default SearchProduct;
