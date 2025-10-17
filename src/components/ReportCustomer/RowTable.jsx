import React from "react";
import { TableCell, TableRow } from "../ui/table";
import useOrderStatus from "@/hooks/useOrderStatus";
import useDate from "@/hooks/useDate";

const RowTable = ({ data }) => {
  const styleTableCell = "p-2 text-sm text-center";
  const { styleStatus } = useOrderStatus(data.status);
  const { formatted } = useDate(data.date);
  return (
    <>
      {data.order.map((order, index) => (
        <TableRow key={order.id} className="border-b border-light-gray">
          {index === 0 && (
            <TableCell
              rowSpan={data.order.length}
              className={`${styleTableCell} text-lg font-bold`}
            >
              {data.id}
            </TableCell>
          )}

          <TableCell className={`${styleTableCell} w-48`}>
            {order.name}
          </TableCell>
          <TableCell className={`${styleTableCell} font-bold w-24`}>
            ${order.price}
          </TableCell>
          <TableCell className={`${styleTableCell} text-green font-bold w-24`}>
            {order.size}g
          </TableCell>
          <TableCell className={`${styleTableCell} text-lg w-20`}>
            {order.quantity}
          </TableCell>
          <TableCell className={`${styleTableCell} text-green font-bold w-24`}>
            ${(order.price * order.quantity).toFixed(2)}
          </TableCell>

          {index === 0 && (
            <>
              <TableCell
                rowSpan={data.order.length}
                className={`${styleTableCell} w-28`}
              >
                {formatted}
              </TableCell>
              <TableCell
                rowSpan={data.order.length}
                className={`${styleTableCell} font-bold w-28`}
              >
                <span className={`${styleStatus}`}>
                  {data.status}
                </span>
              </TableCell>
            </>
          )}
        </TableRow>
      ))}
    </>
  );
};

export default RowTable;
