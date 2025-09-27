import { useSearchParams } from "react-router-dom";

export default function useFilterProducts() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  const setCategoryId = (newCategory) => {
    if (newCategory && newCategory !== "all") {
      searchParams.set("category", newCategory);
    } else {
      searchParams.set("category", "all");
    }
    setSearchParams(searchParams);
  };
  return { category, setCategoryId };
}
