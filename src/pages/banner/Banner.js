import React from "react";
import "./Banner.scss";
import { FaArrowRightLong } from "react-icons/fa6";

function Banner() {
  return (
    <div className="Banner">
      <div className="container para-style">
        <p className="para-text">
          Introducing Niice Docs:online guideliness that evolve with your
          brand.|Find out more <FaArrowRightLong/>
        </p>
      </div>
    </div>
  );
}

export default Banner;
