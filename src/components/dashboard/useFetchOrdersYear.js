import { useQuery } from "@tanstack/react-query";
import { getMonth, getYear } from "date-fns";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const currentYear = getYear(Date.now());
export default function useFetchOrdersYear(allOrders) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ordersYear", allOrders],
    queryFn: async () => {
      let ordersYear = Array.from({ length: 12 }, (_, i) => ({
        month: MONTH_NAMES[i],
        orders: 0,
        totalSales: 0,
      }));

      allOrders.forEach((order) => {
        const orderYear = getYear(order.date);
        const dateOrder = getMonth(order.date);
        if (orderYear === currentYear && order.status !== "cancel") {
          ordersYear[dateOrder].orders += 1;
          ordersYear[dateOrder].totalSales += Number(order.totalPrice || 0);
        }
      });

      return ordersYear;
    },
  });

  return { data, isLoading, isError };
}
