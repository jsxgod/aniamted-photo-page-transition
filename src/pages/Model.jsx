import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { ModelTitle } from "../components/model";

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

const image_container_variants = {
  initial: {
    width: 524,
    height: 650,
    y: "-50%",
  },
  animate: {
    y: 0,
    width: "100%",
    height: window.innerWidth > 1440 ? 600 : 400,
    overflow: "hidden",
    transition: {
      duration: 1.2,
      delay: 0.9,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const image_variants = {
  initial: {},
  animate: {
    y: window.innerWidth > 1440 ? "-35%" : -150,
    transition: {
      duration: 1,
      delay: 1.1,
      ease: [0.6, 0.01, -0.05, 0.9],
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
      <motion.div
        className="big-image-wrapper"
        variants={image_container_variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.img
          src={process.env.PUBLIC_URL + `/images/models/model-1.webp`}
          alt="model1.jpg"
          variants={image_variants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </motion.div>
    </motion.div>
  );
};

export default Model;
