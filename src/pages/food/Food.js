import React from "react";
import "./Food.scss";
import foodImg from "../../assest/food.jpg";

function Food() {
  return (
    <div className="Food">
      <div className="container protect-box">
        <div className="img-box">
          <h1 className="heading-text">
            <span className="color-text">Find files faster</span> with
            with beautifully clear collections
          </h1>
          <img src={foodImg} alt="protectImg" />
        </div>
      </div>
    </div>
  );
}

export default Food;
