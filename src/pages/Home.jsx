import React from "react";
import modelData from "../data/modelData";

const models = Object.keys(modelData);
const rows = [];
console.log(modelData);
for (var i = 0; i < models.length; i += 2) {
  const pair = [
    modelData[models[i]],
    i + 1 < models.length ? modelData[models[i + 1]] : null,
  ];
  if (pair[1] === null) {
    pair.pop();
  }
  rows.push(
    <div className="row">
      {pair.map((element) => (
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
            <div className="title">{element.name + " " + element.surname}</div>
            <div className="location">
              <span>28.538336</span>
              <span>-81.379234</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const Home = () => {
  return (
    <main>
      <div className="container">{rows}</div>
    </main>
  );
};

export default Home;
