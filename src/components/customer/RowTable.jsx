import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../common/DeletePopup";
const RowTable = () => {
  const styleTableCell = "p-2 text-sm";

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell className={`${styleTableCell} w-36`}>rawan selima</TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-40`}>
        <a href="https://wa.me/+201060661936" target="_blank">
          +201060661936
        </a>
      </TableCell>
      <TableCell className={`${styleTableCell} w-60`}>
        egypt kafer el sheikh sakha
      </TableCell>

      <TableCell className={`${styleTableCell} font-bold w-48`}>
        <div className="flex">
          <button
            className="mr-3 cursor-pointer bg-light-green text-dark-green px-3 py-1 text-sm  rounded-lg  my-2"
            onClick={() => navigate("1")}
          >
            Report
          </button>
          <Button
            size={"small"}
            danger={true}
            navigate={() => setIsOpen(!isOpen)}
          >
            Delete
          </Button>
        </div>
      </TableCell>

      {isOpen && <DeletePopup setIsOpen={setIsOpen} isOpen={isOpen} />}
    </TableRow>
  );
};

export default RowTable;
