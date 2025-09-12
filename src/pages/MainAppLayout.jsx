import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";

const MainAppLayout = () => {
  const { state } = useNavigation();

  if (state === "loading" || state === "submitting") return <Loader />;

  return (
    <div className="font-family-quicksand md:max-w-11/12 max-w-full mx-auto bg-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainAppLayout;
