import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { FaStar } from "react-icons/fa6";
const RowTable = ({ feedback }) => {
  const styleTableCell = "p-2 text-sm";

  return (
    <TableRow className="b-light-green border-b-1 border-light-gray">
      <TableCell className={`${styleTableCell} font-bold w-20`}>
        <img
          src={feedback.productImg}
          alt={feedback.productName}
          loading="lazy"
          className="w-full h-20 object-contain"
        />
      </TableCell>

      <TableCell className={`${styleTableCell} font-bold w-50`}>
        {feedback.productName || "Unnamed product"}
      </TableCell>

      <TableCell className={`${styleTableCell} w-36`}>
        {feedback.userName}
      </TableCell>

      <TableCell className={`${styleTableCell} text-green font-bold w-40`}>
        <a
          href={`https://wa.me/+201060661936`}
          target="_blank"
          rel="noreferrer"
        >
          {feedback.userPhone}
        </a>
      </TableCell>

      <TableCell className={`${styleTableCell} w-36`}>
        <p className="flex gap-1 text-lg">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${
                index < feedback?.rating ? "text-yellow-500" : "text-light-gray"
              }`}
            >
              <FaStar />
            </span>
          ))}
        </p>
      </TableCell>

      <TableCell className={`${styleTableCell} font-bold w-60`}>
        {feedback?.message || "No message"}
      </TableCell>
    </TableRow>
  );
};

export default RowTable;
