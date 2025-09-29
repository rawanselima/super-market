import { useSearchParams } from "react-router-dom";

export default function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "all";

  const setSearchValue = (newSearchValue) => {
    if (newSearchValue !== "all") {
      searchParams.set("search", newSearchValue);
      setSearchParams(searchParams);
    } else {
      searchParams.set("search", "all");
      setSearchParams(searchParams);
    }
  };

  return { setSearchValue, searchValue };
}
