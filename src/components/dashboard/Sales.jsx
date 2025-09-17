import React from "react";
import SalesBox from "./SalesBox";
import { FiShoppingBag } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { BsBoxes } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
const Sales = () => {
  const dataSales = [
    {
      text: "Total Refund",
      icon: <FiDollarSign />,
      sales: "30000",
      percentage: 20,
    },
    {
      text: "Orders",
      icon: <FiShoppingBag />,
      sales: "3000",
      percentage: 100,
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
