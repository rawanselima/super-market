import React from "react";
import Button from "../common/Button";
import { RiDeleteBin6Line } from "react-icons/ri";

const RowCart = () => {
  return (
    <tr className="text-left">
      <td className="px-2 sm:px-3 py-2 text-sm text-dark-green w-20 sm:w-24 whitespace-nowrap">
        <img
          src="/assets/product-4.png"
          alt="cartImg"
          loading="lazy"
          className="w-12 h-12 sm:w-16 sm:h-16 object-cover border-1 border-green rounded"
        />
      </td>

      <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm text-dark-green w-48 break-words whitespace-normal">
        Seeds of Change Organic Quinoa, Brown
      </td>

      <td className="px-2 sm:px-3 py-2 text-sm sm:text-lg font-bold text-dark-green w-16 sm:w-20 whitespace-nowrap">
        $50
      </td>

      <td className="px-2 sm:px-3 py-2 text-dark-green w-24 whitespace-nowrap">
        <form className="border-1 border-light-gray bg-light-green rounded w-fit">
          <button className="text-center px-2 cursor-pointer hover:bg-green hover:text-white duration-300 transition-all text-xs sm:text-sm">
            -
          </button>
          <input
            type="text"
            defaultValue={1}
            className="w-8 sm:w-10 outline-0 text-center text-xs sm:text-sm"
          />
          <button className="text-center px-2 cursor-pointer hover:bg-green hover:text-white duration-300 transition-all text-xs sm:text-sm">
            +
          </button>
        </form>
      </td>

      <td className="px-2 sm:px-6 py-2 sm:py-4 text-sm sm:text-lg font-bold text-green w-16 sm:w-20 whitespace-nowrap">
        $150
      </td>

      <td className="px-2 sm:px-6 py-2 sm:py-4 text-end text-xs sm:text-sm font-medium rounded w-24 md:w-20 whitespace-nowrap">
        <Button size={"small"} danger={true}>
          <span className="mr-1">
            <RiDeleteBin6Line />
          </span>
          <span>Delete</span>
        </Button>
      </td>
    </tr>
  );
};

export default RowCart;
