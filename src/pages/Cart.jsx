import React from "react";
import TableCart from "../components/cart/TableCart";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { containerVariant, childVariant } from "../animation/animationVariable";
const Cart = () => {
  const navigate = useNavigate();
  return (
    <motion.main variants={containerVariant} initial="hidden" animate="visible">
      <motion.section
        className="overflow-x-scroll rounded-lg border-1 border-light-gray my-5"
        variants={childVariant}
      >
        <TableCart />
      </motion.section>
      <motion.section
        className="flex items-center justify-between p-3 border-1 border-light-gray rounded"
        variants={childVariant}
      >
        <Link to="/products">
          <p className="text-dark-green flex items-center gap-2 ">
            <span>
              <RiShoppingBag3Fill />
            </span>
            Continue Shopping
          </p>
        </Link>
        <Button navigate={() => navigate("/checkout")}> CheckOut </Button>
      </motion.section>
    </motion.main>
  );
};

export default Cart;
