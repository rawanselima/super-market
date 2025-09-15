import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
import RowTest from "../orderDetails/RowTable";

//    كل الي معمول ده بس علاشن يوضح الفكره و منساش

function TableReport() {
  const styleTableHead = "font-bold px-2 py-5";
  const styleTableCell = "p-2 text-sm";
  return (
    <Table className=" border-2 rounded border-light-green table-fixed">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left border-b-1 border-light-gray">
          <TableHead className={`${styleTableHead} w-20`}>Order Id</TableHead>
          <TableHead className={`${styleTableHead} w-48 `}>
            Product Name
          </TableHead>
          <TableHead className={`${styleTableHead} w-24`}> Price </TableHead>
          <TableHead className={`${styleTableHead} w-24`}>
            size/weight
          </TableHead>
          <TableHead className={`${styleTableHead} w-20`}> Quantity </TableHead>
          <TableHead className={`${styleTableHead} w-24`}>
            total price
          </TableHead>
          <TableHead className={`${styleTableHead} w-28`}>Date</TableHead>
          <TableHead className={`${styleTableHead} w-24`}> Status </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <RowTable /> {/* ده الاساسي الي هنشتغل بيه */}
        <TableRow className="b-light-green border-b-1 border-light-gray">
          <TableCell className={`${styleTableCell} w-48`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim
            animi quam
          </TableCell>
          <TableCell className={`${styleTableCell} font-bold w-24 px-3`}>
            $230
          </TableCell>
          <TableCell
            className={`${styleTableCell} w-24 px-3 text-green font-bold`}
          >
            20g
          </TableCell>
          <TableCell className={`${styleTableCell} text-lg w-20`}>2</TableCell>
          <TableCell className={`${styleTableCell} text-green font-bold w-24`}>
            $6200
          </TableCell>
          <TableCell className={`${styleTableCell} w-28`}>10/10/2025</TableCell>
        </TableRow>
        <TableRow className="b-light-green border-b-1 border-light-gray">
          <TableCell className={`${styleTableCell} w-48`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim
            animi quam
          </TableCell>
          <TableCell className={`${styleTableCell} font-bold w-24 px-3`}>
            $230
          </TableCell>
          <TableCell
            className={`${styleTableCell} w-24 px-3 text-green font-bold`}
          >
            20g
          </TableCell>
          <TableCell className={`${styleTableCell} text-lg w-20`}>2</TableCell>
          <TableCell className={`${styleTableCell} text-green font-bold w-24`}>
            $6200
          </TableCell>
          <TableCell className={`${styleTableCell} w-28`}>10/10/2025</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TableReport;
