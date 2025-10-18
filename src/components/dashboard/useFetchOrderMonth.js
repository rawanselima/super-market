import { useQuery } from "@tanstack/react-query";
import { format, subMonths } from "date-fns";

export default function useFetchOrderMonth(date, allOrders) {
  const currentDate = new Date(date);
  const lastDate = subMonths(currentDate, 1);

  const currentMonthAndYear = format(currentDate, "yyyy-MM");
  const lastMonthAndYear = format(lastDate, "yyyy-MM");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["orderMonth", currentMonthAndYear],

    queryFn: async () => {
      const nowMonth = allOrders.filter((order) => {
        const orderDate = format(order.date, "yyyy-MM");
        return orderDate === currentMonthAndYear && order.status !== "cancel";
      });

      const lastMonth = allOrders.filter((order) => {
        const orderDate = format(order.date, "yyyy-MM");
        return orderDate === lastMonthAndYear && order.status !== "cancel";
      });

      const nowMonthOrders = nowMonth.length;
      const lastMonthOrders = lastMonth.length;

      const percentageForSales =
        lastMonthOrders === 0
          ? nowMonthOrders > 0
            ? 100
            : 0
          : ((nowMonthOrders - lastMonthOrders) / lastMonthOrders) * 100;

      return {
        nowMonth,
        lastMonth,
        percentageForSales,
        nowMonthOrders,
        lastMonthOrders,
      };
    },
    staleTime: 0,
  });

  return { data, isLoading, isError };
}
