import React from "react";
import "./Protect.scss";
import protectImg from "../../assest/protect.jpg";

function Protect() {
  return (
    <div className="Protect">
      <div className="container protect-box">
        <div className="img-box">
          <img src={protectImg} alt="protectImg" />
          <h1 className="heading-text">
            <span className="color-text">Protect brand integrity</span> with
            guides that ignite understanding
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Protect;
