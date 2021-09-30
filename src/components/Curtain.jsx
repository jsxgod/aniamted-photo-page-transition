import React from "react";
import { motion } from "framer-motion";

const curtainVariants = {
  hide: {
    height: 0,
  },
  show: {
    height: 0,
  },
  exit: {
    height: "100vh",
    opacity: 1,
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
      transition={{ duration: 0.5, ease: "easeInOut" }}
    ></motion.div>
  );
};

export default Curtain;
