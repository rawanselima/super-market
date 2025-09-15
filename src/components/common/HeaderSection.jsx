import React from "react";

const HeaderSection = ({ children, showByMargin, smallMargin }) => {
  return (
    <h2
      className={`font-bold sm:text-3xl text-2xl text-dark-green px-3 xl:px-0 ${
        showByMargin && "my-10"
      } ${smallMargin && "my-4"} `}
    >
      {children}
    </h2>
  );
};

export default HeaderSection;
