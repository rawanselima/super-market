import React, { useState } from "react";
import ReceiptBox from "../checkout/Receipt.Box";
import Button from "../common/Button";
import useOrderStatus from "@/hooks/useOrderStatus";
import TotalReceipt from "./TotalReceipt";
import DeletePopup from "../common/DeletePopup";
import useDate from "@/hooks/useDate";
import useEditOrder from "../order/useEditOrder";

const Order = ({ order }) => {
  const { styleStatus } = useOrderStatus(order.status);
  const [isOpen, setIsOpen] = useState(false);
  const { formatted } = useDate(order.date);
  const { mutate, isPending } = useEditOrder(setIsOpen);

  return (
    <div>
      <div className="bg-light-green flex items-center justify-between p-3 rounded mt-3">
        <div>
          <h2 className="font-bold text-2xl text-dark-green">
            Order #{order.id}
          </h2>
          <p className="text-dark-gray text-xs font-bold"> {formatted} </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className={styleStatus}> {order.status} </p>
          {order.status === "pending" && (
            <Button
              danger={true}
              small={true}
              navigate={() => setIsOpen(!isOpen)}
              isPending={isPending}
            >
              cancel
            </Button>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 items-start">
        <div>
          {order.order.map((ele) => {
            return <ReceiptBox cart={ele} />;
          })}
        </div>
        <TotalReceipt order={order} />
      </div>

      {isOpen && (
        <DeletePopup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          mutate={() =>
            mutate({
              orderId: order.id,
              newOrder: { ...order, status: "cancel" },
            })
          }
          isPending={isPending}
        />
      )}
    </div>
  );
};

export default Order;
