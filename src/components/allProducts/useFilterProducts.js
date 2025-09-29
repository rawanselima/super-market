import { useSearchParams } from "react-router-dom";

export default function useFilterProducts(setPage) {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryId = searchParams.get("categoryId") || "all";

  const setCategoryId = (newCategory) => {

    setPage(1);

    const newParams = new URLSearchParams(searchParams);
    if (newCategory && newCategory !== "all") {
      newParams.set("categoryId", newCategory);
    } else {
      newParams.set("categoryId", "all");
    }
    newParams.set("page", 1);
    setSearchParams(newParams);
  };

  return { categoryId, setCategoryId };
}
