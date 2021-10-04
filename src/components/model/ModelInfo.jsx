import React from "react";

const ModelInfo = ({ model }) => {
  return (
    <div className="model-info-wrapper">
      <div className="model-info-container">
        <div className="paragraph-container">
          <div className="h2-wrapper">
            <h2> About </h2>
          </div>
          <div className="p-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              nisi cupiditate! Ut cupiditate iusto nostrum voluptates sed
              dolorem asperiores placeat minima, quidem aliquam, sequi impedit,
              magnam itaque cum unde consectetur ullam sit? Tenetur, labore,
              quos in assumenda distinctio sequi vel magnam eum nulla eaque
              consequatur ipsum illum neque eius reprehenderit quae accusantium
              perferendis! Dolorum perspiciatis non aperiam praesentium nostrum
              optio necessitatibus, quis assumenda tempora nesciunt dolorem
              corporis alias molestiae quia consectetur cupiditate amet quam
              illum officia autem laborum molestias. Cum consequatur sapiente
              corrupti voluptatem odit ad id, totam neque magnam dolor fuga
              maiores molestiae quo est maxime blanditiis culpa deserunt.
            </p>
          </div>
        </div>
        <div className="model-details">
          <div className="info-row">
            <div className="info-label">Name</div>
            <div className="info-value">{model.name}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Surname</div>
            <div className="info-value">{model.surname}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Age</div>
            <div className="info-value">{model.age}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Height</div>
            <div className="info-value">{model.height}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Eye Color</div>
            <div className="info-value">{model.eye_color}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Hair Color</div>
            <div className="info-value">{model.hair_color}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelInfo;
