import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

export default function useFetchOrdersToday(allOrders) {
  const currentDate = new Date(Date.now());

  const dateToday = format(currentDate, "yyyy-MM-dd");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orderToday", dateToday],

    queryFn: async () => {
      const ordersToday = await allOrders.filter((order) => {
        const date = new Date(order.date);
        const orderDate = format(date, "yyyy-MM-dd");
        return orderDate === dateToday;
      });
      return { ordersToday };
    },
    staleTime: 0,
  });

  return { data, isLoading, isError };
}
