import { motion } from "framer-motion";
import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hint">
        {window.innerWidth < 992 ? "Tap" : "Hover"} on text to read
      </div>
      <div className="welcome-wrapper">
        <h1>Welcome</h1>
        <div className="welcome-message">
          <p tabindex="1">
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
        </div>
      </div>
      <div className="img-wrapper">
        <img
          src={process.env.PUBLIC_URL + `/images/model-home-1.png`}
          alt={"transparent.png"}
        />
      </div>
    </div>
  );
};

export default Home;
