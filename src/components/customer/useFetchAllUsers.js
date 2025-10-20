import { allUsers } from "@/services/APIUsers";
import { useQuery } from "@tanstack/react-query";

export default function useFetchAllUsers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allUsers"],
    queryFn: allUsers,
  });

  return { data, isLoading, isError };
}
