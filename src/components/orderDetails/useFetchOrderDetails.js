import { fetchDetailsOrder } from "@/services/APIOrders";
import { useQuery } from "@tanstack/react-query";

export default function useFetchOrderDetails(id) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orderDetails"],
    queryFn: () => fetchDetailsOrder(id),
  });

  return { data, isLoading, isError };
}
