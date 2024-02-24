import React from "react";
import "./NewsApp.scss";

function NewsApp({ news }) {
  return (
    <div className="NewsApp">
      <div className="container newsapp-box">
        <div className="img-box">
          <img src={news.urlToImage} alt={news.title} />
        </div>
        <h1>{news.content}</h1>
        <p>{news.description}</p>
        <p>{news.publishedAt}</p>
      </div>
    </div>
  );
}

export default NewsApp;
