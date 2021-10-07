import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const menuVariants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const optionVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const Menu = ({ opened }) => {
  return (
    <div className="menu-container">
      <motion.div
        className={opened ? "menu visible" : "menu hidden"}
        variants={menuVariants}
        initial="hide"
        animate={opened ? "show" : "hide"}
        exit="exit"
      >
        {true && (
          <>
            <motion.div className="option dark home" variants={optionVariants}>
              <Link to="/">Home</Link>
            </motion.div>
            <motion.div
              className="option bright about"
              variants={optionVariants}
            >
              <Link to="/about-us">About</Link>
            </motion.div>
            <motion.div
              className="option bright gallery"
              variants={optionVariants}
            >
              <Link to="/gallery">Gallery</Link>
            </motion.div>
            <motion.div
              className="option dark contact"
              variants={optionVariants}
            >
              <Link to="/contact">Contact</Link>
            </motion.div>
            <motion.div className="option become" variants={optionVariants}>
              <button className="menu-button">Become our model</button>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Menu;
