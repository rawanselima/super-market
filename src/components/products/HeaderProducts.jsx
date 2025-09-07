import React from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";
const HeaderProducts = () => {
  return (
    <section className="p-4 col-span-12 text-lg font-bold rounded bg-green text-white flex flex-wrap items-center justify-between">
      <p className="flex items-center gap-2">
        <span>
          <RiShoppingBag3Fill />
        </span>
        Shopping Time
      </p>
      <p className="flex items-center gap-2">
        <Link to="/"> home </Link>
        <span>
          <FaArrowRightLong />
        </span>
        <Link to="/products"> shop </Link>
      </p>
    </section>
  );
};

export default HeaderProducts;
