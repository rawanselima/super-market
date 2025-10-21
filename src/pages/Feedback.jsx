import Error from "@/components/common/Error";
import HeaderSection from "@/components/common/HeaderSection";
import Loader from "@/components/common/Loader";
import Pagination from "@/components/common/Pagination";
import TableFeedback from "@/components/feedback/TableFeedback";
import useFetchFeedback from "@/components/feedback/useFetchFeedback";
import usePagination from "@/hooks/usePagination";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Feedback = () => {
  const styleInput =
    "px-5 py-1 mx-1 border-1 border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-green";

  const { page, limit, setPage } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState(
    () => searchParams.get("rating") || "all"
  );

  const { data, isLoading, isError } = useFetchFeedback(
    filterValue,
    page,
    limit
  );

  useEffect(() => {
    setPage("1");
    const newParams = new URLSearchParams(searchParams);
    newParams.set("rating", filterValue);
    newParams.set("page", "1");
    setSearchParams(newParams);
  }, [filterValue]);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main>
      <section className="flex justify-between items-center flex-wrap">
        <HeaderSection smallMargin={true}>Customer Feedback</HeaderSection>

        <form onSubmit={(e) => e.preventDefault()}>
          <select
            name="rating"
            className={`${styleInput} mb-5`}
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option disabled>Filter By Rating</option>
            <option value="all">All Ratings</option>
            <option value="5">5 stars</option>
            <option value="4">Greater than 4 stars</option>
            <option value="3">Greater than 3 stars</option>
            <option value="2">Greater than 2 stars</option>
            <option value="1">Greater than 1 star</option>
          </select>
        </form>
      </section>

      <section className="overflow-x-auto">
        <TableFeedback data={data.filteredFeedback} />
      </section>

      <section className="w-fit mx-auto">
        <Pagination
          setPage={setPage}
          page={page}
          totalPages={data.totalPages}
        />
      </section>
    </main>
  );
};

export default Feedback;
