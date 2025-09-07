import React from "react";

const SearchProduct = () => {
  return (
    <input
      type="search"
      placeholder="Search Product By Name"
      className="border-1 bg-white border-light-gray rounded-lg px-5 py-1.5 outline-0 w-72 text-sm mr-3 focus:border-green"
    />
  );
};

export default SearchProduct;
