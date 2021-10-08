import React from "react";
import { motion } from "framer-motion";

const curtainVariants = {
  hide: {
    height: 0,
  },
  show: {
    height: "100vh",
  },
  exit: {
    height: "100vh",
  },
};

const Curtain = ({ clicked }) => {
  return (
    <div className="curtain-container">
      <motion.div
        className="curtain"
        variants={curtainVariants}
        initial="hide"
        animate={clicked ? "show" : "hide"}
        exit={clicked ? "exit" : "hide"}
        transition={{
          duration: 0.6,
          ease: [0, 0.55, 0.45, 1],
        }}
      ></motion.div>
    </div>
  );
};

export default Curtain;
