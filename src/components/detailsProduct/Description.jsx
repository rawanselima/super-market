import React, { useState } from "react";
import HeaderSection from "../common/HeaderSection";
import Button from "../common/Button";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFeed } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  containerVariant,
  childTextVariants,
} from "../../animation/animationVariable";
import PopUp from "../common/PopUp";
import UserFeedback from "./UserFeedback";
const Description = () => {
  const styleSizeBtn =
    "p-1.5 border-1 border-green rounded cursor-pointer hover:bg-green hover:text-white duration-300 transition-all";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="xl:w-3/4 w-full"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div variants={childTextVariants}>
        <HeaderSection showByMargin={false}>
          Seeds of Change Organic Quinoa, Brown
        </HeaderSection>
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
          <span className="text-dark-gray text-sm" > (5) </span>
        </p>
      </motion.div>
      <motion.div
        className="flex items-center gap-3 my-4 "
        variants={childTextVariants}
      >
        <p className="font-bold text-5xl text-green"> $32 </p>
        <div>
          <p className="text-amber-300 text-sm"> 23% off </p>
          <p className="text-dark-gray font-bold text-xl line-through"> $60 </p>
        </div>
      </motion.div>

      <motion.p
        className="text-dark-gray text-sm my-5"
        variants={childTextVariants}
      >
        Uninhibited carnally hired played in whimpered dear gorilla koala
        depending and much yikes off far quetzal goodness and from for grimaced
        goodness unaccountably and meadowlark near unblushingly crucial scallop
        tightly neurotic hungrily some and dear furiously this apart. Spluttered
        narrowly yikes left moth in yikes bowed this that grizzly much hello on
        spoon-fed that alas rethought much decently richly and wow against the
        frequent fluidly at formidable acceptably flapped besides and much circa
        far over the bucolically hey precarious goldfinch mastodon goodness
        gnashed a jellyfish and one however because.
      </motion.p>
      <motion.div
        className="flex items-center flex-wrap gap-5 text-dark-gray"
        variants={childTextVariants}
      >
        <p className="font-bold"> size / weight : </p>
        <div className="my-2 flex items-center gap-2 text-sm">
          <button className={styleSizeBtn}>20g</button>
          <button className={styleSizeBtn}>30g</button>
          <button className={styleSizeBtn}>40g</button>
          <button className={styleSizeBtn}>50g</button>
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
        />
        <Button type={"submit"}>
          <span className="mr-2">
            <IoCartOutline />
          </span>
          Add to cart
        </Button>
      </motion.form>
      <Button navigate={() => setIsOpen(!isOpen)}>
        <span className="mr-2">
          <MdOutlineFeed />
        </span>{" "}
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
