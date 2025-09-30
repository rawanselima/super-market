import React, { useState } from "react";
import Sidebar from "@/components/products/Sidebar";
import FilterProducts from "@/components/products/FilterProducts";
import SearchProduct from "@/components/products/SearchProduct";
import AllProducts from "@/components/products/AllProducts";
import Pagination from "@/components/common/Pagination";
import HeaderProducts from "@/components/products/HeaderProducts";
import { motion } from "framer-motion";
import { containerVariant } from "@/animation/animationVariable";
import useFetchProducts from "@/components/allProducts/useFetchProducts";
import usePagination from "@/hooks/usePagination";
import useFilterProducts from "@/components/allProducts/useFilterProducts";
import useFetchCategory from "@/components/Category/useFetchCategory";
import useSearch from "@/hooks/useSearch";
import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";
const Products = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const {
    data: categories,
    isLoading: isLoadingCategory,
    isError: isErrorCategory,
  } = useFetchCategory();
  const { page, limit, setPage } = usePagination(1, 8);
  const { setSearchValue, searchValue } = useSearch();
  const { categoryId, setCategoryId } = useFilterProducts(setPage);
  const { data, isLoading, isError, totalPages } = useFetchProducts(
    categoryId,
    page,
    limit,
    searchValue
  );

  if (isLoadingCategory) return <Loader />;
  if (isErrorCategory) return <Error />;

  return (
    <main className="grid md:grid-cols-12 grid-cols-1 gap-4 mt-10">
      <HeaderProducts />
      <motion.div
        className="md:col-span-3 md:block hidden"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <Sidebar
          showSidebar={showSidebar}
          categories={categories}
          setCategoryId={setCategoryId}
          categoryId={categoryId}
          isLoading={isLoadingCategory}
          isError={isErrorCategory}
        />
      </motion.div>
      <section className="col-span-9 p-3">
        <div className="flex items-center justify-between flex-wrap">
          <h3 className="text-dark-gray font-bold text-sm text-left mb-3 flex items-center">
            We found
            <span className="text-green mx-1">
              {+data.length * +totalPages}
            </span>
            items for you!
          </h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <SearchProduct
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <FilterProducts
              categoryId={categoryId}
              setCategoryId={setCategoryId}
              categories={categories}
            />
          </form>
        </div>
        <AllProducts products={data} isLoading={isLoading} isError={isError} />
        {totalPages > 1 && (
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        )}
      </section>
    </main>
  );
};

export default Products;
