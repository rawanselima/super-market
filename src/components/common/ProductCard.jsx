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
        <Link to={`/products/${product.id}`}>
          <motion.div
            className="w-full px-3 py-2 rounded border-1 border-light-gray cursor-pointer bg-white"
            variants={boxVariant}
            whileHover={hoverVariant}
            whileTap={tabVariant}
          >
            <img
              src={product.avatar[0] || "/assets/product-1.png"}
              alt={product.name}
              loading="lazy"
              className="w-full h-48 object-cover mx-auto rounded"
            />
            <h6 className="font-light text-dark-gray text-sm mt-3">
              {product.category.name}
            </h6>
            <h2 className="font-bold sm:text-[16px] text-sm text-dark-green my-2">
              {product.name}
            </h2>
            <div className="flex items-center gap-1 text-sm cursor-pointer">
              {
                <p className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < product?.rating
                          ? "text-yellow-500"
                          : "text-light-gray"
                      }`}
                    >
                      <FaStar />
                    </span>
                  ))}
                </p>
              }
              <span className="text-dark-gray text-sm">
                ( {product.rating || 0} )
              </span>
            </div>
            <p className="font-bold">
              <span className="text-green text-lg mt-2">
                ${Math.abs(product.sizes[0].price - product.offer)}
              </span>
              {product.offer > 0 && (
                <span className="text-dark-gray line-through text-sm mx-1">
                  ${product.sizes[0].price}
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
  )
};

export default ProductCard;
