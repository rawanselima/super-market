import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
const TableCategory = () => {
  const styleTableHead = "font-bold text-lg px-3 py-5";

  return (
    <Table className=" border-2 rounded border-light-green">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left border-b-1 border-light-gray">
          <TableHead className={`${styleTableHead} w-28`}>image</TableHead>
          <TableHead className={`${styleTableHead}`}>name</TableHead>
          <TableHead className={`${styleTableHead} sm:w-auto  w-20`}>
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <RowTable />
        <RowTable />
        <RowTable />
      </TableBody>
    </Table>
  );
};

export default TableCategory;
