import Error from "@/components/common/Error";
import HeaderSection from "@/components/common/HeaderSection";
import Loader from "@/components/common/Loader";
import Pagination from "@/components/common/Pagination";
import TableOrders from "@/components/order/TableOrder";
import useFetchOrders from "@/components/order/useFetchOrders";
import useFilterOrders from "@/components/order/useFilterOrders";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useDebounce } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
const Order = () => {
  const styleInput =
    " px-3 py-1 mx-1 border-1 border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-green";
  const { page, limit, setPage } = usePagination();
  const { status, setStatus } = useFilterOrders(setPage);
  const { searchValue, setSearchValue } = useSearch();
  const [textSearch, setTextSearch] = useState(searchValue);
  const { orders, totalPages, isLoading, isError } = useFetchOrders(
    status,
    page,
    limit,
    searchValue
  );

  const debouncedText = useDebounce(textSearch, 1000);

  useEffect(() => {
    if (debouncedText.trim() === "") {
      setSearchValue("all");
    } else {
      setSearchValue(debouncedText);
    }
  }, [debouncedText]);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main>
      <section className="flex flex-wrap justify-between items-center">
        <HeaderSection smallMargin={true}> All Orders </HeaderSection>
        <form className="mb-3 sm:mb-0" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="search by name"
            className={`${styleInput} w-72 sm:mb-0 mb-2`}
            defaultValue={textSearch}
            onChange={(e) => setTextSearch(e.target.value.trim())}
          />
          <select
            name="status"
            required
            className={styleInput}
            defaultValue={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="" disabled>
              Filter By Status
            </option>
            <option value="all">all</option>
            <option value="pending">pending</option>
            <option value="processing">processing</option>
            <option value="shipping"> shipping </option>
            <option value="received"> received</option>
            <option value="cancel">cancel</option>
          </select>
        </form>
      </section>
      <section className="overflow-x-auto w-full">
        <TableOrders orders={orders} />
      </section>
      <section className="mx-auto w-fit">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </section>
    </main>
  );
};

export default Order;
