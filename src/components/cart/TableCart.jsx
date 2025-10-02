import React, { useEffect } from "react";
import RowCart from "./RowCart";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks";
import { addCart } from "@/redux/reducerCart";

const TableCart = () => {
  const data = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const [cart] = useLocalStorage("cart", []);

  useEffect(() => {
    dispatch(addCart(cart));
  }, []);

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
            size
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
        {data && data.length > 0 ? (
          data.map((ele) => {
            return <RowCart data={ele} key={ele.id} />;
          })
        ) : (
          <tr>
            <td>
              <p> cart is empty </p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableCart;
