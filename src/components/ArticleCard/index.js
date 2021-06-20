import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    height: 600,
  },
  media: {
    height: 300,
  },
});

const ArticleCard = ({ article }) => {
  const classes = useStyles();
  const [firstMedia] = article.media;

  return (
    <div className={classes.root}>
      {article && (
        <Card className={classes.card} id={article.id}>
          <CardMedia
            className={classes.media}
            component="img"
            src={
              firstMedia
                ? firstMedia["media-metadata"][2].url
                : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
            }
            alt="news-img"
          />
          <CardContent>
            <Typography color="primary" variant="h6">
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                {article.title}
              </a>
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              <Chip label={article.section} /> {article.published_date}
            </Typography>
            <Typography variant="body2" component="p">
              {article.abstract}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleCard;
