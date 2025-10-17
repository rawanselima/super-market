import Error from "@/components/common/Error";
import HeaderSection from "@/components/common/HeaderSection";
import Loader from "@/components/common/Loader";
import Pagination from "@/components/common/Pagination";
import TableCustomer from "@/components/customer/TableCusromer";
import useFetchUsers from "@/components/customer/useFetchUsers";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useDebounce } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
const Customer = () => {
  const { page, limit, setPage } = usePagination();
  const { searchValue, setSearchValue } = useSearch(setPage);
  const [textSearch, setTextSearch] = useState(searchValue);
  const debouncedText = useDebounce(textSearch, 1000);
  const { data, isLoading, isError } = useFetchUsers(searchValue, page, limit);

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
      <section className="flex justify-between items-center flex-wrap">
        <HeaderSection smallMargin={true}> All Customers </HeaderSection>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Search by name"
            className="px-3 py-1 mx-1 border-1 border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-green w-72 sm:mb-0 mb-2 "
            defaultValue={searchValue}
            onChange={(e) => setTextSearch(e.target.value.trim())}
          />
        </form>
      </section>
      <section>
        <TableCustomer data={data?.customers} />
      </section>

      <section className="mx-auto w-fit">
        <Pagination
          setPage={setPage}
          page={page}
          totalPages={data?.totalPages}
        />
      </section>
    </main>
  );
};

export default Customer;
