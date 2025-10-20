import React from "react";
import { motion } from "framer-motion";
import { FaRegChartBar } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBoxes } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaPlateWheat } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { RiYoutubeLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import {
  containerSidebarVariant,
  hoverVariant,
  sidebarVariant,
  tabVariant,
} from "../../animation/animationVariable";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/reducerUser";
import { useLocalStorage } from "@uidotdev/usehooks";
const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const styleList =
    "relative flex items-center gap-2 px-2 py-3 cursor-pointer rounded ";
  const styleIconSocialMedia =
    "text-xs mx-1 mt-5 mb-1 text-green bg-dark-green rounded-full p-1.5 hover:bg-green hover:text-dark-green transition-all duration-300 cursor-pointer";
  const styleSpan = "md:hidden xl:block block";
  const dispatch = useDispatch();
  const [user, setUser] = useLocalStorage("user");

  function handleLogout() {
    setUser(null);
    dispatch(logout());
  }

  const dataList = [
    {
      icon: <FaRegChartBar />,
      text: "dashboard",
      function: "/dashboard",
    },
    {
      icon: <BsFillPeopleFill />,
      text: "Customers",
      function: "customer",
    },
    {
      icon: <FaPlateWheat />,
      text: "Category",
      function: "category",
    },
    {
      icon: <FaBoxes />,
      text: "Products",
      function: "allProducts",
    },
    {
      icon: <IoIosListBox />,
      text: "Orders",
      function: "order",
    },
    {
      icon: <FaShippingFast />,
      text: "Shipping",
      function: "shipping",
    },
    {
      icon: <BiSolidMessageSquareDetail />,
      text: "Feedback",
      function: "feedback",
    },
  ];

  return (
    <>
      {showSidebar && (
        <motion.div
          variants={containerSidebarVariant(showSidebar)}
          initial="hidden"
          animate={showSidebar ? "visible" : "hidden"}
          className="fixed inset-0 bg-light-green/9 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      )}

      <motion.aside
        variants={containerSidebarVariant(showSidebar)}
        initial="hidden"
        animate={showSidebar ? "visible" : "hidden"}
        className={`h-screen font-bold text-light-green bg-[linear-gradient(45deg,#def9ec_0%,#4eca92_15%,#3bb77e_30%,#2a7d64_50%,#253d4e_100%)] fixed top-0 left-0 xl:w-52 md:w-16  p-2 z-50 ${
          showSidebar ? "pointer-events-auto" : "pointer-events-none"
        } `}
      >
        <motion.div variants={sidebarVariant} className="py-5">
          <NavLink to="/">
            <img
              src="/assets/logo.svg fill.webp"
              alt="logo"
              loading="lazy"
              className="xl:w-32 md:w-full xl:ml-3"
            />
          </NavLink>

          <motion.div
            variants={sidebarVariant}
            className="flex items-center ml-1 md:hidden xl:flex"
          >
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
          </motion.div>
        </motion.div>

        <nav>
          <motion.ul
            variants={containerSidebarVariant(showSidebar)}
            initial="hidden"
            animate={showSidebar ? "visible" : "hidden"}
          >
            {dataList.map((ele, index) => {
              return (
                <motion.li
                  key={index}
                  variants={sidebarVariant}
                  whileHover={hoverVariant}
                  whileTap={tabVariant}
                >
                  <NavLink
                    to={ele.function}
                    end
                    className={({ isActive }) =>
                      isActive
                        ? `${styleList} bg-dark-green`
                        : `${styleList} bg-transparent`
                    }
                  >
                    {ele.icon}
                    <span className={styleSpan}> {ele.text} </span>
                  </NavLink>
                </motion.li>
              );
            })}
            <motion.li
              variants={sidebarVariant}
              whileHover={hoverVariant}
              whileTap={tabVariant}
              className={styleList}
              onClick={() => handleLogout()}
            >
              <MdLogout /> <span className={styleSpan}> Logout </span>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;
