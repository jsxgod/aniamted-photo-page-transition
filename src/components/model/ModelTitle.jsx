import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {},
};

const wordVariants = {
  animate: {
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const wordVariants2 = {
  animate: {
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letterVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const ModelTitle = ({ model }) => {
  return (
    <div className="title-container">
      <motion.div
        className="title-info-container"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <div className="instagram">{model.instagram}</div>
      </motion.div>
      <motion.div
        className="name-container"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={wordVariants}
          initial="initial"
          animate="animate"
          className="first-name"
        >
          {[...model.name].map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.span>
        <motion.span
          variants={wordVariants2}
          initial="initial"
          animate="animate"
          className="last-name"
        >
          {[...model.surname].map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ModelTitle;
