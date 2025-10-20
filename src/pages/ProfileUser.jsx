import Error from "@/components/common/Error";
import Loader from "@/components/common/Loader";
import InfoUser from "@/components/profileUser/InfoUser";
import Order from "@/components/profileUser/Order";
import useFetchUserOrders from "@/components/ReportCustomer/useFetchUserOrders";
import { useLocalStorage } from "@uidotdev/usehooks";
import React from "react";

const ProfileUser = () => {
  const [user, setUser] = useLocalStorage("user");

  const { data, isLoading, isError } = useFetchUserOrders(user.id);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main className="mx-auto">
      <InfoUser userId={user.id} />
      <section>
        {data.length > 0 ? (
          data.map((order) => {
            return <Order key={order.id} order={order} />;
          })
        ) : (
          <p className="text-center font-bold text-dark-green text-2xl">
            ❌ not orders Yet
          </p>
        )}
      </section>
    </main>
  );
};

export default ProfileUser;
