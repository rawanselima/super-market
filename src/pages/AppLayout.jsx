import React, { useEffect, useState } from "react";
import Sidebar from "../components/common/Sidebar";
import { Outlet, useNavigation } from "react-router-dom";
import HeaderDashboard from "../components/common/HeaderDashboard";
import Loader from "../components/common/Loader";
const AppLayout = () => {
  const { state } = useNavigation();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 770) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [setShowSidebar]);

  if (state === "loading" || state === "submitting") return <Loader />;

  return (
    <div className="flex font-family-quicksand ">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="xl:ml-52 md:ml-16 w-full pt-2 px-4 bg-light-green min-h-screen">
        <HeaderDashboard
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <div className="rounded bg-white min-h-screen p-3 mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
