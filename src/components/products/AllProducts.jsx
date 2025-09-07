import React from "react";
import ProductCard from "../common/ProductCard";
import { motion } from "framer-motion";
import {
  containerVariant,
  childVariant,
} from "../../animation/animationVariable";
const AllProducts = () => {
  return (
    <motion.div
      className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-5"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={childVariant}>
        <ProductCard />
      </motion.div>
      <motion.div variants={childVariant}>
        <ProductCard />
      </motion.div>
      <motion.div variants={childVariant}>
        <ProductCard />
      </motion.div>
      <motion.div variants={childVariant}>
        <ProductCard />
      </motion.div>
      <motion.div variants={childVariant}>
        <ProductCard />
      </motion.div>
      <motion.div variants={childVariant}>
        <ProductCard />
      </motion.div>
      <motion.div variants={childVariant}>
        <ProductCard />
      </motion.div>
      <motion.div variants={childVariant}>
        <ProductCard />
      </motion.div>
    </motion.div>
  );
};

export default AllProducts;
