import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
const SalesBox = ({ data }) => {
  const { text, icon, sales, percentage } = data;
  return (
    <div className="bg-white border-2 border-light-green p-5 rounded flex justify-between">
      <div>
        <h4 className="text-sm font-bold text-dark-green"> {text} </h4>
        <h1 className="font-bold text-3xl my-2 "> {sales} </h1>
        <p className=" font-bold flex gap-1 text-dark-green">
          <span className="text-green flex items-center gap-1">
            <FaArrowTrendUp /> + {percentage} %
          </span>
          from last month
        </p>
      </div>
      <div className="font-bold text-2xl text-green">{icon}</div>
    </div>
  );
};

export default SalesBox;
