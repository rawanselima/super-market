import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { IoStarSharp } from "react-icons/io5";
const RowTable = () => {
  const styleTableCell = "p-2 text-sm";

  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell className={`${styleTableCell} font-bold w-20`}>
        <img
          src="/assets/product-6.png"
          alt="productImage"
          loading="lazy"
          className="w-full h-20 object-fit"
        />
      </TableCell>
      <TableCell className={`${styleTableCell} font-bold w-50`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </TableCell>
      <TableCell className={`${styleTableCell} w-36`}>rawan selima</TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-40`}>
        <a href="https://wa.me/+201060661936" target="_blank">
          +201060661936
        </a>
      </TableCell>
      <TableCell className={`${styleTableCell} w-36`}>
        <p className="flex gap-1 text-lg text-yellow-500" >
          <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />
          <IoStarSharp />
        </p>
      </TableCell>

      <TableCell className={`${styleTableCell} font-bold w-60`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. ex non.
      </TableCell>
    </TableRow>
  );
};

export default RowTable;
