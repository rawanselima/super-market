import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import PopUp from "../common/PopUp";
import { TbEdit } from "react-icons/tb";
import EditShipping from "./EditShipping";

const RowTable = ({ shipping }) => {
  const styleTableCell = "p-2 text-lg";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell className={`${styleTableCell} w-40`}>
        {shipping.name}
      </TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-40`}>
        {shipping.price} LE
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
          <EditShipping item={shipping} setIsOpen={setIsOpen} />
        </PopUp>
      )}
    </TableRow>
  );
};

export default RowTable;
