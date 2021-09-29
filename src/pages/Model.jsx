import React, { useEffect } from "react";

const Model = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="info-container">
        <div className="model-info">
          <div className="location">
            <span>28.538336</span>
            <span>-81.379234</span>
          </div>
          <div className="instagram">@instagram_placeholder</div>
        </div>
        <div className="name-container">
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
        </div>
      </div>
      <div className="big-image-container">
        <img
          src={process.env.PUBLIC_URL + `/images/models/model-1.webp`}
          alt="model1.jpg"
        />
      </div>
    </main>
  );
};

export default Model;
