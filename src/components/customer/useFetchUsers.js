import { users } from "@/services/APIUsers";
import { useQuery } from "@tanstack/react-query";

export default function useFetchUsers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const allUsers = await users();
      const customers = allUsers.filter((ele) => ele.role !== "admin");
      return customers;
    },
  });

  return { data, isLoading, isError };
}
