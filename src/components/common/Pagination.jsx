import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
const Pagination = () => {
  const styleButton =
    "w-8 h-8 py-1 px-2 text-sm font-bold rounded-full bg-light-gray text-dark-gray hover:bg-green hover:text-white duration-300 transition-all cursor-pointer mt-10";
  return (
    <div className="flex items-center flex-wrap gap-2">
      <button className={styleButton}>
        <IoIosArrowBack />
      </button>
      <button className={styleButton}> 1 </button>
      <button className={styleButton}> 2 </button>
      <button className={styleButton}> 3 </button>
      <button className={styleButton}>
        <HiDotsHorizontal />
      </button>
      <button className={styleButton}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
