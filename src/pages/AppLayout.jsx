import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const AppLayout = () => {
  return (
    <div className="font-family-quicksand md:max-w-11/12 max-w-full mx-auto bg-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
