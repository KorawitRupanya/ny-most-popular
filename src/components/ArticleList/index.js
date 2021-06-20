import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import ArticleCard from "../ArticleCard";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});
function ArticleList({ loading, articles }) {
  const classes = useStyles();

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div
          divided
          style={{ maxWidth: 900, margin: "0 auto" }}
          className={classes.root}
        >
          <Grid container spacing={3}>
            {articles.map((article, index) => (
              <Grid key={article.id} item xs={12} sm={4} md={6}>
                <Link to="/detail">
                  <ArticleCard article={article} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
}

ArticleList.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
};

export default ArticleList;
