import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { RiYoutubeLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaPlateWheat } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  const styleIconSocialMedia =
    "text-sm mx-1 my-3 text-white bg-green rounded-full p-2 hover:bg-dark-green transition-all duration-300 cursor-pointer";
  const dataList = [
    {
      icon: <IoLocationOutline />,
      label: "Address : ",
      text: "Egypt , cairo",
    },
    {
      icon: <TfiHeadphoneAlt />,
      label: "call us : ",
      text: (
        <a href="https://wa.me/+201060661936" target="_blank">
          +201060661936
        </a>
      ),
    },
    {
      icon: <TbSend />,
      label: "Email : ",
      text: "rawanselima2@gmail.com",
    },
    {
      icon: <BsClock />,
      label: "Hours : ",
      text: "10:00 - 18:00, Mon - Sat",
    },
  ];

  return (
    <footer className="text-dark-green text-sm p-4 mt-14 grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 border-b-2 border-light-gray">
      <div className="col-span-2">
        <img src="/assets/logo.svg fill.png" alt="logoFooter" loading="lazy" />
        <p className="my-5 text-dark-gray">
          we always seek to introduce best quality and products <br />
          and always interested in your comfortable shopping
        </p>
        <ul>
          {dataList.map((item, index) => {
            return (
              <li className="flex items-center gap-2 my-3" key={index}>
                <span className="text-green">{item.icon}</span>
                <span className="font-bold"> {item.label} </span> {item.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className="text-dark-green font-bold text-xl"> Categories </h3>
        <ul className="text-sm py-3 font-light ">
          <li className="hover:text-green transition-all duration-300 cursor-pointer flex items-center py-1">
            <span className="mt-1 text-xl">
              <RiArrowRightDoubleFill />
            </span>
            vegetables
          </li>
          <li className="hover:text-green transition-all duration-300 cursor-pointer  flex items-center py-1">
            <span className="mt-1 text-xl">
              <RiArrowRightDoubleFill />
            </span>
            snack
          </li>
          <li className="hover:text-green transition-all duration-300 cursor-pointer  flex items-center py-1">
            <span className="mt-1 text-xl">
              <RiArrowRightDoubleFill />
            </span>
            milk&cheese
          </li>
          <li className="hover:text-green transition-all duration-300 cursor-pointer  flex items-center py-1">
            <span className="mt-1 text-xl">
              <RiArrowRightDoubleFill />
            </span>
            chicken
          </li>
          <li className="hover:text-green transition-all duration-300 cursor-pointer  flex items-center py-1">
            <span className="mt-1 text-xl">
              <RiArrowRightDoubleFill />
            </span>
            meat
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-dark-green font-bold text-xl mb-3"> Account </h3>
        <ul>
          <li>
            <Link
              to="/"
              className="hover:text-green transition-all duration-300 cursor-pointer  flex items-center py-1"
            >
              <span className=" text-green mr-1 ">
                <IoHomeOutline />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-green transition-all duration-300 cursor-pointer  flex items-center py-1"
            >
              <span className=" text-green mr-1 ">
                <FaPlateWheat />
              </span>
              Products
            </Link>
          </li>
          <Link to="/cart">
            <li className="hover:text-green transition-all duration-300 cursor-pointer  flex items-center py-1">
              <span className=" text-green mr-1">
                <IoCartOutline />
              </span>
              cart
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-dark-green text-xl">Follow Us </h3>
        <div className="flex items-center">
          <a
            href="https://www.facebook.com/rawan.mohamed.673845"
            target="_blank"
            className={styleIconSocialMedia}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/rawan-mohamed-bb87a0252/"
            target="_blank"
            className={styleIconSocialMedia}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/_rawan_mohamed98/"
            target="_blank"
            className={styleIconSocialMedia}
          >
            <IoLogoInstagram />
          </a>
          <a
            href="https://wa.me/+201060661936"
            target="_blank"
            className={styleIconSocialMedia}
          >
            <IoLogoWhatsapp />
          </a>
          <a href="#" className={styleIconSocialMedia}>
            <RiYoutubeLine />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
