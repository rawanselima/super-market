import React from "react";
import Sales from "../components/dashboard/Sales";
import HeaderSection from "@/components/common/HeaderSection";
import Graph from "@/components/dashboard/graph";
import OrderToday from "@/components/dashboard/OrderToday";
import Chart from "@/components/dashboard/Chart";

const Dashboard = () => {
  return (
    <main className="">
      <HeaderSection smallMargin={true}> Dashboard </HeaderSection>
      <Sales />
      <section className="flex flex-wrap justify-between items-center">
        <OrderToday />
        <Chart />
      </section>
      <section className="w-ful my-10">
        <HeaderSection showByMargin={true}>
          Sales & Order Through year
        </HeaderSection>
        <Graph />
      </section>
    </main>
  );
};

export default Dashboard;
