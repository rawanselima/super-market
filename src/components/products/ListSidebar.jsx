import React from "react";
import { motion } from "framer-motion";
import useFetchProductsCategory from "./useFetchProductsCategory";
import { hoverVariant, tabVariant } from "@/animation/animationVariable";

const ListSidebar = ({ category, setCategoryId, categoryId }) => {
  const styleList = "p-2 flex items-center flex-wrap";
  const { data } = useFetchProductsCategory(category.id);

  return (
    <motion.li
      className={`flex items-center justify-between p-2 border-1 border-light-green my-2 cursor-pointer rounded-lg ${
        categoryId === category.id && "bg-light-gray"
      } `}
      whileHover={hoverVariant}
      whileTap={tabVariant}
      key={category.id}
      onClick={() => setCategoryId(category.id)}
    >
      <div className={styleList}>
        <img
          src={category.avatar}
          alt="categoryImage"
          className="w-7 h-7 mr-1"
        />
        {category.name}
      </div>
      <div className="bg-light-green font-bold text-dark-green rounded-full pt-0.5 text-center w-7 h-7">
        {data && data.length}
      </div>
    </motion.li>
  );
};

export default ListSidebar;
