import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
import useFetchTopSales from "./useFetchTopSales";
import Loader from "../common/Loader";
import Error from "../common/Error";

function TableTopSales() {
  const styleTableHead = "font-bold px-2 py-5 text-lg";
  const { data, isLoading, isError } = useFetchTopSales();

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  console.log(data);

  return (
    <Table className="border-2 rounded border-light-green table-fixed">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left border-b-1 border-light-gray">
          <TableHead className={`${styleTableHead} w-50 `}>
            Product name
          </TableHead>
          <TableHead className={`${styleTableHead} w-32 `}>Category</TableHead>
          <TableHead className={`${styleTableHead} w-36`}>Price</TableHead>
          <TableHead className={`${styleTableHead} w-40 `}>Orders</TableHead>
          <TableHead className={`${styleTableHead} w-36`}>Total</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.map((item) => (
          <RowTable key={item.id} item={item} />
        ))}
      </TableBody>
    </Table>
  );
}

export default TableTopSales;
