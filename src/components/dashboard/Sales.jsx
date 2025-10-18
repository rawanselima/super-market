import React from "react";
import SalesBox from "./SalesBox";
import { FiShoppingBag } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { BsBoxes } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import useFetchOrderMonth from "./useFetchOrderMonth";
import Loader from "../common/Loader";
import Error from "../common/Error";
import useFetchAllProducts from "./useFetchAllProducts";
import useFetchUsersMonth from "./useFetchUsersMonth";
const Sales = ({ allOrders }) => {
  const { data, isLoading, isError } = useFetchOrderMonth(
    Date.now(),
    allOrders
  );

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useFetchAllProducts();

  const {
    data: allUsers,
    isLoading: isLoadingAllUsers,
    isErrorAllUsers,
  } = useFetchUsersMonth();

  if (isLoading || isLoadingProducts || isLoadingAllUsers) return <Loader />;
  if (isError || isErrorProducts || isErrorAllUsers) return <Error />;

  const allProducts = products.length;

  const totalPriceCurrentMonth = data?.nowMonth.reduce(
    (acc, cur) => cur.status !== "cancel" && acc + +cur.totalPrice,
    0
  );

  const totalPriceLastMonth = data?.lastMonth.reduce(
    (acc, cur) => cur.status !== "cancel" && acc + +cur.totalPrice,
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
      sales: allUsers?.allUsersSigh?.length,
      percentage: allUsers?.percentageForUsers,
    },
    {
      text: "Products",
      icon: <BsBoxes />,
      sales: allProducts,
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
