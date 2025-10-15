import Error from "@/components/common/Error";
import HeaderSection from "@/components/common/HeaderSection";
import Loader from "@/components/common/Loader";
import Pagination from "@/components/common/Pagination";
import TableCustomer from "@/components/customer/TableCusromer";
import useFetchUsers from "@/components/customer/useFetchUsers";
import React from "react";

const Customer = () => {
  const { data, isLoading, isError } = useFetchUsers();
  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main>
      <section className="flex justify-between items-center flex-wrap">
        <HeaderSection smallMargin={true}> All Customers </HeaderSection>
        <form>
          <input
            type="search"
            placeholder="Search by name"
            className="px-3 py-1 mx-1 border-1 border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-green w-72 sm:mb-0 mb-2 "
          />
        </form>
      </section>
      <section>
        <TableCustomer data={data} />
      </section>

      <section className="mx-auto w-fit">
        <Pagination />
      </section>
    </main>
  );
};

export default Customer;
