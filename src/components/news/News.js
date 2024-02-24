import React, { useEffect, useRef, useState } from "react";
import NewsApp from "../newsapp/NewsApp";
import "./News.scss";

function News() {
  const apiKy = "1bbe5c9f76c1495696fea9c2981b5ed7";

  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const inputRef = useRef(null);

  async function fetchData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    setNewsList(jsonData.articles);
  }

  useEffect(() => {
    fetchData();
  }, [query]);

  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-01-24&sortBy=publishedAt&apiKey=${apiKy}`;

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(inputRef.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="input-style" type="text" ref={inputRef} />
        <div className="button-box">
          <input type="submit" className="submit-btn" />
        </div>
      </form>
      <div className="news-box">
        {newsList.map((news) => {
          return <NewsApp key={news.url} news={news} />;
        })}
      </div>
    </>
  );
}

export default News;
