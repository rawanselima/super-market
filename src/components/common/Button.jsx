import React from "react";

const Button = ({ children, size, type }) => {
  return (
    <button
      type={type}
      className={`${
        size === "small" ? "text-sm" : "text-lg"
      } text-white bg-green px-4 py-1 rounded flex items-center my-2 hover:bg-dark-green transition-all duration-300 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
