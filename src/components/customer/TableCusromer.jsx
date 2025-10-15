import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
function TableCustomer({ data }) {
  const styleTableHead = "font-bold px-2 py-5";
  return (
    <Table className=" border-2 rounded border-light-green table-fixed">
      <TableHeader className="bg-light-green">
        <TableRow className="uppercase font-bold text-dark-green text-left border-b-1 border-light-gray">
          <TableHead className={`${styleTableHead} w-36`}>name</TableHead>
          <TableHead className={`${styleTableHead} w-40 `}>
            phone number
          </TableHead>
          <TableHead className={`${styleTableHead} w-60`}>email</TableHead>
          <TableHead className={`${styleTableHead} w-48`}>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((user) => {
            return <RowTable user={user} key={user.id} />;
          })}
      </TableBody>
    </Table>
  );
}

export default TableCustomer;
