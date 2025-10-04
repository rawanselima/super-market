import React from "react";
import Button from "../common/Button";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="p-5 mx-auto w-fit text-center my-5">
      <h1 className="text-dark-green text-3xl font-bold">
        ❌ Not Products Added Yet
      </h1>
      <p className="mx-auto w-fit my-5">
        <Link to="/products">
          <Button>
            <span className="mr-2">
              <RiShoppingBag3Fill />
            </span>
            Continue Shopping
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default EmptyCart;
