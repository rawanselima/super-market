import React, { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Pagination = ({ setPage, page, totalPages }) => {
  const styleButton =
    "w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full bg-light-gray text-dark-gray hover:bg-green hover:text-white duration-300 transition-all cursor-pointer mt-10 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
      {/* Prev */}
      <button
        className={styleButton}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <IoIosArrowBack />
      </button>

      <p className="mt-9 mx-3">
        {page} / {totalPages}
      </p>

      {/* Next */}
      <button
        className={styleButton}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
