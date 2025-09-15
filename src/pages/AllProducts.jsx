import React, { useState } from "react";
import TableProducts from "../components/allProducts/TableProducts";
import HeaderSection from "@/components/common/HeaderSection";
import PopUp from "@/components/common/PopUp";
import AddProduct from "@/components/allProducts/AddProduct";
import TitleDashboardPages from "@/components/common/TitleDashboardPages";
const AllProducts = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <section className="flex  items-center flex-wrap sm:flex-nowrap gap-2">
        <div className="w-[95%]">
          <TitleDashboardPages
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={"All Products"}
            textBtn={"add product"}
          />
        </div>

        <form className="inline mb-5 sm:mb-0">
          <select
            name="category"
            className=" px-3 py-2 mx-1 border-1 border-light-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-green"
          >
            <option value="" disabled>
              Filter By Category
            </option>
            <option value="Milk&cheese">Milk&cheese</option>
            <option value="snack">snack</option>
            <option value="vegetables"> vegetables </option>
          </select>
        </form>
      </section>
      <section className="overflow-x-auto w-full">
        <TableProducts />
      </section>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Product"}>
        <AddProduct />
      </PopUp>
    </main>
  );
};

export default AllProducts;
