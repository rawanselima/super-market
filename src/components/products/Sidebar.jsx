import React from "react";
import HeaderSection from "../common/HeaderSection";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { hoverVariant } from "../../animation/animationVariable";
import { tabVariant } from "../../animation/animationVariable";
import { childVariant } from "../../animation/animationVariable";
const Sidebar = () => {
  const styleList = "p-2 flex items-center flex-wrap";
  return (
    <motion.aside
      className="py-2 px-4 border-1 border-light-green shadow-lg rounded-lg"
      variants={childVariant}
    >
      <div className="relative">
        <HeaderSection> Category </HeaderSection>
        <div className="absolute -bottom-5 rounded-lg w-full h-0.5 bg-green"></div>
      </div>

      <nav className="py-5">
        <motion.ul
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.li
            className="flex items-center justify-between p-2 border-1 border-light-green my-2 cursor-pointer rounded-lg"
            whileHover={hoverVariant}
            whileTap={tabVariant}
          >
            <div className={styleList}>
              <img
                src="/assets/category-4.png"
                alt="categoryImage"
                className="w-7 h-7 mr-1"
              />
              Milk & cheese
            </div>
            <div className="bg-light-green font-bold text-dark-green rounded-full pt-0.5 text-center w-7 h-7">
              15
            </div>
          </motion.li>
          <motion.li
            className="flex items-center justify-between p-2 border-1 border-light-green my-2 cursor-pointer rounded-lg"
            whileHover={hoverVariant}
            whileTap={tabVariant}
          >
            <div className={styleList}>
              <img
                src="/assets/category-4.png"
                alt="categoryImage"
                className="w-7 h-7 mr-1"
              />
              Milk & cheese
            </div>
            <div className="bg-light-green font-bold text-dark-green rounded-full pt-0.5 text-center w-7 h-7">
              15
            </div>
          </motion.li>

          <motion.li
            className="flex items-center justify-between p-2 border-1 border-light-green my-2 cursor-pointer rounded-lg"
            whileHover={hoverVariant}
            whileTap={tabVariant}
          >
            <div className={styleList}>
              <img
                src="/assets/category-4.png"
                alt="categoryImage"
                className="w-7 h-7 mr-1"
              />
              Milk & cheese
            </div>
            <div className="bg-light-green font-bold text-dark-green rounded-full pt-0.5 text-center w-7 h-7">
              15
            </div>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
