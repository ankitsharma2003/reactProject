import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="container nav-style">
        <div className="left-nav">
          <ul>
            <li>Use cases</li>
            <li>Customers</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="rigth-nav">
          <ul>
            <li>Examples</li>
            <li onClick={() => navigate('/news')}>Templates</li>
            <li onClick={() => navigate("/login")}>Sign in</li>
            <li className="primary-btn" onClick={() => navigate("/signup")}>
              Create a brand hub
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
