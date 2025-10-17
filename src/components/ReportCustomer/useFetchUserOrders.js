import { userOrders } from "@/services/APIUsers";
import { useQuery } from "@tanstack/react-query";

export default function useFetchUserOrders(userId) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userOrders", userId],
    queryFn: () => userOrders(userId),
  });

  return { data, isLoading, isError };
}
