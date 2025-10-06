import Button from "@/components/common/Button";
import HeaderSection from "@/components/common/HeaderSection";
import { FaArrowLeft } from "react-icons/fa6";
import React from "react";
import DataCustomer from "@/components/orderDetails/DataCustomer";
import { useNavigate, useParams } from "react-router-dom";
import TableDetailsOrder from "@/components/orderDetails/TableDetailOrder";
import useOrderStatus from "@/hooks/useOrderStatus";
import useFetchOrderDetails from "@/components/orderDetails/useFetchOrderDetails";
import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";
const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchOrderDetails(id);
  const { styleStatus } = useOrderStatus("pending");

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main>
      <section className="flex items-center justify-between">
        <HeaderSection smallMargin={true}>
          Details Order #{data.userName}
          <span className={styleStatus}> {data.status} </span>
        </HeaderSection>

        <Button navigate={() => navigate(-1)}>
          <span className="mr-2">
            <FaArrowLeft />
          </span>
          Back
        </Button>
      </section>
      <DataCustomer data={data} />
      <section className="overflow-auto my-5">
        <TableDetailsOrder data={data} />
      </section>
      <section className="relative">
        <div className=" absolute -bottom-30 right-0 text-xl font-bold my-3 bg-white p-5 rounded text-dark-green">
          <p>
            <span> Total Price : </span> ${data.totalPrice}
          </p>
        </div>
      </section>
    </main>
  );
};

export default OrderDetails;
