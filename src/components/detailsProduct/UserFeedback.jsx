import React from "react";
import { FaStar } from "react-icons/fa6";
import Button from "../common/Button";
const UserFeedback = () => {
  return (
    <div>
      <p className="flex gap-1 text-2xl text-light-gray cursor-pointer">
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
      </p>
      <form>
        <textarea
          className=" my-5 w-full border-1 border-light-green focus:border-green outline-0 rounded p-2"
          rows={5}
          name="feedback"
          placeholder="Give your feedback on this product"
        ></textarea>
        <div className="flex justify-end-safe" >
          <Button> Submit </Button>
        </div>
      </form>
    </div>
  );
};

export default UserFeedback;
