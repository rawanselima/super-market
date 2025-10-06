import React from "react";
import { IoPerson } from "react-icons/io5";
import { PiHeadsetFill } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
const DataCustomer = ({ data }) => {
  const styleSpan = "font-bold text-dark-green flex items-center gap-2";
  const styleList = "py-2 flex items-center gap-2";

  return (
    <section className="text-dark-gray">
      <ul>
        <li className={styleList}>
          <span className={styleSpan}>
            <IoPerson />
            Name :
          </span>
          {data.userName}
        </li>
        <li className={styleList}>
          <span className={styleSpan}>
            <PiHeadsetFill /> Phone Number :
          </span>
          {data.phone}
        </li>
        <li className={styleList}>
          <span className={styleSpan}>
            <FaAddressBook /> Address :
          </span>
          {data.address}
        </li>
        <li className={styleList}>
          <span className={styleSpan}>
            <FaSackDollar /> payment :
          </span>
          cash on delivery
        </li>
      </ul>
    </section>
  );
};

export default DataCustomer;
