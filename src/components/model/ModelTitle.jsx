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

const ModelTitle = ({ model }) => {
  return (
    <div className="title-container">
      <motion.div
        className="title-info-container"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="instagram">{model.instagram}</div>
      </motion.div>
      <motion.div
        className="name-container"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <span className="first-name">
          {[...model.name].map((char) => (
            <span>{char}</span>
          ))}
        </span>
        <span className="last-name">
          {[...model.surname].map((char) => (
            <span>{char}</span>
          ))}
        </span>
      </motion.div>
    </div>
  );
};

export default ModelTitle;
