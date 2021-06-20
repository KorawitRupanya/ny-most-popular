import React, { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import SearchBar from "../../components/SearchBar";
import SplitButton from "../../components/SplitButton";
import ArticleList from "../../components/ArticleList";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getStarterArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=GZFxlPYid1KcBhQqopvG3ZRt2xZo4ZsC`
      );
      setArticles(res.data.results);
      setLoading(false);
    };
    getStarterArticles();
  }, []);

  const searchArticles = (text) => {
    if (!text.length) {
      getArticlesByPeriod();
    }
    if (text.length > 0) {
      setLoading(true);
      const filtered = articles.filter((article) => {
        return article.title.toLowerCase().match(text.toLowerCase());
      });
      setLoading(false);
      setArticles(filtered);
    } else setLoading(false);
  };

  const getArticlesByPeriod = async (period) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${
        period ? period : 1
      }.json?api-key=GZFxlPYid1KcBhQqopvG3ZRt2xZo4ZsC`
    );
    setArticles(res.data.results);
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
        <Typography variant="h6">
          {" "}
          Most viewed in{" "}
          <SplitButton getArticlesByPeriod={getArticlesByPeriod} /> Days{" "}
        </Typography>
      </div>
      <ArticleList loading={loading} articles={articles} />
    </>
  );
};

export default HomePage;
