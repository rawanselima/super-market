import React, { useEffect } from "react";
import RowCart from "./RowCart";
import { useSelector } from "react-redux";

const TableCart = () => {
  const data = useSelector((state) => state.cartStore);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <table className="rounded w-full table-fixed">
      <thead className="bg-green rounded text-white text-left">
        <tr className="font-bold uppercase whitespace-nowrap">
          <th scope="col" className="px-2 sm:px-3 py-2 sm:py-5 w-20 sm:w-24">
            Image
          </th>
          <th scope="col" className="px-2 sm:px-3 py-2 sm:py-5 w-48">
            Name
          </th>
          <th scope="col" className="px-2 sm:px-3 py-2 sm:py-5 w-16 sm:w-20">
            Price
          </th>
          <th scope="col" className="px-2 sm:px-3 py-2 sm:py-5 w-24">
            Quantity
          </th>
          <th scope="col" className="px-2 sm:px-3 py-2 sm:py-5 w-20">
            Total
          </th>
          <th scope="col" className="px-2 sm:px-3 py-2 sm:py-5 w-24 md:w-20">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <RowCart />
        <RowCart />
        <RowCart />
      </tbody>
    </table>
  );
};

export default TableCart;
