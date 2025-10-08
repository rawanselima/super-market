import { fetchOrders } from "@/services/APIOrders";
import { useQuery } from "@tanstack/react-query";

export default function useFetchOrders(status, page, limit, searchValue) {
  const {
    data: results,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders", status, page, limit, searchValue],
    queryFn: () => fetchOrders(status, page, limit, searchValue),
  });

  const orders = results?.data || [];
  const totalPages = results?.totalPages || 1;

  return { orders, totalPages, isLoading, isError };
}
