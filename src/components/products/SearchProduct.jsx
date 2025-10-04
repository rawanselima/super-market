import { useDebounce } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";

const SearchProduct = ({ setSearchValue, searchValue }) => {
  const [text, setText] = useState(searchValue !== "all" ? searchValue : "all");

  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedText.trim() === "") {
      setSearchValue("all");
    } else {
      setSearchValue(debouncedText);
    }
  }, [debouncedText]);

  return (
    <input
      type="search"
      placeholder="Search Product By Name"
      defaultValue={text}
      onChange={(e) => setText(e.target.value)}
      className="border-1 bg-white border-light-gray rounded-lg px-5 py-1.5 outline-0 w-72 text-sm mr-3 focus:border-green"
    />
  );
};

export default SearchProduct;
