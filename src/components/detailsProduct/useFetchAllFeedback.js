import { allFeedback } from "@/services/APIFeedback";
import { useQuery } from "@tanstack/react-query";

export default function useFetchAllFeedback() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allFeedback"],
    queryFn: allFeedback,
  });

  return { data, isLoading, isError };
}
