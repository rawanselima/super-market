import React from "react";
import OrderTodayBox from "./OrderTodayBox";
import useFetchOrdersToday from "./useFetchOrdersToday";
import Loader from "../common/Loader";
import Error from "../common/Error";

const OrderToday = ({ allOrders }) => {
  const { data, isLoading, isError } = useFetchOrdersToday(allOrders);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className="bg-light-green p-5 rounded xl:w-1/2 w-full h-[400px] overflow-scroll">
      <h2 className="text-dark-green text-xl mb-3 font-bold"> Orders Today </h2>
      <ul>
        {data && data.ordersToday.length > 0 ? (
          data.ordersToday.map((ele) => {
            return <OrderTodayBox order={ele} key={ele.id} />;
          })
        ) : (
          <h1 className="font-bold text-2xl text-dark-green text-center pt-10">
            ❌No Orders Today
          </h1>
        )}
      </ul>
    </div>
  );
};

export default OrderToday;
