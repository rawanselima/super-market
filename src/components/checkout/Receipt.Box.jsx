import React from "react";

const ReceiptBox = ({ cart }) => {
  
  return (
    <div className="border-1 border-light-gray p-3 rounded flex items-center gap-3 text-dark-green my-2">
      <div>
        <img
          src={cart.avatar}
          lazy="loading"
          alt={cart.name}
          className="w-24 h-24 object-cover rounded"
        />
      </div>
      <div>
        <p className="font-bold"> {cart.name} </p>
        <p className="text-dark-gray font-bold">
          size / <span className=" text-green"> {cart.size}g </span>
        </p>
        <p className="text-dark-gray font-bold">
          quantity /{" "}
          <span className=" text-green"> {cart.quantity} baskets </span>
        </p>
        <p className="text-dark-gray font-bold">
          price / <span className=" text-green"> ${cart.price} </span>
        </p>
      </div>
    </div>
  );
};

export default ReceiptBox;
