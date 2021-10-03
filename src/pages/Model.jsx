import { motion } from "framer-motion";
import React, { useEffect } from "react";

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

const info_variants = {
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

const name_variants = {
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
      <div className="title-container">
        <motion.div
          className="model-title"
          variants={info_variants}
          initial="initial"
          animate="animate"
        >
          <div className="instagram">@instagram_placeholder</div>
        </motion.div>
        <motion.div
          className="name-container"
          variants={name_variants}
          initial="initial"
          animate="animate"
        >
          <span className="first">
            <span>Y</span>
            <span>a</span>
            <span>s</span>
            <span>m</span>
            <span>e</span>
            <span>e</span>
            <span>n</span>
          </span>
          <span className="last">
            <span>T</span>
            <span>a</span>
            <span>r</span>
            <span>i</span>
            <span>q</span>
          </span>
        </motion.div>
      </div>
      <motion.div
        className="big-image-container"
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
