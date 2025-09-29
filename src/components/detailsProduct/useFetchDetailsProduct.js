import { fetchProductsDetails } from "@/services/APIProducts";
import { useQuery } from "@tanstack/react-query";

export default function useFetchDetailsProduct(id) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["detailsProduct", id],
    queryFn: () => fetchProductsDetails(id),
  });

  return { data, isLoading, isError };
}
