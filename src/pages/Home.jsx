import React from "react";

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div className="thumbnail">
              <div className="frame">
                <img
                  src={
                    process.env.PUBLIC_URL + `/images/models/model-1-small.jpg`
                  }
                  alt="model1.jpg"
                />
              </div>
            </div>
            <div className="information">
              <div className="title">yasmeen tariq</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
