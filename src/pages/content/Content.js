import React from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();
  return (
    <div className="Content">
      <div className="container container-style">
        <p className="content-para">The Brand Hub for Remote Creative Teams</p>
        <h1 className="content-heading">Show what your brand is made of</h1>
        <h3 className="content-name">
          Bring your guidelines, libraries, projects and people together in a
          brand hub that untangles access and gives creative assets the
          attention they deserve.
        </h3>
        <div className="btn">
          <button
            className="secondary-btn"
            onClick={(e) => navigate("/signup")}
          >
            Start your brand hub
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
