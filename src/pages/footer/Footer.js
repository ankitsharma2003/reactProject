import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="container footer-box">
        <div className="left-footer">
          <h1 className="first-footer">Niice</h1>
        </div>
        <div className="mid-footer">
          <ul className="mid-box">
            <li className="list-box">Features</li>
            <li className="list-box">Pricing</li>
            <li className="list-box">Examples</li>
            <li className="list-box">Customers</li>
            <li className="list-box">Partners</li>
            <li className="list-box">Integrations</li>
            <li className="list-box">Changelog</li>
            <li className="list-box">Help</li>
          </ul>
        </div>
        <div className="rigth-footer">
          <ul className="rigth-box">
            <li className="list-boxs">Blog</li>
            <li className="list-boxs">Insights</li>
            <li className="list-boxs">Inspiration</li>
            <li className="list-boxs">Spotlight</li>
            <li className="list-boxs">Glossary</li>
            <li className="list-boxs">Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
