import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
function TableShipping() {
  const styleTableHead = "font-bold px-2 py-5";
  return (
    <Table className=" border-2 rounded border-light-green table-fixed">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left border-b-1 border-light-gray">
          <TableHead className={`${styleTableHead} w-40`}>Government</TableHead>
          <TableHead className={`${styleTableHead} w-40 `}>Price</TableHead>
          <TableHead className={`${styleTableHead} w-40`}> action </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <RowTable />
        <RowTable />
        <RowTable />
        <RowTable />
      </TableBody>
    </Table>
  );
}

export default TableShipping;
