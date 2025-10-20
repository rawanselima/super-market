import React from "react";
import ProductCard from "../common/ProductCard";
import HeaderSection from "../common/HeaderSection";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { childVariant } from "../../animation/animationVariable";
import useFetchTopSales from "../dashboard/useFetchTopSales";
const TopSales = () => {
  const { data, isLoading, isError } = useFetchTopSales();
  if (isLoading || isError) return;
  return (
    <section>
      <HeaderSection showByMargin={true}> Best Sellers </HeaderSection>
      <motion.div
        className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-4 md:px-0 px-3"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {data &&
          data.map((item) => {
            return (
              <motion.div variants={childVariant} key={item.productId}>
                <ProductCard product={item} />
              </motion.div>
            );
          })}
      </motion.div>
    </section>
  );
};

export default TopSales;
