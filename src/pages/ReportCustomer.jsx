import Button from "@/components/common/Button";
import Error from "@/components/common/Error";
import HeaderSection from "@/components/common/HeaderSection";
import Loader from "@/components/common/Loader";
import DataCustomer from "@/components/orderDetails/DataCustomer";
import TableReport from "@/components/ReportCustomer/TableReport";
import useFetchUserDetails from "@/components/ReportCustomer/useFetchUserDetails";
import useFetchUserOrders from "@/components/ReportCustomer/useFetchUserOrders";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

const ReportCustomer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: userData,
    isLoading: loadingUser,
    isError: errorUser,
  } = useFetchUserDetails(id);

  const {
    data: ordersData,
    isLoading: loadingOrders,
    isError: errorOrders,
  } = useFetchUserOrders(id);

  if (loadingUser || loadingOrders) return <Loader />;
  if (errorOrders || errorUser) return <Error />;

  console.log(ordersData);
  const address = [...new Set(ordersData.map((order) => order.address))].join(
    " / "
  );

  return (
    <main>
      <section className="flex items-center justify-between">
        <HeaderSection smallMargin={true}>
          Details Order #{userData.name}
        </HeaderSection>

        <Button navigate={() => navigate(-1)}>
          <span className="mr-2">
            <FaArrowLeft />
          </span>
          Back
        </Button>
      </section>
      <DataCustomer data={userData} address={address} />
      <section className="overflow-auto my-5">
        <TableReport data={ordersData} />
      </section>
    </main>
  );
};

export default ReportCustomer;
