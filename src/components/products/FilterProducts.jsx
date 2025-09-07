import React from "react";

const FilterProducts = () => {
  return (
    <select className="border-1 border-light-gray bg-white px-5 py-1.5 rounded-lg outline-0 my-4">
      <option value="Filter Category" disabled>
        Filter Category
      </option>
      <option value="all">all</option>
      <option value="vegetables">vegetables</option>
      <option value="fruits">fruits</option>
      <option value="milk">milk</option>
    </select>
  );
};

export default FilterProducts;
