import { allFeedback, fetchFeedback } from "@/services/APIFeedback";
import { useQuery } from "@tanstack/react-query";

export default function useFetchFeedback(filterValue, page, limit) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["feedback", filterValue, page],
    queryFn: async () => {
      const feedbacks = await fetchFeedback({ page, limit });
      const allDataFeedback = await allFeedback();

      let filteredFeedback = feedbacks;
      let allFilteredFeedback = allDataFeedback;

      if (filterValue && filterValue !== "all") {
        filteredFeedback = feedbacks.filter((ele) => {
          return +ele.rating >= +filterValue;
        });

        allFilteredFeedback = allDataFeedback.filter((ele) => {
          return +ele.rating >= +filterValue;
        });
      }

      const totalPages = Math.ceil(allFilteredFeedback.length / limit) || 1;

      return { filteredFeedback, totalPages };
    },
  });

  return { data, isLoading, isError };
}
