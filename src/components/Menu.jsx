import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const menuVariants = {
  hide: {
    display: "none",
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  show: {
    display: "grid",
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: {},
};

const optionVariants = {
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const Menu = ({ opened, hideNavBarFunction }) => {
  return (
    <div className="menu-container">
      <motion.div
        className="menu"
        variants={menuVariants}
        initial="hide"
        animate={opened ? "show" : "hide"}
        exit="exit"
      >
        <motion.div className="option dark home" variants={optionVariants}>
          <Link
            to="/"
            onClick={() => (hideNavBarFunction ? hideNavBarFunction(true) : {})}
          >
            Home
          </Link>
        </motion.div>
        <motion.div className="option bright about" variants={optionVariants}>
          <Link
            to="/about-us"
            onClick={() => (hideNavBarFunction ? hideNavBarFunction(true) : {})}
          >
            About
          </Link>
        </motion.div>
        <motion.div className="option bright gallery" variants={optionVariants}>
          <Link to="/gallery">Gallery</Link>
        </motion.div>
        <motion.div className="option dark contact" variants={optionVariants}>
          <Link
            to="/contact-us"
            onClick={() => (hideNavBarFunction ? hideNavBarFunction(true) : {})}
          >
            Contact
          </Link>
        </motion.div>
        <motion.div className="option become" variants={optionVariants}>
          <button className="menu-button">Become our model</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Menu;
