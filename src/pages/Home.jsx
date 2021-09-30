import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import modelData from "../data/modelData";

const models = Object.keys(modelData);

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="container">
        <div className="gallery">
          {models.map((model) => (
            <div className="image-container">
              <div className="thumbnail">
                <Link
                  to={`/model/${modelData[model].name}-${modelData[model].surname}`}
                  className="img-link"
                >
                  <img
                    src={process.env.PUBLIC_URL + modelData[model].image}
                    alt="model1.jpg"
                  />
                </Link>
              </div>
              <div className="information">
                <div className="title">
                  {modelData[model].name + " " + modelData[model].surname}
                </div>
                <div className="location">
                  <span>{modelData[model].longitude}</span>
                  <span>{modelData[model].latitude}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
