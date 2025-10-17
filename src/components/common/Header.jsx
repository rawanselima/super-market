import React, { useEffect } from "react";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks";
import { addCart } from "@/redux/reducerCart";
import Button from "./Button";
import { addUser, logout } from "@/redux/reducerUser";

const Header = () => {
  const styleLinks =
    "mx-1 text-lg cursor-pointer hover:text-green duration-300 transition-all";
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const [cartItems] = useLocalStorage("cart", []);
  const [user, setUser] = useLocalStorage("user", null);

  useEffect(() => {
    dispatch(addCart(cartItems));
    if (user !== null) dispatch(addUser(user));
  }, []);

  function handleLogout() {
    setUser(null);
    dispatch(logout());
    navigate("/");
  }

  console.log(user);

  return (
    <header className="flex justify-between items-center font-quicksand py-5 px-3 xl:px-0 ">
      <NavLink to="/">
        <img src="/assets/logo.svg fill.webp" alt="logo" />
      </NavLink>
      <nav>
        <ul className="flex items-center">
          {(user === null || user?.role === "user") && (
            <li className={`${styleLinks} relative`}>
              <p className="bg-green w-4 h-4 text-center text-xs rounded-full text-white absolute top-5 left-2 ">
                {user !== null ? cart.length : "0"}
              </p>
              <NavLink
                to={`${user !== null ? "/cart" : "login"}`}
                className={({ isActive }) => {
                  return isActive
                    ? `${styleLinks} text-green`
                    : `${styleLinks} text-dark-green`;
                }}
              >
                <IoCartOutline />
              </NavLink>
            </li>
          )}
          <li className={styleLinks}>
            <TfiWorld />
          </li>
          {user !== null && (
            <li className={styleLinks} onClick={() => handleLogout()}>
              <IoIosLogOut />
            </li>
          )}
          <li>
            {user !== null ? (
              <NavLink
                to={`${
                  user === null
                    ? "/login"
                    : user.role === "admin"
                    ? "/dashboard"
                    : "/profile"
                }`}
                className={({ isActive }) => {
                  return isActive
                    ? `${styleLinks} text-green flex items-center`
                    : `${styleLinks} text-dark-green flex items-center`;
                }}
              >
                <RxPerson />
                <span className="font-light text-dark-gray text-sm">
                  {user.name}
                </span>
              </NavLink>
            ) : (
              <Button size={"small"} navigate={() => navigate("/login")}>
                {" "}
                Login{" "}
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
