import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { boxVariant } from "../../animation/animationVariable";
import { hoverVariant } from "../../animation/animationVariable";
import { tabVariant } from "../../animation/animationVariable";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
const ProductCard = ({ product }) => {
  return (
    <>
      {product === "undefined" || product == null ? (
        <Link to="/products/1">
          <motion.div
            className="px-3 py-1 rounded border-1 border-light-gray cursor-pointer bg-white"
            variants={boxVariant}
            whileHover={hoverVariant}
            whileTap={tabVariant}
          >
            <img
              src="/assets/product-1.png"
              alt="image"
              loading="lazy"
              className="w-full h-36 object-cover mx-auto"
            />
            <h6 className="font-light text-dark-gray text-sm mt-3">rawan</h6>
            <h2 className="font-bold sm:text-[16px] text-sm text-dark-green my-2">
              hii
            </h2>
            <p className="flex items-center gap-1 text-sm text-yellow-500 cursor-pointer">
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
              <span className="text-light-gray">
                <FaStar />
              </span>
              <span className="text-dark-gray text-sm">( 5) </span>
            </p>
            <p className="font-bold">
              <span className="text-green text-lg mt-2">$554</span>

              <span className="text-dark-gray line-through text-sm mx-1">
                $55
              </span>
            </p>
            <button className="bg-light-green text-green font-bold px-3 py-1 flex items-center justify-self-end my-3 rounded cursor-pointer hover:bg-green hover:text-light-green transition-all duration-300">
              <span className="mr-1 text-lg">
                <IoCartOutline />
              </span>
              Add
            </button>
          </motion.div>
        </Link>
      ) : (
        <Link to={`/products/${product.id}`}>
          <motion.div
            className="px-3 py-1 rounded border-1 border-light-gray cursor-pointer bg-white"
            variants={boxVariant}
            whileHover={hoverVariant}
            whileTap={tabVariant}
          >
            <img
              src={product.avatar[0] || "/assets/product-1.png"}
              alt={product.name}
              loading="lazy"
              className="w-full h-36 object-cover mx-auto"
            />
            <h6 className="font-light text-dark-gray text-sm mt-3">
              {product.category.name}
            </h6>
            <h2 className="font-bold sm:text-[16px] text-sm text-dark-green my-2">
              {product.name}
            </h2>
            <p className="flex items-center gap-1 text-sm text-yellow-500 cursor-pointer">
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
              <span className="text-light-gray">
                <FaStar />
              </span>
              <span className="text-dark-gray text-sm">
                {" "}
                ( {product.rating} ){" "}
              </span>
            </p>
            <p className="font-bold">
              <span className="text-green text-lg mt-2">${product.price}</span>
              {product.offer > 0 && (
                <span className="text-dark-gray line-through text-sm mx-1">
                  ${product.offer}
                </span>
              )}
            </p>
            <button className="bg-light-green text-green font-bold px-3 py-1 flex items-center justify-self-end my-3 rounded cursor-pointer hover:bg-green hover:text-light-green transition-all duration-300">
              <span className="mr-1 text-lg">
                <IoCartOutline />
              </span>
              Add
            </button>
          </motion.div>
        </Link>
      )}
    </>
  );
};

export default ProductCard;
