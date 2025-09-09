import React from "react";

const ReceiptBox = () => {
  return (
    <div className="border-1 border-light-gray p-3 rounded flex items-center gap-3 text-dark-green my-2">
      <div>
        <img
          src="/assets/product-4.png"
          lazy="loading"
          alt="receiptImg"
          className="w-24 h-24 object-cover rounded"
        />
      </div>
      <div>
        <p className="font-bold"> Blue Diamond Almonds Lightly Naturel </p>
        <p className="text-dark-gray font-bold">
          size / <span className=" text-green"> 50g </span>
        </p>
        <p className="text-dark-gray font-bold">
          quantity / <span className=" text-green"> 5 baskets </span>
        </p>
      </div>
    </div>
  );
};

export default ReceiptBox;
