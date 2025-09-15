import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { useNavigate } from "react-router-dom";
const RowTable = () => {
  const styleTableCell = "p-2 text-sm";

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell className={`${styleTableCell} w-24`}>
        <img
          src="/assets/product-5.png"
          alt="Order Product"
          loading="lazy"
          className="w-full h-16 object-cover"
        />
      </TableCell>
      <TableCell className={`${styleTableCell} w-48`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim
        animi quam
      </TableCell>
      <TableCell className={`${styleTableCell} font-bold w-24 px-3`}>
        $230
      </TableCell>
      <TableCell className={`${styleTableCell} font-bold w-24 px-3`}>
        Snack
      </TableCell>
      <TableCell className={`${styleTableCell} w-24 px-3 text-green font-bold`}>
        20g
      </TableCell>
      <TableCell className={`${styleTableCell} text-lg w-20`}> 2 </TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-24`}>
        $6200
      </TableCell>
      <TableCell className={`${styleTableCell} w-28`}>10/10/2025</TableCell>
      
    </TableRow>
  );
};

export default RowTable;
