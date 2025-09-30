import React, { useState } from "react";
import HeaderSection from "../common/HeaderSection";
import Button from "../common/Button";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFeed } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { addCart } from "@/redux/reducerCart";
import {
  containerVariant,
  childTextVariants,
} from "../../animation/animationVariable";
import PopUp from "../common/PopUp";
import UserFeedback from "./UserFeedback";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks";
const Description = ({ product }) => {
  const styleSizeBtn =
    "p-1.5 border-1 border-green rounded cursor-pointer hover:bg-green hover:text-white duration-300 transition-all";
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useLocalStorage("cart", []);

  const dispatch = useDispatch();

  function handleAddCart() {
    const newCart = [
      ...cart,
      {
        id: Date.now(),
        avatar: product.avatar[0],
        name: product.name,
        price:
          +product.sizes[active].price -
          +product.sizes[active].price * (+product.offer / 100),
        size: product.sizes[active].size,
        quantity: quantity,
      },
    ];

    setCart(newCart);
    dispatch(addCart(newCart));
  }

  return (
    <motion.div
      className="xl:w-3/4 w-full"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div variants={childTextVariants}>
        <HeaderSection showByMargin={false}>{product.name}</HeaderSection>
      </motion.div>
      <motion.div variants={childTextVariants}>
        <p className="mt-5 flex items-center gap-1 text-xl text-yellow-500 cursor-pointer">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span className="text-dark-gray text-sm"> ( {product.rating} ) </span>
        </p>
      </motion.div>
      <motion.div
        className="flex items-center gap-3 my-4 "
        variants={childTextVariants}
      >
        <p className="font-bold text-5xl text-green">
          $
          {+product.sizes[active].price -
            +product.sizes[active].price * (+product.offer / 100)}
        </p>
        <div>
          {product.offer > 0 && (
            <>
              <p className="text-amber-300 text-sm"> {product.offer}% off </p>
              <p className="text-dark-gray font-bold text-xl line-through">
                ${product.sizes[active].price}
              </p>
            </>
          )}
        </div>
      </motion.div>

      <motion.p
        className="text-dark-gray text-sm my-5"
        variants={childTextVariants}
      >
        {product.description}
      </motion.p>
      <motion.div
        className="flex items-center flex-wrap gap-5 text-dark-gray"
        variants={childTextVariants}
      >
        <p className="font-bold"> size / weight : </p>
        <div className="my-2 flex items-center gap-2 text-sm">
          {product.sizes.map((size, index) => {
            return (
              <button
                className={`${styleSizeBtn} ${
                  active === index && "bg-green text-white"
                } `}
                key={index}
                onClick={() => setActive(index)}
              >
                {size.size}g
              </button>
            );
          })}
        </div>
      </motion.div>
      <motion.form
        className="my-4 flex items-center gap-5"
        onSubmit={(e) => e.preventDefault()}
        variants={childTextVariants}
      >
        <input
          type="number"
          min={1}
          defaultValue={1}
          className="w-20 border-1 border-green rounded py-1 px-3 text-lg text-dark-green outline-0"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button type={"submit"} navigate={() => handleAddCart()}>
          <span className="mr-2">
            <IoCartOutline />
          </span>
          Add to cart
        </Button>
      </motion.form>
      <Button navigate={() => setIsOpen(!isOpen)}>
        <span className="mr-2">
          <MdOutlineFeed />
        </span>
        Give Your Feedback
      </Button>
      {isOpen && (
        <PopUp
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={"Give Your Feedback"}
        >
          <UserFeedback />
        </PopUp>
      )}
    </motion.div>
  );
};
2;

export default Description;
