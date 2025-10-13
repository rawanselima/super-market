import useOrderStatus from "@/hooks/useOrderStatus";
import React, { use } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
const OrderTodayBox = ({ order }) => {
  const { styleStatus } = useOrderStatus(order.status);
  const navigate = useNavigate();
  const date = formatDistanceToNow(new Date(order.date), {
    addSuffix: true,
  });

  return (
    <li className="flex items-center justify-between bg-white p-2 my-1 rounded text-sm">
      <div>
        <p className="font-bold text-dark-green"> {order.userName} </p>
        <p className="text-dark-gray"> #{order.id} </p>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <p className="font-bold text-dark-green"> ${order.totalPrice} </p>
          <p className="text-dark-gray"> {date} </p>
        </div>
        <div>
          <p className={`${styleStatus} !py-1 !ml-0`}> {order.status} </p>
          <p className="ml-2">
            <Button
              size={"small"}
              navigate={() => navigate(`order/${order.id}`)}
            >
              details
            </Button>
          </p>
        </div>
      </div>
    </li>
  );
};

export default OrderTodayBox;
