import React from "react";
import OrderTodayBox from "./OrderTodayBox";

const OrderToday = () => {
  return (
    <div className="bg-light-green p-5 rounded xl:w-1/2 w-full h-[400px] overflow-scroll">
      <h2 className="text-dark-green text-xl mb-3 font-bold"> Orders Today </h2>
      <ul>
        <OrderTodayBox />
        <OrderTodayBox />
        <OrderTodayBox />
        <OrderTodayBox />
        <OrderTodayBox />
        <OrderTodayBox />
        <OrderTodayBox />
      </ul>
    </div>
  );
};

export default OrderToday;
