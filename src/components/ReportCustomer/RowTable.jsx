import React from "react";
import { TableCell, TableRow } from "../ui/table";
import useOrderStatus from "@/hooks/useOrderStatus";
const RowTable = () => {
  const styleTableCell = "p-2 text-sm";
  const { styleStatus } = useOrderStatus("cancel");

  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell rowspan={3} className={`${styleTableCell} w-20 font-bold`}>
        #123
      </TableCell>
      <TableCell className={`${styleTableCell} w-48`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim
        animi quam
      </TableCell>
      <TableCell className={`${styleTableCell} font-bold w-24 px-3`}>
        $230
      </TableCell>
      <TableCell className={`${styleTableCell} w-24 px-3 text-green font-bold`}>
        20g
      </TableCell>
      <TableCell className={`${styleTableCell} text-lg w-20`}> 2 </TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-24`}>
        $6200
      </TableCell>
      <TableCell className={`${styleTableCell} w-28`}>10/10/2025</TableCell>
      <TableCell
        rowspan={3}
        className={`${styleTableCell} font-bold w-24 px-3`}
      >
        <span className={styleStatus}> cancel </span>
      </TableCell>
    </TableRow>
  );
};

export default RowTable;
