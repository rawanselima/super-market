import React from "react";
import { motion } from "framer-motion";
import { hoverVariant } from "../../animation/animationVariable";
import { tabVariant } from "../../animation/animationVariable";
import { Link } from "react-router-dom";
import useFetchProductsCategory from "../products/useFetchProductsCategory";
const CategoryBox = ({ item }) => {
  const colors = [
    "bg-[#F2FCE4]",
    "bg-[#F4F6FA]",
    "bg-[#FEEFEA]",
    "bg-[#FFFCEB]",
    "bg-[#ECFFEC]",
    "bg-[#FFF3FF]",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const { data } = useFetchProductsCategory(item.id);

  return (
    <motion.div
      className={`${randomColor} rounded-lg text-center cursor-pointer md:w-52 w-40 h-60 relative overflow-hidden`}
      whileHover={hoverVariant}
      whileTap={tabVariant}
    >
      <Link to={`/products?categoryId=${item.id}`}>
        <div className="md:w-52 w-40  h-42 overflow-hidden">
          <motion.img
            src={item.avatar}
            alt={item.name}
            className="mx-auto md:w-52 w-40  h-42 object-cover"
            loading="lazy"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 3,
              },
            }}
          />
        </div>
        <div className="p-3">
          <motion.p
            className="font-bold text-lg text-dark-green"
            whileHover={{
              color: "#22c55e",
              transition: { duration: 0.2 },
            }}
          >
            {item.name}
          </motion.p>
          <motion.p
            className="text-sm text-dark-gray font-light"
            whileHover={{
              color: "#6b7280",
              transition: { duration: 0.2 },
            }}
          >
            {data && data.length} Items
          </motion.p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryBox;
