import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { ModelImage, ModelTitle, ModelInfo } from "../components/model";

const loadVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const Model = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="model-page"
      variants={loadVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ModelTitle />
      <ModelImage />
      <ModelInfo />
    </motion.div>
  );
};

export default Model;
