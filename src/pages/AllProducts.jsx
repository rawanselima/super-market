import React, { memo, useState } from "react";
import TableProducts from "../components/allProducts/TableProducts";
import PopUp from "@/components/common/PopUp";
import AddProduct from "@/components/allProducts/AddProduct";
import TitleDashboardPages from "@/components/common/TitleDashboardPages";
import Pagination from "@/components/common/Pagination";
import useFetchCategory from "@/components/Category/useFetchCategory";
import useFilterProducts from "@/components/allProducts/useFilterProducts";
import useFetchProducts from "@/components/allProducts/useFetchProducts";
import useFetchFilterProducts from "@/components/allProducts/useFetchFilterProducts";
import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";

const AllProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: categories } = useFetchCategory();
  const { category, setCategoryId } = useFilterProducts();

  const {
    data: allProducts,
    isLoading: isLoadingAllProducts,
    isError: isErrorAllProducts,
  } = useFetchProducts();

  const {
    data: filterProducts,
    isLoading: isLoadingFilterProducts,
    isError: isErrorFilterProducts,
  } = useFetchFilterProducts(category);

  const products = category !== "all" ? filterProducts : allProducts;

  const isLoading =
    category !== "all" ? isLoadingFilterProducts : isLoadingAllProducts;

  const isError =
    category !== "all" ? isErrorFilterProducts : isErrorAllProducts;

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main>
      <section className="flex items-center flex-wrap sm:flex-nowrap gap-2">
        <div className="w-[95%]">
          <TitleDashboardPages
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={"All Products"}
            textBtn={"add product"}
          />
        </div>

        <form
          className="inline mb-5 sm:mb-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <select
            name="category"
            value={category}
            className="px-3 py-2 mx-1 border-1 border-light-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-green"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="all">All</option>
            {categories?.map((c) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <section className="overflow-x-auto w-full">
        <TableProducts
          products={products}
          isLoading={isLoading}
          isError={isError}
        />
      </section>

      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Product"}>
        <AddProduct setIsOpen={setIsOpen} />
      </PopUp>

      <section className="mx-auto w-fit">
        <Pagination />
      </section>
    </main>
  );
};

export default memo(AllProducts);
