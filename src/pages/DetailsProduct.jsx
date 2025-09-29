import React from "react";
import Slider from "../components/detailsProduct/Slider";
import Description from "../components/detailsProduct/Description";
import RelatedProduct from "../components/detailsProduct/RelatedProduct";
import HeaderProducts from "../components/products/HeaderProducts";
import { motion } from "framer-motion";
import { containerVariant } from "@/animation/animationVariable";
import { useParams } from "react-router-dom";
import useFetchDetailsProduct from "@/components/detailsProduct/useFetchDetailsProduct";
import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";
const DetailsProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchDetailsProduct(id);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main>
      <HeaderProducts />
      <div className="grid grid-cols-12  xl:gap-10 my-10 justify-between">
        <section className="xl:col-span-5 col-span-12 px-3 ">
          <Slider productImages={data.avatar} />
        </section>
        <section className="xl:col-span-7 col-span-12 px-3 ">
          <Description product={data} isLoading={isLoading} isError={isError} />
        </section>
      </div>

      <motion.section
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
      >
        <RelatedProduct />
      </motion.section>
    </main>
  );
};

export default DetailsProduct;
