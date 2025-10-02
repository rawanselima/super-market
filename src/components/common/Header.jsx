import React from "react";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const styleLinks =
    "mx-1 text-lg cursor-pointer hover:text-green duration-300 transition-all";
  const cart = useSelector((state) => state.cartStore);

  return (
    <header className="flex justify-between items-center font-quicksand py-5 px-3 xl:px-0 ">
      <NavLink to="/">
        <img src="/assets/logo.svg fill.webp" alt="logo" />
      </NavLink>
      <nav>
        <ul className="flex items-center">
          <li className={`${styleLinks} relative`}>
            <p className="bg-green w-4 h-4 text-center text-xs rounded-full text-white absolute top-5 left-2 ">
              {cart.length}
            </p>
            <NavLink
              to="/cart"
              className={({ isActive }) => {
                return isActive
                  ? `${styleLinks} text-green`
                  : `${styleLinks} text-dark-green`;
              }}
            >
              <IoCartOutline />
            </NavLink>
          </li>
          <li className={styleLinks}>
            <TfiWorld />
          </li>
          <li className={styleLinks}>
            <IoIosLogOut />
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                return isActive
                  ? `${styleLinks} text-green flex items-center`
                  : `${styleLinks} text-dark-green flex items-center`;
              }}
            >
              <RxPerson />
              <span className="font-light text-dark-gray text-sm">account</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
