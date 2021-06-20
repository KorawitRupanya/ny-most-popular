import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import PeriodSelector from "../../components/PeriodSelector";
import ArticleList from "../../components/ArticleList";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    getStarterArticles();
  }, []);

  const getStarterArticles = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
    );
    const { results } = res.data;
    setArticles(results);
    setFilteredArticles(results);
    setLoading(false);
  };

  const searchArticles = (text) => {
    if (text.length > 0) {
      setLoading(true);
      const filtered = articles.filter((article) => {
        return article.title.toLowerCase().match(text.toLowerCase());
      });
      setFilteredArticles(filtered);
      setLoading(false);
    } else setLoading(false);
  };

  const getArticlesByPeriod = async (period) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${
        period ? period : 1
      }.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
    );
    const { results } = res.data;
    setArticles(results);
    setFilteredArticles(results);
    setLoading(false);
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridColumnGap: "10px",
          margin: "10px",
        }}
      >
        <SearchBar searchArticles={searchArticles} />
        <PeriodSelector getArticlesByPeriod={getArticlesByPeriod} />
      </div>
      <ArticleList loading={loading} articles={filteredArticles} />
    </>
  );
};

export default HomePage;
