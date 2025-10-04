import { useSearchParams } from "react-router-dom";

export default function useFilterOrders(setPage) {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "all";

  const setStatus = (newStatus) => {
    setPage(1);
    const updatedParams = new URLSearchParams(searchParams);

    if (newStatus && newStatus !== "all") {
      updatedParams.set("status", newStatus);
    } else {
      updatedParams.set("status", "all");
    }
    updatedParams.set("page", 1);

    setSearchParams(updatedParams, { replace: false });
  };

  return { setStatus, status };
}
