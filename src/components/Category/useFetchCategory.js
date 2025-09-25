import { fetchCategories } from "@/services/APICategory";
import { useQuery } from "@tanstack/react-query";

export default function useFetchCategory() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["allCategories"],
    queryFn:  fetchCategories,
  });
  console.log(data);
  return { isPending, isError, data };
}
