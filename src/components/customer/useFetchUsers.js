import { users } from "@/services/APIUsers";
import { useQuery } from "@tanstack/react-query";

export default function useFetchUsers(searchValue, page, limit) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", page, limit, searchValue],
    queryFn: async () => {
      const { data: allUsers, totalPages } = await users({
        searchValue,
        page,
        limit,
      });
      const customers = allUsers.filter((ele) => ele.role !== "admin") || [];

      return { customers, totalPages };
    },
  });

  return { data, isLoading, isError };
}
