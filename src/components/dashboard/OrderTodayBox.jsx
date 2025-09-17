import useOrderStatus from "@/hooks/useOrderStatus";
import React, { use } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
const OrderTodayBox = () => {
  const { styleStatus } = useOrderStatus("pending");
  const navigate = useNavigate();

  return (
    <li className="flex items-center justify-between bg-white p-2 my-1 rounded text-sm">
      <div>
        <p className="font-bold text-dark-green"> rawan selima </p>
        <p className="text-dark-gray"> order Id </p>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <p className="font-bold text-dark-green"> $201 </p>
          <p className="text-dark-gray"> 2 min ago </p>
        </div>
        <div>
          <p className={`${styleStatus} !py-1 !ml-0`}> pending </p>
          <p className="ml-2">
            <Button size={"small"} navigate={() => navigate("order/1")}>
              details
            </Button>
          </p>
        </div>
      </div>
    </li>
  );
};

export default OrderTodayBox;
