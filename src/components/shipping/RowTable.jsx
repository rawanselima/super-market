import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import PopUp from "../common/PopUp";
import { TbEdit } from "react-icons/tb";
import EditShipping from "./EditShipping";

const RowTable = () => {
  const styleTableCell = "p-2 text-lg";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell className={`${styleTableCell} w-40`}> Cairo </TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-40`}>
        75 LE
      </TableCell>
      <TableCell className={`${styleTableCell} w-60`}>
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <TbEdit />
        </button>
      </TableCell>

      {isOpen && (
        <PopUp
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={"Edit Price Shipping"}
        >
          <EditShipping />
        </PopUp>
      )}
    </TableRow>
  );
};

export default RowTable;
