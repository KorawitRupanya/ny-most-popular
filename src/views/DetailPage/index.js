import React, { useState } from "react";
import Image from "material-ui-image";
import "./index.css";
import { Button, Link } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect } from "react";

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [articleState, setArticle] = useState([]);
  let { article } = useParams();

  useEffect(() => {
    const searchArticles = async (article) => {
      setLoading(true);
      const res = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${article}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
      );
      setArticle(res.data.response.docs);
      setLoading(false);
    };
    searchArticles();
  }, []);

  console.log("Article Title: ", article);
  console.log("Artiles: ", articleState);
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <div class="split left">
            <div class="centered">
              <Image
                max-width="600px"
                src={
                  articleState.multimedia?.[0]?.url
                    ? `https://nyt.com/${articleState.multimedia[0].url}`
                    : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
                }
                alt="news-img"
              />
              <h2>{articleState.title}</h2>
              {/* <p>{articleState.media[0].caption}</p> */}
              {/* <p>section: {articleState.section}</p> */}
              {/* <p>
                published date : {articleState.published_date.split("T")[0]}
              </p> */}
            </div>
          </div>

          <div class="split right">
            <div class="centered">
              <p>{articleState.abstract}</p>
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
