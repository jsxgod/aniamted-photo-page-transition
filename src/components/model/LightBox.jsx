import React from "react";
import { motion } from "framer-motion";

const LightBox = ({ model, variants, showLightbox, showLightboxFunction }) => {
  return (
    <>
      {showLightbox && (
        <div className="lightbox-wrapper">
          <div className="lightbox">
            <motion.button
              variants={variants}
              className="close-button"
              onClick={() => showLightboxFunction(false)}
            >
              <span></span>
              <span></span>
            </motion.button>
            <motion.img
              variants={variants}
              src={process.env.PUBLIC_URL + model.image_large}
              alt={process.env.PUBLIC_URL + model.image}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LightBox;
