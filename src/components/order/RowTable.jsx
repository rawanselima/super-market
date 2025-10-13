import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import Button from "../common/Button";
import PopUp from "../common/PopUp";
import EditStatus from "./EditStatus";
import { useNavigate } from "react-router-dom";
import useOrderStatus from "@/hooks/useOrderStatus";
import useDate from "@/hooks/useDate";
const RowTable = ({ order }) => {
  const styleTableCell = "p-2 text-sm";
  const { styleStatus } = useOrderStatus(order.status);
  const { formatted } = useDate(order.date);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  console.log(order.date);

  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell className={`${styleTableCell} w-36`}>
        {order.userName}
      </TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-40`}>
        <a href="https://wa.me/+201060661936" target="_blank">
          {order.phone}
        </a>
      </TableCell>
      <TableCell className={`${styleTableCell} w-60`}>
        {order.address}
      </TableCell>

      <TableCell className={`${styleTableCell} text-green font-bold w-36`}>
        <span className={styleStatus}> {order.status} </span>
      </TableCell>
      <TableCell className={`${styleTableCell} w-36`}> {formatted} </TableCell>

      <TableCell className={`${styleTableCell} font-bold w-48`}>
        <div className="flex">
          <button
            className="mr-3 cursor-pointer bg-light-green text-dark-green px-3 py-1 text-sm  rounded-lg  my-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            edit status
          </button>
          <Button size={"small"} navigate={() => navigate(order.id)}>
            details
          </Button>
        </div>
      </TableCell>

      {isOpen && (
        <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={"Edit Status"}>
          <EditStatus order={order} setIsOpen={setIsOpen} />
        </PopUp>
      )}
    </TableRow>
  );
};

export default RowTable;
