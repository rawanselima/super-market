import { useSearchParams } from "react-router-dom";

export default function useSearch(setPage) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "all";

  const setSearchValue = (newSearchValue) => {
    if (setPage) setPage(1);
    const updatedParams = new URLSearchParams(searchParams);
    if (newSearchValue !== "all") {
      updatedParams.set("search", newSearchValue);
    } else {
      updatedParams.set("search", "all");
    }
    updatedParams.set("page", 1);

    setSearchParams(updatedParams, { replace: false });
  };

  return { setSearchValue, searchValue };
}
