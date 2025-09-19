import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
function TableFeedback() {
  const styleTableHead = "font-bold px-2 py-5";
  return (
    <Table className=" border-2 rounded border-light-green table-fixed">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left border-b-1 border-light-gray">
          <TableHead className={`${styleTableHead} w-20 `}>
            image
          </TableHead>
          <TableHead className={`${styleTableHead} w-50 `}>
            product name
          </TableHead>
          <TableHead className={`${styleTableHead} w-36`}>
            customer name
          </TableHead>
          <TableHead className={`${styleTableHead} w-40 `}>
            phone number
          </TableHead>
          <TableHead className={`${styleTableHead} w-36`}>rating</TableHead>
          <TableHead className={`${styleTableHead} w-60`}>feedback</TableHead>
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

export default TableFeedback;
