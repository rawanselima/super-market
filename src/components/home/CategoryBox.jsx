import React from "react";
import { motion } from "framer-motion";
import { hoverVariant } from "../../animation/animationVariable";
import { tabVariant } from "../../animation/animationVariable";
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

  return (
    <motion.div
      className={`${randomColor} rounded-lg text-center cursor-pointer md:w-52 w-36 h-60 relative overflow-hidden`}
      whileHover={hoverVariant}
      whileTap={tabVariant}
    >
      <div className="w-52  h-42 overflow-hidden">
        <motion.img
          src={item.avatar}
          alt={item.name}
          className="mx-auto w-52  h-42 object-cover"
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
          28 Items
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CategoryBox;
