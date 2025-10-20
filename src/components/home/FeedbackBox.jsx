import React from "react";
import { motion } from "framer-motion";
import { boxVariant } from "../../animation/animationVariable";
import { FaStar } from "react-icons/fa6";
const FeedbackBox = ({ data }) => {
  return (
    <motion.div
      className="rounded bg-[rgb(249,255,249)] p-3 h-48"
      variants={boxVariant}
    >
      <div className="flex items-center">
        <img
          src="/assets/profile.webp"
          alt="feedback"
          loading="lazy"
          className="rounded-full w-14 h-14 mr-3 border-3 border-green/25 object-cover"
        />
        <div>
          <p className="uppercase font-bold text-dark-green">{data.userName}</p>
          <p className="flex gap-1" >
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`${
                  index < data?.rating ? "text-yellow-500" : "text-light-gray"
                }`}
              >
                <FaStar />
              </span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm text-dark-gray mt-5">{data.message}</p>
      </div>
    </motion.div>
  );
};

export default FeedbackBox;
