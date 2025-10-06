import React, { useEffect, useState } from "react";
import ReceiptBox from "./Receipt.Box";
import { IoReceiptOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Receipt = ({ shippingPrice }) => {
  const cartData = useSelector((state) => state.cartStore);
  const subTotalPrice = cartData.reduce(
    (acc, cur) => acc + +cur.price * +cur.quantity,
    0
  );

  return (
    <section>
      <div>
        {cartData.map((cart) => (
          <ReceiptBox cart={cart} key={cart.id} />
        ))}
      </div>

      <div className="font-bold text-dark-green border-1 border-light-gray rounded p-3 text-base/8">
        <h3 className="text-xl font-bold my-3 text-dark-green flex items-center">
          <span className="mr-2">
            <IoReceiptOutline />
          </span>
          Receipt Data
        </h3>
        <p>
          SubTotal :
          <span className="text-green text-xl">
            ${subTotalPrice.toFixed(2)}
          </span>
        </p>
        <p>
          Shipping Price :
          <span className="text-green text-xl">
            ${shippingPrice ? shippingPrice.price : 0}
          </span>
        </p>
        <p>
          Total Price :
          <span className="text-green text-xl">
            $
            {(
              subTotalPrice + (shippingPrice ? +shippingPrice.price : 0)
            ).toFixed(2)}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Receipt;
