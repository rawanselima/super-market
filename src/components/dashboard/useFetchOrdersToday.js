import { fetchAllOrders } from "@/services/APIOrders";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

export default function useFetchOrdersToday() {
  const currentDate = new Date(Date.now());
  const dateToday = format(currentDate, "yyyy-MM-dd");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["orderToday", dateToday],

    queryFn: async () => {
      const allOrders = await fetchAllOrders();
      const ordersToday = await allOrders.filter((order) =>
        order.createdAt?.startsWith(dateToday)
      );
      console.log(ordersToday);
      return { ordersToday };
    },
    staleTime: 0,
  });

  return { data, isLoading, isError };
}
