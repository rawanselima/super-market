import React from "react";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  const styleLinks =
    "mx-1 text-lg cursor-pointer  transition-all text-dark-green hover:text-green duration-300 transition-all";

  return (
    <header className="flex justify-between items-center font-quicksand py-5 px-3 xl:px-0 ">
      <div>
        <img src="/assets/logo.svg fill.png" alt="logo" />
      </div>
      <nav>
        <ul className="flex items-center">
          <li className={styleLinks}>
            <IoCartOutline />
          </li>
          <li className={styleLinks}>
            <GrLanguage />
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
