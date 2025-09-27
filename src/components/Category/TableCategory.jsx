import React, { memo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
import useFetchCategory from "./useFetchCategory";
import Loader from "../common/Loader";
import Error from "../common/Error";
const TableCategory = () => {
  const styleTableHead = "font-bold text-lg px-3 py-5";
  const { isPending, isError, data } = useFetchCategory();

  if (isPending) return <Loader />;
  if (isError) return <Error />;

  return (
    <Table className=" border-2 rounded border-light-green">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left border-b-1 border-light-gray">
          <TableHead className={`${styleTableHead} w-28`}>image</TableHead>
          <TableHead className={`${styleTableHead} text-center `}>
            name
          </TableHead>
          <TableHead
            className={`${styleTableHead} sm:w-auto  w-20 text-center `}
          >
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((category) => (
          <RowTable key={category.id} category={category} />
        ))}
      </TableBody>
    </Table>
  );
};

export default memo(TableCategory);
