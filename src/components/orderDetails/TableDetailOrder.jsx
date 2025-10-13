import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";

function TableDetailsOrder({ data }) {
  const styleTableHead = "font-bold px-2 py-5";

  return (
    <Table className=" border-2 rounded border-light-green table-fixed">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left border-b-1 border-light-gray">
          <TableHead className={`${styleTableHead} w-24`}>
            Product Image
          </TableHead>
          <TableHead className={`${styleTableHead} w-48 `}>
            Product Name
          </TableHead>
          <TableHead className={`${styleTableHead} w-20`}> Category </TableHead>
          <TableHead className={`${styleTableHead} w-24`}> Price </TableHead>
          <TableHead className={`${styleTableHead} w-24`}>
            size/weight
          </TableHead>
          <TableHead className={`${styleTableHead} w-20`}> Quantity </TableHead>
          <TableHead className={`${styleTableHead} w-24`}>
            total price
          </TableHead>
          <TableHead className={`${styleTableHead} w-28`}>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.order.map((ele) => {
            return (
              <RowTable
                order={ele}
                status={data.status}
                date={data.date}
                key={ele.id}
              />
            );
          })}
      </TableBody>
    </Table>
  );
}

export default TableDetailsOrder;
