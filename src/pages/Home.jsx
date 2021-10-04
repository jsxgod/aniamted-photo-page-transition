import { motion } from "framer-motion";
import React from "react";

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

const exitVariants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.96],
    },
  },
};

const welcomeVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      staggerChildren: 0.04,
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

const titleVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 1.5,
      ease: [0.6, 0.01, -0.05, 0.96],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.96],
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.8,
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

const Home = () => {
  return (
    <motion.div className="home-page" variants={exitVariants} exit="exit">
      <motion.div
        className="hint"
        variants={mainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {window.innerWidth < 992 ? "Tap" : "Hover"} on text to read
      </motion.div>
      <motion.div
        className="welcome-wrapper"
        variants={welcomeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1 variants={titleVariants}>Welcome</motion.h1>
        <motion.div
          className="welcome-message"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
        >
          <p variants={mainVariants} tabindex="1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A est
            laborum sed nam id ab qui fugit ducimus, minima consequatur quam
            porro aliquid sint error, pariatur velit magni quidem voluptates.
            Ullam explicabo eius, enim est delectus nisi laboriosam ex pariatur
            perferendis assumenda aliquid provident voluptatibus cupiditate
            architecto commodi natus. Aliquam neque animi voluptate officia
            impedit eligendi cum dolorum minus, deleniti ipsam nostrum nemo
            illo, magnam hic dicta architecto quis distinctio! Consequatur
            possimus odio ullam voluptas accusamus! Culpa iste illo quidem nulla
            impedit, fugit, enim eius asperiores consequatur dolor quas
            reprehenderit dolorem inventore incidunt perferendis aliquid, nemo
            tempore commodi unde! Magnam.
          </p>
        </motion.div>
      </motion.div>
      <div className="img-wrapper">
        <motion.img
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          src={process.env.PUBLIC_URL + `/images/model-home-1.png`}
          alt={"transparent.png"}
        />
      </div>
    </motion.div>
  );
};

export default Home;
