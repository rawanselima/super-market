import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowTable from "./RowTable";
import { useLocalStorage } from "@uidotdev/usehooks";
import governments from "./governments";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addShipping } from "@/redux/reducerShipping";
function TableShipping() {
  const styleTableHead = "font-bold px-2 py-5";
  const [shipping] = useLocalStorage("shipping", governments);
  const shippingState = useSelector((state) => state.shippingStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (shippingState.length === 0 && shipping) {
      dispatch(addShipping(shipping));
    }
  }, [dispatch, shipping, shippingState]);

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
        {shippingState &&
          shippingState.map((item) => {
            return <RowTable shipping={item} key={item.id} />;
          })}
      </TableBody>
    </Table>
  );
}

export default TableShipping;
