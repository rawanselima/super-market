import { useQuery } from "@tanstack/react-query";
import { format, subMonths } from "date-fns";

export default function useFetchOrderMonth(date ,allOrders) {
  const currentDate = new Date(date);
  const lastMonth = subMonths(currentDate, 1);

  const currentMonthAndYear = format(currentDate, "yyyy-MM");
  const lastMonthAndYear = format(lastMonth, "yyyy-MM");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["orderMonth", { month: currentMonthAndYear }],

    queryFn: async () => {
      const nowMonth = allOrders.filter((order) =>
        order.createdAt?.startsWith(currentMonthAndYear)
      );

      const lastMonth = allOrders.filter((order) =>
        order.createdAt?.startsWith(lastMonthAndYear)
      );

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
