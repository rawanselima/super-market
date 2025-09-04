import React from "react";
import ProductCard from "../common/ProductCard";
import HeaderSection from "../common/HeaderSection";

const TopSales = () => {
  return (
    <section>
      <HeaderSection> Best Sellers </HeaderSection>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-4 md:px-0 px-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default TopSales;
