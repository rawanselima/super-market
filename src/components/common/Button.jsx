import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, size, type, navigate, danger }) => {
  return (
    <motion.button
      onClick={navigate}
      type={type}
      className={`${
        size === "small"
          ? "px-3 py-1 text-sm"
          : size === "full"
          ? "w-full text-lg px-5 py-1"
          : "text-lg px-5 py-1"
      }
        ${danger ? "bg-red-900" : "bg-green"}
        text-white  rounded-lg flex items-center justify-center my-2 cursor-pointer font-medium relative overflow-hidden`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 50,
        mass: 1,
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.1,
        y: -2,
        boxShadow: "0 10px 30px rgba(10, 10, 10, 0.064)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      whileTap={{
        scale: 0.95,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 600,
          damping: 15,
        },
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
