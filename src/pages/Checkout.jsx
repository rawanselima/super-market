import React, { useEffect, useState } from "react";
import Payment from "../components/checkout/payment";
import Receipt from "../components/checkout/Receipt";
import { motion } from "framer-motion";
import { containerVariant, childVariant } from "../animation/animationVariable";
const Checkout = () => {
  const [shippingPrice, setShippingPrice] = useState(null);

  return (
    <motion.main
      className="flex flex-wrap justify-center gap-5 my-5"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.section className="w-full xl:w-1/3" variants={childVariant}>
        <Payment
          setShippingPrice={setShippingPrice}
          shippingPrice={shippingPrice}
        />
      </motion.section>
      <motion.section className="w-full xl:w-1/3" variants={childVariant}>
        <Receipt shippingPrice={shippingPrice} />
      </motion.section>
    </motion.main>
  );
};

export default Checkout;
