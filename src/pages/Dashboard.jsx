import React from "react";
import Sales from "../components/dashboard/Sales";
import HeaderSection from "@/components/common/HeaderSection";
import Graph from "@/components/dashboard/graph";
import OrderToday from "@/components/dashboard/OrderToday";
import Chart from "@/components/dashboard/Chart";
import useFetchAllOrders from "@/components/dashboard/useFetchAllOrders";
import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";
import TableTopSales from "@/components/dashboard/TableTopSales";

const Dashboard = () => {
  const { data, isLoading, isError } = useFetchAllOrders();

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main className="">
      <HeaderSection smallMargin={true}> Dashboard </HeaderSection>
      <Sales allOrders={data} />
      <section className="flex flex-wrap justify-between items-center">
        <OrderToday allOrders={data} />
        <Chart allOrders={data} />
      </section>
      <section className="w-ful my-10">
        <HeaderSection showByMargin={true}>
          Sales & Order Through year
        </HeaderSection>
        <Graph allOrders={data} />
      </section>
      <section>
        <HeaderSection showByMargin={true}> Best Sellers </HeaderSection>
        <TableTopSales />
      </section>
    </main>
  );
};

export default Dashboard;
