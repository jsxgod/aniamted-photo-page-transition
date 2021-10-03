import { motion } from "framer-motion";
import React from "react";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {},
};

const ModelTitle = () => {
  return (
    <div className="title-container">
      <motion.div
        className="title-info-container"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="instagram">@instagram_placeholder</div>
      </motion.div>
      <motion.div
        className="name-container"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <span className="first-name">
          <span>N</span>
          <span>a</span>
          <span>m</span>
          <span>e</span>
        </span>
        <span className="last-name">
          <span>S</span>
          <span>u</span>
          <span>r</span>
          <span>n</span>
          <span>a</span>
          <span>m</span>
          <span>e</span>
        </span>
      </motion.div>
    </div>
  );
};

export default ModelTitle;
