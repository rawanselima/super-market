import React from "react";
import ProductCard from "../common/ProductCard";
import { motion } from "framer-motion";
import {
  containerVariant,
  childVariant,
} from "../../animation/animationVariable";
import Loader from "../common/Loader";
const AllProducts = ({ products, isLoading, isError }) => {
  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <motion.div
      className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-5"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {products && products.length > 0 ? (
        products.map((product) => {
          return (
            <motion.div variants={childVariant} key={product.id}>
              <ProductCard product={product} />
            </motion.div>
          );
        })
      ) : (
        <p className="font-bold text-3xl text-center mt-5 w-full col-span-12">
          ❌ Not Product Yet
        </p>
      )}
    </motion.div>
  );
};

export default AllProducts;
