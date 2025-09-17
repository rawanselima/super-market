import React from "react";
import { motion } from "framer-motion";
import { boxVariant } from "../../animation/animationVariable";
const FeedbackBox = () => {
  return (
    <motion.div
      className="rounded bg-[rgb(249,255,249)] p-3"
      variants={boxVariant}
    >
      <div className="flex items-center">
        <img
          src="/assets/profile.webp"
          alt="feedback"
          loading="lazy"
          className="rounded-full w-10 h-10 mr-3 border-3 border-green/25 object-cover"
        />
        <p className="uppercase font-bold text-dark-green"> full name </p>
      </div>
      <div>
        <p className="text-sm text-dark-gray mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolore
          ducimus, soluta nam provident corrupti fugit, cumque iste quaerat
          saepe vitae.
        </p>
      </div>
    </motion.div>
  );
};

export default FeedbackBox;
