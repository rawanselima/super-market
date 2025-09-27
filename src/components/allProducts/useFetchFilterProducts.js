import {
  fetchProducts,
  filterProductsByCategory,
} from "@/services/APIProducts";
import { useQuery } from "@tanstack/react-query";
import useFetchCategory from "../Category/useFetchCategory";

export default function useFetchFilterProducts(category) {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["filterProducts", category],
    queryFn: () => filterProductsByCategory(category),
  });

  const { data: categories = [] } = useFetchCategory();

  const data = products.map((p) => {
    const category = categories.find((c) => c.id === p.categoryId);
    return {
      ...p,
      category: {
        name: category?.name,
        avatar: category?.avatar,
      },
    };
  });

  return { data, isLoading, isError };
}
