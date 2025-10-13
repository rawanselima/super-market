import React from "react";
import SalesBox from "./SalesBox";
import { FiShoppingBag } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { BsBoxes } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import useFetchOrderMonth from "./useFetchOrderMonth";
import Loader from "../common/Loader";
import Error from "../common/Error";
const Sales = ({ allOrders }) => {
  const { data, isLoading, isError } = useFetchOrderMonth(
    Date.now(),
    allOrders
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  const totalPriceCurrentMonth = data?.nowMonth.reduce(
    (acc, cur) => acc + +cur.totalPrice,
    0
  );

  const totalPriceLastMonth = data?.lastMonth.reduce(
    (acc, cur) => acc + +cur.totalPrice,
    0
  );

  const percentageTotalPrice =
    totalPriceLastMonth === 0
      ? totalPriceCurrentMonth > 0
        ? 100
        : 0
      : ((totalPriceCurrentMonth - totalPriceLastMonth) / totalPriceLastMonth) *
        100;

  const dataSales = [
    {
      text: "Total Refund",
      icon: <FiDollarSign />,
      sales: totalPriceCurrentMonth.toFixed(2),
      percentage: percentageTotalPrice,
    },
    {
      text: "Orders",
      icon: <FiShoppingBag />,
      sales: data?.nowMonthOrders,
      percentage: data?.percentageForSales,
    },
    {
      text: "Customers",
      icon: <IoPeopleOutline />,
      sales: "35000",
      percentage: 50,
    },
    {
      text: "Products",
      icon: <BsBoxes />,
      sales: "650",
      percentage: 27,
    },
  ];

  return (
    <section className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 my-10">
      {dataSales.map((ele, index) => {
        return <SalesBox data={ele} key={index} />;
      })}
    </section>
  );
};

export default Sales;
