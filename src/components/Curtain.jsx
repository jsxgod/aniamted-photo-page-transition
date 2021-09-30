import React from "react";
import { motion } from "framer-motion";

const curtainVariants = {
  hide: {
    width: 0,
  },
  show: {
    width: "100vw",
  },
  exit: {
    width: 0,
  },
};

const Curtain = ({ clicked }) => {
  return (
    <motion.div
      className="curtain"
      variants={curtainVariants}
      initial="hide"
      animate={clicked ? "show" : "hide"}
      exit="exit"
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export default Curtain;
