import React from "react";
import "./Model.scss";
import modelImg from "../../assest/modelimg.jpg";

function Model() {
  return (
    <div className="Model">
      <div className="container model-box">
        <div className="img-box">
          <img src={modelImg} alt="modelImg" className="img-style" />
        </div>
        <div className="content">
          <h2 className="heading">Put your brand within their grasp</h2>
          <h4 className="para-text">
            More than just a brand repository, Niice helps you transform how
            well teams and partners grasp, find, and use your brand assets.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Model;
