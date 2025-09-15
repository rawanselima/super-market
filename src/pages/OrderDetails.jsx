import Button from "@/components/common/Button";
import HeaderSection from "@/components/common/HeaderSection";
import { FaArrowLeft } from "react-icons/fa6";
import React from "react";
import DataCustomer from "@/components/orderDetails/DataCustomer";
import { useNavigate } from "react-router-dom";
import TableDetailsOrder from "@/components/orderDetails/TableDetailOrder";
import useOrderStatus from "@/hooks/useOrderStatus";

const OrderDetails = () => {
  const navigate = useNavigate();
  const {styleStatus} = useOrderStatus("processing")
  return (
    <main>
      <section className="flex items-center justify-between">
        <HeaderSection smallMargin={true}>
          Details Order #Name <span className={styleStatus}> processing </span>
        </HeaderSection>

        <Button navigate={() => navigate(-1)}>
          <span className="mr-2">
            <FaArrowLeft />
          </span>
          Back
        </Button>
      </section>
      <DataCustomer />
      <section className="overflow-auto my-5">
        <TableDetailsOrder />
      </section>
      <section className="relative">
        <div className=" absolute -bottom-30 right-0 text-xl font-bold my-3 bg-white p-5 rounded text-dark-green">
          <p>
            <span> Total Price : </span> $1700
          </p>
        </div>
      </section>
    </main>
  );
};

export default OrderDetails;
