import Button from "@/components/common/Button";
import HeaderSection from "@/components/common/HeaderSection";
import DataCustomer from "@/components/orderDetails/DataCustomer";
import TableReport from "@/components/ReportCustomer/TableReport";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ReportCustomer = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="flex items-center justify-between">
        <HeaderSection smallMargin={true}>Details Order #Name</HeaderSection>

        <Button navigate={() => navigate(-1)}>
          <span className="mr-2">
            <FaArrowLeft />
          </span>
          Back
        </Button>
      </section>
      <DataCustomer />
      <section className="overflow-auto my-5">
        <TableReport />
      </section>
    </main>
  );
};

export default ReportCustomer;
