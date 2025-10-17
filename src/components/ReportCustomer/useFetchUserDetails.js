import { userDetails } from "@/services/APIUsers";
import { useQuery } from "@tanstack/react-query";

export default function useFetchUserDetails(userId) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => userDetails(userId),
  });

  return { data, isLoading, isError };
}
