import React from "react";
import useFetchUserDetails from "../ReportCustomer/useFetchUserDetails";
import Loader from "../common/Loader";
import Error from "../common/Error";

const InfoUser = ({ userId }) => {
  const styleSpan = "font-bold text-green text-lg";
  const { data, isLoading, isError } = useFetchUserDetails(userId);
  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <section className="flex items-center gap-3 border-1 border-light-gray rounded p-5 text-dark-green text-sm font-bold">
      <div className="w-36">
        <img src="/assets/profile.webp" alt="imgProfile" className="w-full" />
      </div>
      <div>
        <p>
          <span className={styleSpan}> Name : </span> {data.name}
        </p>
        <p>
          <span className={styleSpan}> Email :</span> {data.email}
        </p>
        <p>
          <span className={styleSpan}> Phone Number : </span> {data.phone}
        </p>
      </div>
    </section>
  );
};

export default InfoUser;
