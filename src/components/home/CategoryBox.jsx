import React from "react";

const CategoryBox = () => {
  const colors = [
    "bg-[#F2FCE4]",
    "bg-[#F4F6FA]",
    "bg-[#FEEFEA]",
    "bg-[#FFFCEB]",
    "bg-[#ECFFEC]",
    "bg-[#FFF3FF]",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`${randomColor} p-3 rounded text-center cursor-pointer md:w-44 w-36`}
    >
      <img
        src="/assets/category-1.png"
        alt="category"
        className="mx-auto"
        loading="lazy"
      />
      <p className="font-bold text-lg text-dark-green"> Cakes Milk </p>
      <p className="text-sm text-dark-gray font-light">28 Items </p>
    </div>
  );
};

export default CategoryBox;
