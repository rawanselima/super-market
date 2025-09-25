import { fetchCategoryById } from "@/services/APICategory";
import { useQuery } from "@tanstack/react-query";

export default function useCategoryId(categoryId) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categoryId", categoryId],
    queryFn: () => fetchCategoryById(categoryId),
  });
  return { data, isLoading, isError };
}
