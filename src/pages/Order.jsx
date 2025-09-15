import TableProducts from "@/components/allProducts/TableProducts";
import AddCategory from "@/components/Category/AddCategory";
import TableCategory from "@/components/Category/TableCategory";
import HeaderSection from "@/components/common/HeaderSection";
import TitleDashboardPages from "@/components/common/TitleDashboardPages";
import TableOrders from "@/components/order/TableOrder";
import React, { useState } from "react";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const styleInput =
    " px-3 py-1 mx-1 border-1 border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-green";

  return (
    <main>
      <section className="flex flex-wrap justify-between items-center">
        <HeaderSection smallMargin={true} > All Orders </HeaderSection>
        <form className="mb-3 sm:mb-0">
          <input
            type="search"
            placeholder="search by name"
            className={`${styleInput} w-72 sm:mb-0 mb-2`}
          />
          <select name="category" required className={styleInput}>
            <option value="" disabled>
              Filter By Status
            </option>
            <option value="pending">pending</option>
            <option value="processed">processed</option>
            <option value="shipping"> shipping </option>
            <option value="received"> received</option>
            <option value="cancel">cancel</option>
          </select>
        </form>
      </section>
      <section className="overflow-x-auto w-full">
        <TableOrders />
      </section>
    </main>
  );
};

export default Category;
