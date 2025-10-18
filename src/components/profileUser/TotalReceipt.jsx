import React from "react";
import { IoReceiptOutline } from "react-icons/io5";

const TotalReceipt = ({ order }) => {
  return (
    <div className="font-bold text-dark-green border-1 border-light-gray rounded p-3 text-base/8 mt-3">
      <h3 className="text-xl font-bold my-3 text-dark-green flex items-center">
        <span className="mr-2">
          <IoReceiptOutline />
        </span>
        Receipt Data
      </h3>
      <p>
        SubTotal :
        <span className="text-green text-xl"> ${order.totalPrice} </span>
      </p>
      <p>
        Shipping Price :
        <span className="text-green text-xl">${order.shippingPrice || 0}</span>
      </p>
      <p>
        Total Price :
        <span className="text-green text-xl">
          ${+order.totalPrice + (+order.shippingPrice || 0)}
        </span>
      </p>
    </div>
  );
};

export default TotalReceipt;
