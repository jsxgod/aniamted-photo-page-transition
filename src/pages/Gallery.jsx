import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Curtain } from "../components";
import modelData from "../data/modelData";

const Gallery = () => {
  const [modelClicked, setModelClicked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Curtain clicked={modelClicked} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.55, 0.45, 1],
        }}
      >
        <div className="container">
          <div className="gallery">
            {modelData.map((model, i) => (
              <div key={i} className="image-container">
                <div className="thumbnail">
                  <Link
                    to={`/model/${model.id}`}
                    onClick={() => setModelClicked(true)}
                    className="img-link"
                  >
                    <img
                      src={process.env.PUBLIC_URL + model.image}
                      alt="model1.jpg"
                    />
                  </Link>
                </div>
                <div className="information">
                  <div className="title">
                    {model.name + " " + model.surname}
                  </div>
                  <div className="location">
                    <span>{model.longitude}</span>
                    <span>{model.latitude}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Gallery;
