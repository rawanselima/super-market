import React from "react";
import { motion } from "framer-motion";
import { hoverVariant } from "../../animation/animationVariable";
import { tabVariant } from "../../animation/animationVariable";
const CategoryBox = () => {
  const colors = [
    "bg-[#F2FCE4]",
    "bg-[#F4F6FA]",
    "bg-[#FEEFEA]",
    "bg-[#FFFCEB]",
    "bg-[#ECFFEC]",
    "bg-[#FFF3FF]",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className={`${randomColor} p-3 rounded-lg text-center cursor-pointer md:w-44 w-36 relative overflow-hidden`}
      whileHover={hoverVariant}
      whileTap={tabVariant}
    >
      <motion.img
        src="/assets/category-1.png"
        alt="category"
        className="mx-auto w-30 object-cover"
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
      <motion.p
        className="font-bold text-lg text-dark-green"
        whileHover={{
          color: "#22c55e",
          transition: { duration: 0.2 },
        }}
      >
        Cakes Milk
      </motion.p>
      <motion.p
        className="text-sm text-dark-gray font-light"
        whileHover={{
          color: "#6b7280",
          transition: { duration: 0.2 },
        }}
      >
        28 Items
      </motion.p>
    </motion.div>
  );
};

export default CategoryBox;
