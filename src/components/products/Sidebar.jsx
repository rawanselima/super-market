import React from "react";
import HeaderSection from "../common/HeaderSection";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { childVariant } from "../../animation/animationVariable";
import ListSidebar from "./ListSidebar";
import Error from "../common/Error";
import Loader from "../common/Loader";
const Sidebar = ({ categories, isLoading, isError, setCategoryId ,categoryId }) => {
  if (isLoading) return <Loader />;
  if (isError) return <Error />;

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
          {categories &&
            categories.map((category) => {
              return (
                <ListSidebar
                  category={category}
                  key={category.id}
                  setCategoryId={setCategoryId}
                  categoryId={categoryId}
                />
              );
            })}
        </motion.ul>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
