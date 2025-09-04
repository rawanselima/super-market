import React from "react";

const HeaderSection = ({ children }) => {
  return (
    <h2 className="font-bold sm:text-3xl text-2xl text-dark-green my-10 px-3 xl:px-0 ">
      {children}
    </h2>
  );
};

export default HeaderSection;
