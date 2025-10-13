import { fetchAllOrders } from "@/services/APIOrders";
import { useQuery } from "@tanstack/react-query";

export default function useFetchAllOrders() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allOrders"],
    queryFn: fetchAllOrders,
  });

  return { data, isLoading, isError };
}
