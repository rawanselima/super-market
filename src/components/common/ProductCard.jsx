import React from "react";
import { IoCartOutline } from "react-icons/io5";
const ProductCard = () => {
  return (
    <div className="p-3 rounded border-2 border-light-gray cursor-pointer">
      <img
        src="/assets/product-1.png"
        alt="topSales"
        loading="lazy"
        className="w-40 h-40 object-cover mx-auto"
      />
      <h6 className="font-light text-dark-gray text-sm">Snack </h6>
      <h2 className="font-bold sm:text-lg/6 text-sm text-dark-green my-3">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h2>
      <p className="font-bold">
        <span className="text-green text-lg">$350</span>
        <span className="text-dark-gray line-through text-sm"> $530 </span>
      </p>
      <button className="bg-light-green text-green font-bold px-3 py-1 flex items-center justify-self-end my-3 rounded cursor-pointer hover:bg-green hover:text-light-green transition-all duration-300">
        <span className="mr-1 text-lg">
          <IoCartOutline />
        </span>
        Add
      </button>
    </div>
  );
};

export default ProductCard;
