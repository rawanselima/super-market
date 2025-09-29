import { fetchProducts } from "@/services/APIProducts";
import { useQuery } from "@tanstack/react-query";
import useFetchCategory from "../Category/useFetchCategory";
export default function useFetchProducts(categoryId, page, limit, searchValue) {
  const {
    data: queryData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", categoryId, page, limit, searchValue],
    queryFn: () => fetchProducts(categoryId, page, limit, searchValue),
  });

  const { data: categories = [] } = useFetchCategory();

  const products = queryData?.data || [];
  const totalPages = queryData?.totalPages || 1;

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

  return { data, isLoading, isError, totalPages };
}
