import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
import Loader from "../common/Loader";
import Error from "../common/Error";
import { memo } from "react";
function TableProducts({ products, isLoading, isError }) {
  const styleTableHead = "font-bold px-2 py-5";

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <Table className=" border-2 rounded border-light-green table-fixed">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left  border-b-1 border-light-gray">
          <TableHead className={`${styleTableHead} w-20 `}>image</TableHead>
          <TableHead className={`${styleTableHead} w-32 `}>name</TableHead>
          <TableHead className={`${styleTableHead} w-28`}>Category</TableHead>
          <TableHead className={`${styleTableHead} w-20`}>rating</TableHead>
          <TableHead className={`${styleTableHead} md:w-72 w-40`}>
            description
          </TableHead>
          <TableHead className={`${styleTableHead} w-32`}>
            size/weight
          </TableHead>
          <TableHead className={`${styleTableHead} w-32`}>price</TableHead>
          <TableHead className={`${styleTableHead} w-32`}>stock</TableHead>
          <TableHead className={`${styleTableHead} w-20`}>discount</TableHead>
          <TableHead className={`${styleTableHead} w-20`}>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length > 0 ? (
          products.map((product) => (
            <RowTable key={product.id} product={product} />
          ))
        ) : (
          <TableRow className="text-dark-green font-bold text-center text-xl">
            <TableCell colSpan="10"> ❌ Not Products Yet </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default memo(TableProducts);
