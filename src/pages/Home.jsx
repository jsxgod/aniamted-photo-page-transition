import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { HamburgerButton, HamburgerRail, Menu } from "../components/";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { useInterval } from "../hooks/useInterval";

const opacityVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
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

const bringDown = {
  initial: {
    y: "-150%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,
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

const bringUp = {
  initial: {
    y: "150%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,
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
    scale: 3,
    opacity: 0.001,
    y: -100,
  },
  animate: {
    scale: 3,
    opacity: 0.5,
    y: 0,
    transition: {
      duration: 2,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
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

const locationVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,
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

const Home = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useInterval(() => {
    if (photoIndex === 2) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex((photoIndex) => photoIndex + 1);
    }
  }, 5000);

  return (
    <>
      <Menu opened={menuOpened} />
      <HamburgerRail>
        <HamburgerButton
          menuOpened={menuOpened}
          stateChanger={setMenuOpened}
          useMainVariants={true}
        />
      </HamburgerRail>
      <motion.div
        className="home-page"
        variants={opacityVariants}
        initial="initial"
        animate={menuOpened ? "hide" : "show"}
        exit="exit"
      >
        <motion.div className={"title-wrapper left"}>
          <motion.h1
            initial="initial"
            animate="animate"
            exit="exit"
            variants={bringDown}
          >
            Model
          </motion.h1>
        </motion.div>
        <div className={"title-wrapper right"}>
          <motion.h1
            initial="initial"
            animate="animate"
            exit="exit"
            variants={bringUp}
          >
            Agency
          </motion.h1>
        </div>
        <div className="image-wrapper">
          <AnimatePresence>
            {photoIndex === 0 && (
              <motion.img
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                src={process.env.PUBLIC_URL + `/images/model-home-0.png`}
                alt={"transparent.png"}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {photoIndex === 1 && (
              <motion.img
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                src={process.env.PUBLIC_URL + `/images/model-home-1.png`}
                alt={"transparent.png"}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {photoIndex === 2 && (
              <motion.img
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                src={process.env.PUBLIC_URL + `/images/model-home-2.png`}
                alt={"transparent.png"}
              />
            )}
          </AnimatePresence>
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delayChildren: 1, staggerChildren: 0.3 }}
          className="locations-wrapper"
        >
          <motion.span variants={locationVariants}>Berlin</motion.span>
          <motion.span variants={locationVariants}>Paris</motion.span>
          <motion.span variants={locationVariants}>Rome</motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.5 } }}
          className="dots-wrapper"
        >
          {[0, 1, 2].map((idx) =>
            idx === photoIndex ? (
              <MdRadioButtonChecked
                key={`dot-checked-${idx}`}
                className={`dot-outline ${idx === photoIndex ? "active" : ""}`}
              />
            ) : (
              <MdRadioButtonUnchecked
                key={`dot-outline-${idx}`}
                className={`dot-outline ${idx === photoIndex ? "active" : ""}`}
                onClick={() => setPhotoIndex(idx)}
              />
            )
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
