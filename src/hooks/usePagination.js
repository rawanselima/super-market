import { useSearchParams } from "react-router-dom";
export default function usePagination(defaultPage = 1, defaultLimit = 10) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page")) || defaultPage;
  const limit = parseInt(searchParams.get("limit")) || defaultLimit;

  const setPage = (newPage) => {
    searchParams.set("page", newPage);
    searchParams.set("limit", limit);
    setSearchParams(searchParams);
  };

  const setLimit = (newLimit) => {
    searchParams.set("limit", newLimit);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return { page, limit, setPage, setLimit };
}
