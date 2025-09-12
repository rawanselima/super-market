import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
function TableProducts() {
  const styleTableHead = "font-bold px-2 py-5";
  return (
    <Table className=" border-2 rounded border-light-green table-fixed">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left">
          <TableHead className={`${styleTableHead} w-20 `}>image</TableHead>
          <TableHead className={`${styleTableHead}  md:w-52 w-32 `}>
            name
          </TableHead>
          <TableHead className={`${styleTableHead} w-28`}>Category</TableHead>
          <TableHead className={`${styleTableHead} md:w-96 w-60`}>
            description
          </TableHead>
          <TableHead className={`${styleTableHead} w-20`}>price</TableHead>
          <TableHead className={`${styleTableHead} w-20`}>stock</TableHead>
          <TableHead className={`${styleTableHead} w-32`}>
            size/weight
          </TableHead>
          <TableHead className={`${styleTableHead} w-20`}>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <RowTable />
        <RowTable />
        <RowTable />
      </TableBody>
    </Table>
  );
}

export default TableProducts;
