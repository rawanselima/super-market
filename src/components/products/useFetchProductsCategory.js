import { fetchProductsCategory } from "@/services/APIProducts";
import { useQuery } from "@tanstack/react-query";
import useFetchCategory from "../Category/useFetchCategory";

export default function useFetchProductsCategory(categoryId) {
  const {
    data: queryData = [], // ✅ نخليها افتراضيًا array
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productsCategory", categoryId],
    queryFn: () => fetchProductsCategory(categoryId),
  });

  const { data: categories = [] } = useFetchCategory();

  const data = queryData.map((p) => {
    const category = categories.find((c) => c.id === p.categoryId);
    return {
      ...p,
      category: {
        name: category?.name ?? "Unknown",
        avatar: category?.avatar ?? null,
      },
    };
  });

  return { data, isLoading, isError };
}
