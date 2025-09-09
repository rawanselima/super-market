import React from "react";
import Slider from "../components/detailsProduct/Slider";
import Description from "../components/detailsProduct/Description";
import RelatedProduct from "../components/detailsProduct/RelatedProduct";
import HeaderProducts from "../components/products/HeaderProducts";
const DetailsProduct = () => {
  return (
    <main>
      <HeaderProducts />
      <div className="grid grid-cols-12  xl:gap-10 my-10 justify-between">
        <section className="xl:col-span-5 col-span-12 px-3 ">
          <Slider />
        </section>
        <section className="xl:col-span-7 col-span-12 px-3 ">
          <Description />
        </section>
      </div>

      <RelatedProduct />
    </main>
  );
};

export default DetailsProduct;
