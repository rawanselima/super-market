import React, { useState } from "react";
import ReceiptBox from "../checkout/Receipt.Box";
import Button from "../common/Button";
import useOrderStatus from "@/hooks/useOrderStatus";
import TotalReceipt from "./TotalReceipt";
import DeletePopup from "../common/DeletePopup";

const Order = () => {
  const { styleStatus } = useOrderStatus("pending");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-light-green flex items-center justify-between p-3 rounded mt-3">
        <h2 className="font-bold text-2xl text-dark-green"> Order #Id </h2>
        <div className="flex gap-2 items-center">
          <p className={styleStatus}> Pending </p>
          <Button
            danger={true}
            small={true}
            navigate={() => setIsOpen(!isOpen)}
          >
            cancel
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 items-start">
        <div>
          <ReceiptBox />
          <ReceiptBox />
        </div>
        <TotalReceipt />
      </div>

      {isOpen && <DeletePopup isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Order;
