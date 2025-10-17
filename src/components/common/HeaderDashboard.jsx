import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { IoIosLogOut } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks";
import { logout } from "@/redux/reducerUser";
const HeaderDashboard = ({ setShowSidebar, showSidebar }) => {
  const [user , setUser] = useLocalStorage("user");
  const dispatch = useDispatch();

  function handleLogout() {
    setUser([]);
    dispatch(logout());
  }

  const styleLinks =
    "mx-1 text-lg cursor-pointer  transition-all text-dark-green hover:text-green duration-300 transition-all";
  return (
    <header className="bg-white px-3 py-5 rounded fixed top-2 z-10 xl:w-[calc(100%-15rem)] md:w-[calc(100%-6rem)] w-[calc(100%-2rem)] shadow">
      <nav>
        <ul className="flex items-center justify-end-safe">
          <li
            className={`${styleLinks} block sm:hidden`}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaBarsStaggered />
          </li>
          <li className={styleLinks}>
            <TfiWorld />
          </li>
          <li className={styleLinks} onClick={() => handleLogout()}>
            <IoIosLogOut />
          </li>
          <li className={`flex items-center ${styleLinks}`}>
            <RxPerson />
            <span className="font-light text-dark-gray text-sm">
              {user?.name}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDashboard;
