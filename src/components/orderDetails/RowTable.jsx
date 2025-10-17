import React from "react";
import { TableCell, TableRow } from "../ui/table";
import useDate from "@/hooks/useDate";
const RowTable = ({ order, date }) => {
  const styleTableCell = "p-2 text-sm";
  const { formatted } = useDate(date);

  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell className={`${styleTableCell} w-24`}>
        <img
          src={order.avatar}
          alt={order.name}
          loading="lazy"
          className="w-full h-16 object-cover"
        />
      </TableCell>
      <TableCell className={`${styleTableCell} w-48`}>{order.name}</TableCell>
      <TableCell
        className={`${styleTableCell} text-sm text-green font-semibold w-20`}
      >
        {order.categoryName}
      </TableCell>
      <TableCell className={`${styleTableCell} font-bold w-24 px-3`}>
        ${order.price}
      </TableCell>
      <TableCell className={`${styleTableCell} w-24 px-3 text-green font-bold`}>
        {order.size}g
      </TableCell>
      <TableCell className={`${styleTableCell} text-lg w-20`}>
        {order.quantity}
      </TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-24`}>
        ${(+order.price * +order.quantity).toFixed(2)}
      </TableCell>
      <TableCell className={`${styleTableCell} w-28`}>{formatted}</TableCell>
    </TableRow>
  );
};

export default RowTable;
