import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
import useFetchUserOrders from "./useFetchUserOrders";
import Loader from "../common/Loader";
import Error from "../common/Error";

function TableReport({data}) {
  const styleTableHead = "font-bold px-2 py-5";

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
          <TableHead className={`${styleTableHead} w-28`}> Status </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.length > 0 ? (
          data.map((ele) => {
            return <RowTable data={ele} key={ele.id} />;
          })
        ) : (
          <TableRow className="text-dark-green font-bold text-center text-xl">
            <TableCell colSpan="6"> ❌ Not Orders Yet </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default TableReport;
