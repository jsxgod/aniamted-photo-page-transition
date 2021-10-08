import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const mainVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.6,
      ease: [0.6, 0.01, -0.05, 0.96],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, -0.05, 0.96],
    },
  },
};

const sideVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, -0.05, 0.96],
    },
  },
};

const spanVariants = {
  hide: {
    x: -10,
    opacity: 0,
  },
  initial: {
    background: "#bd9855",
    x: 0,
    y: 0,
    opacity: 1,
  },
  "rotate-down": {
    background: "#1e1f13",
    y: 14,
    x: -4,
    rotate: 45,
  },
  "rotate-up": {
    background: "#1e1f13",
    y: -14,
    x: -4,
    rotate: -45,
  },
};

const HamburgerButton = ({ menuOpened, stateChanger, useMainVariants }) => {
  return (
    <motion.button
      className="hamburger-button"
      variants={useMainVariants ? mainVariants : sideVariants}
      initial="initial"
      animate="animate"
      onClick={() => stateChanger(!menuOpened)}
    >
      <motion.span
        variants={spanVariants}
        initial="initial"
        animate={menuOpened ? "rotate-down" : "initial"}
        transition={{
          duration: 0.5,
          ease: [0.87, 0, 0.13, 1],
        }}
      ></motion.span>
      <motion.span
        variants={spanVariants}
        initial="initial"
        animate={menuOpened ? "hide" : "initial"}
        transition={{
          duration: 0.5,
          ease: [0.87, 0, 0.13, 1],
        }}
      ></motion.span>
      <motion.span
        variants={spanVariants}
        initial="initial"
        animate={menuOpened ? "rotate-up" : "initial"}
        transition={{
          duration: 0.5,
          ease: [0.87, 0, 0.13, 1],
        }}
      ></motion.span>
    </motion.button>
  );
};

export default HamburgerButton;
