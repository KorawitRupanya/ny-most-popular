import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography, Chip, CircularProgress } from "@material-ui/core";
import Image from "material-ui-image";
import axios from "axios";
import "./index.css";

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [articleState, setArticleState] = useState([]);
  let { article } = useParams();

  useEffect(() => {
    const searchArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${article}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
      );
      setArticleState(res.data.response.docs[0]);
      setLoading(false);
    };
    searchArticles();
  }, [article]);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <div class="split left">
            <div class="centered">
              <Image
                src={
                  articleState.multimedia?.[0]?.url
                    ? `https://nyt.com/${articleState.multimedia[0].url}`
                    : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
                }
                alt="news-img"
              />
              <a href={articleState.web_url}>
                <Typography variant="h6">
                  {articleState.headline.main}
                </Typography>
              </a>
              <Typography variant="body1">{articleState.abstract}</Typography>
              <br />
              <Typography variant="subtitle1">
                Published: {articleState.pub_date.split("T")[0]} &nbsp; | &nbsp;
                {articleState.byline.original}
              </Typography>
              <br />
              <Chip label={articleState.section_name} />
            </div>
          </div>
          <div class="split right">
            <div class="centered">
              <Typography variant="body1">
                {articleState.lead_paragraph}
              </Typography>
              <br />
              <Link to="/">
                <Button arget="_blank">Back</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
