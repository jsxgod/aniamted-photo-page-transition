import { motion } from "framer-motion";
import React, { useState } from "react";
import { Menu } from "../components/home";

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
    y: 100,
  },
  animate: {
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

const Home = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <Menu opened={menuOpened} />
      <div className={`hamburger ${menuOpened ? "short" : "long"} `}>
        <motion.button
          className="hamburger-menu"
          variants={mainVariants}
          initial="initial"
          animate="animate"
          onClick={() => setMenuOpened(!menuOpened)}
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
      </div>

      <motion.div
        className="home-page"
        variants={opacityVariants}
        initial="initial"
        animate={menuOpened ? "hide" : "show"}
        exit="exit"
      >
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
          <motion.div className="welcome-message">
            <p tabindex="1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A est
              laborum sed nam id ab qui fugit ducimus, minima consequatur quam
              porro aliquid sint error, pariatur velit magni quidem voluptates.
              Ullam explicabo eius, enim est delectus nisi laboriosam ex
              pariatur perferendis assumenda aliquid provident voluptatibus
              cupiditate architecto commodi natus. Aliquam neque animi voluptate
              officia impedit eligendi cum dolorum minus, deleniti ipsam nostrum
              nemo illo, magnam hic dicta architecto quis distinctio!
              Consequatur possimus odio ullam voluptas accusamus! Culpa iste
              illo quidem nulla impedit, fugit, enim eius asperiores consequatur
              dolor quas reprehenderit dolorem inventore incidunt perferendis
              aliquid, nemo tempore commodi unde! Magnam.
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
        <div className="section-title left">
          <h1>Model</h1>
        </div>
        <div className="section-title right">
          <h1>Agency</h1>
        </div>
        <div className="sub-section left">
          <div className="sub-title">
            <h2>Inspiration</h2>
          </div>
          <div className="sub-section-content-wrapper">
            <div className="sub-message">
              <h3>Lorem?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ut
                nemo dolor recusandae expedita natus in cumque iure ipsa vero
                earum, dicta mollitia placeat ratione quasi molestiae quos
                officiis minima debitis amet excepturi sequi iusto voluptatem?
                Amet accusamus aliquam distinctio omnis at blanditiis a odio
                iure. Id necessitatibus rem deserunt?
              </p>
            </div>
            <div className="sub-message">
              <h3>Ipsum?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ut
                nemo dolor recusandae expedita natus in cumque iure ipsa vero
                earum, dicta mollitia placeat ratione quasi molestiae quos
                officiis minima debitis amet excepturi sequi iusto voluptatem?
              </p>
            </div>
          </div>
        </div>
        <div className="sub-section right">
          <div className="sub-title">
            <h2>About</h2>
          </div>
          <div className="sub-section-content-wrapper">
            <div className="sub-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                non cumque accusamus ea exercitationem assumenda nihil veniam
                doloribus quia eius, molestiae nobis blanditiis commodi officia
                amet. Vitae eaque sit, magnam itaque voluptates, repudiandae
                facilis molestiae atque quis et, consequatur tenetur! Tempora
                cupiditate at ut dolor pariatur iusto a mollitia obcaecati quo
                laboriosam ipsa voluptate repellat minima fugiat possimus quidem
                corrupti optio suscipit delectus, accusamus, eligendi porro
                ipsum repudiandae! Minus, nostrum? Pariatur quod vitae
                repudiandae. Labore, unde ducimus accusamus distinctio sint
                perferendis porro soluta molestias obcaecati quam dicta odit
                nulla.
              </p>
            </div>
          </div>
        </div>
        <div className="contact"></div>
      </motion.div>
    </>
  );
};

export default Home;
