import React from "react";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const styleLinks =
    "mx-1 text-lg cursor-pointer  transition-all text-dark-green hover:text-green duration-300 transition-all";

  return (
    <header className="flex justify-between items-center font-quicksand py-5 px-3 xl:px-0 ">
      <Link to="/">
        <img src="/assets/logo.svg fill.webp" alt="logo" />
      </Link>
      <nav>
        <ul className="flex items-center">
          <li className={styleLinks}>
            <Link to="/cart">
              <IoCartOutline />
            </Link>
          </li>
          <li className={styleLinks}>
            <TfiWorld />
          </li>
          <li className={styleLinks}>
            <IoMoonOutline />
          </li>
          <li className={styleLinks}>
            <IoIosLogOut />
          </li>
          <li className={`flex items-center ${styleLinks}`}>
            <RxPerson />
            <span className="font-light text-dark-gray text-sm">Account</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
