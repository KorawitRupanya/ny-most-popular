import React, { useState } from "react";
import Image from "material-ui-image";
import "./index.css";
import { Button, Link } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  let { article } = useParams();

  const searchArticles = async (article) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${article}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
    );
    setArticles(res.data.response.docs);
    setLoading(false);
  };

  console.log(article);
  return (
    <>
      <div>
        <div class="split left">
          <div class="centered">
            <Image
              max-width="600px"
              src={article.media[0]["media-metadata"][2].url}
            />
            <h2>{article.title}</h2>
            <p>{article.media[0].caption}</p>
            <p>section: {article.section}</p>
            <p>published date : {article.published_date.split("T")[0]}</p>
          </div>
        </div>

        <div class="split right">
          <div class="centered">
            <p>{article.abstract}</p>
            <br />
            <Link to="/">
              <Button href={article.url} target="_blank">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
