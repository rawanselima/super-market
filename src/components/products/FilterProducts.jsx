import React from "react";

const FilterProducts = ({ categoryId, setCategoryId, categories }) => {
  return (
    <select
      className="border-1 border-light-gray bg-white px-5 py-1.5 rounded-lg outline-0 my-4"
      value={categoryId}
      onChange={(e) => setCategoryId(e.target.value)}
    >
      <option value="Filter Category" disabled>
        Filter Category
      </option>
      <option value="all">all</option>
      {categories &&
        categories.map((category) => {
          return (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          );
        })}
    </select>
  );
};

export default FilterProducts;
