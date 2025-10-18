import { fetchAllProducts } from "@/services/APIProducts";
import { useQuery } from "@tanstack/react-query";

export default function useFetchAllProducts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });

  return { data, isLoading, isError };
}
