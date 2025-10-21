import React from "react";
import { TableCell, TableRow } from "../ui/table";
const RowTable = ({ item }) => {
  const styleTableCell = "p-3 text-[16px]";
  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell className={`${styleTableCell} w-50`}>{item.name}</TableCell>
      <TableCell className={`${styleTableCell} font-bold w-32 text-green`}>
        {item.category.name}
      </TableCell>

      <TableCell className={`${styleTableCell} w-36`}>${item.price} </TableCell>

      <TableCell className={`${styleTableCell} text-green font-bold w-40`}>
        {item.orderNumber}
      </TableCell>

      <TableCell className={`${styleTableCell} w-36`}>
        ${(+item.totalPrice).toFixed(2)}
      </TableCell>
    </TableRow>
  );
};

export default RowTable;
